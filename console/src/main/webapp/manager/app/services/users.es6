angular.module('manager')
  .factory('User', ['$resource', 'CONSOLE_PRIVATE_PATH', ($resource, baseUri) =>
    $resource(baseUri + 'users/:id', { id: '@uid' }, {
      query: {
        cache: true,
        method: 'GET',
        isArray: true
      },
      get: {
        cache: true
      },
      update: {
        params: { id: '@originalID' },
        method: 'PUT'
      }
    })
  ]).factory('Email', ['$resource', 'CONSOLE_PRIVATE_PATH', ($resource, baseUri) =>
    $resource(baseUri + '../:id/emails', { id: '@id' }, {
      query: {
        method: 'GET',
        isArray: false
      }
    })
  ]).factory('Profile', ['$resource', 'CONSOLE_PRIVATE_PATH', ($resource, baseUri) =>
    $resource(baseUri + 'users/profile', {}, {
      query: {
        method: 'GET',
        isArray: false
      }
    })
  ]).factory('UserRequired', ['$resource', 'CONSOLE_PUBLIC_PATH', ($resource, baseUri) =>
    $resource(baseUri + 'users/requiredFields', {}, {
      get: {
        method: 'GET',
        cache: true,
        transformResponse: (data) => {
          const response = {}
          JSON.parse(data).forEach(key => { response[key] = true })
          return response
        },
        headers: {
          'Content-Type': 'application/json'
        }
      }
    })
  ]).factory('ExportCSV', ['$http', 'CONSOLE_PRIVATE_PATH', ($http, baseUri) => {
    return users => {
      return $http.post(baseUri + 'export/users.csv', users, {
        cache: false,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'text/csv'
        }
      })
    }
  }
  ]).factory('ExportVCF', ['$http', 'CONSOLE_PRIVATE_PATH', ($http, baseUri) => {
    return users => {
      return $http.post(baseUri + 'export/users.vcf', users, {
        cache: false,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'text/x-vcard'
        }
      })
    }
  }
  ])
