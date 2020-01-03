require('components/logs/logs.tpl')

class LogsController {
  static $inject = ['$injector']

  constructor ($injector) {
    this.$injector = $injector
    this.itemsPerPage = 15
    const i18n = {}
    this.$injector.get('translate')('logs.error', i18n)
    this.$injector.get('translate')('logs.alltarget', i18n)

    this.logs = $injector.get('Logs').query({
      limit: 100000,
      page: 0
    }, () => {
      const extract = (key) => [...new Set(this.logs.map(l => l[key]))]
      this.senders = extract('admin')
      this.types = extract('type')
      this.targets = [{ key: 'all', value: i18n.alltarget }].concat(
        extract('target').map(g => ({ key: g, value: g }))
      )
    }, () => {
      $injector.get('Flash').create('danger', i18n.error)
    })

    this.target = 'all'

    this.date = {
      start: this.$injector.get('date').getDefault(),
      end: this.$injector.get('date').getEnd()
    }
  }

  isFiltered () {
    return this.admin || this.type || this.target !== 'all' ||
      this.date.start !== this.$injector.get('date').getDefault() ||
      this.date.end !== this.$injector.get('date').getEnd()
  }

  reset () {
    this.admin = undefined
    this.type = undefined
    this.target = 'all'
    this.date.start = this.$injector.get('date').getDefault()
    this.date.end = this.$injector.get('date').getEnd()
  }
}

const filterLogs = () => {
  return (logs, type, admin, target, date) => {
    if (!logs) { return }

    const filtered = logs.filter(log => {
      let valid = true
      if (type && log.type !== type) {
        valid = false
      }
      if (admin && log.admin !== admin) {
        valid = false
      }
      if (target !== 'all' && log.target !== target) {
        valid = false
      }
      if (date &&
        (moment(log.date).isBefore(date.start) ||
        moment(log.date).isAfter(date.end))) {
        valid = false
      }
      return valid
    })

    return filtered
  }
}

const logDateFilter = () => date => moment(date).format('YYYY-MM-DD HH:mm')

angular
  .module('manager')
  .controller('LogsController', LogsController)
  .filter('logs', filterLogs)
  .filter('logDate', logDateFilter)
