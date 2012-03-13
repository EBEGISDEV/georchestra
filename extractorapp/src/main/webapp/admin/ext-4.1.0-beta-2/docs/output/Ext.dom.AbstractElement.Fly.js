Ext.data.JsonP.Ext_dom_AbstractElement_Fly({"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/AbstractElement.html#Ext-dom-AbstractElement-Fly' target='_blank'>AbstractElement.js</a></div></pre><div class='doc-contents'><p>A non-persistent wrapper for a DOM element which may be used to execute methods of Ext.Dom.Element\nupon a DOM element without creating an instance of <a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.dom.Element</a>.</p>\n\n<p>A <strong>singleton</strong> instance of this class is returned when you use <a href=\"#!/api/Ext-method-fly\" rel=\"Ext-method-fly\" class=\"docClass\">Ext.fly</a></p>\n\n<p>Because it is a singleton, this Flyweight does not have an ID, and must be used and discarded in a single line.\nYou should not keep and use the reference to this singleton over multiple lines because methods that you call\nmay themselves make use of <a href=\"#!/api/Ext-method-fly\" rel=\"Ext-method-fly\" class=\"docClass\">Ext.fly</a> and may change the DOM element to which the instance refers.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-isFly' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dom.AbstractElement.Fly'>Ext.dom.AbstractElement.Fly</span><br/><a href='source/AbstractElement.html#Ext-dom-AbstractElement-Fly-property-isFly' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dom.AbstractElement.Fly-property-isFly' class='name expandable'>isFly</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'>This is true to identify Element flyweights ...</div><div class='long'><p>This is <code>true</code> to identify Element flyweights</p>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Methods</h3><div id='static-method-fly' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dom.AbstractElement.Fly'>Ext.dom.AbstractElement.Fly</span><br/><a href='source/AbstractElement.html#Ext-dom-AbstractElement-Fly-static-method-fly' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dom.AbstractElement.Fly-static-method-fly' class='name expandable'>fly</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/HTMLElement dom, [<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> named]</span> ) : <a href=\"#!/api/Ext.dom.AbstractElement.Fly\" rel=\"Ext.dom.AbstractElement.Fly\" class=\"docClass\">Ext.dom.AbstractElement.Fly</a><strong class='static signature'>static</strong></div><div class='description'><div class='short'>Gets the singleton flyweight element, with the passed node as the active element. ...</div><div class='long'><p>Gets the singleton <a href=\"#!/api/Ext.dom.AbstractElement.Fly\" rel=\"Ext.dom.AbstractElement.Fly\" class=\"docClass\">flyweight</a> element, with the passed node as the active element.</p>\n\n<p>Because it is a singleton, this Flyweight does not have an ID, and must be used and discarded in a single line.\nYou may not keep and use the reference to this singleton over multiple lines because methods that you call\nmay themselves make use of <a href=\"#!/api/Ext-method-fly\" rel=\"Ext-method-fly\" class=\"docClass\">Ext.fly</a> and may change the DOM element to which the instance refers.</p>\n\n<p><a href=\"#!/api/Ext-method-fly\" rel=\"Ext-method-fly\" class=\"docClass\">Ext.fly</a> is alias for Ext.dom.AbstractElement.fly.</p>\n\n<p>Use this to make one-time references to DOM elements which are not going to be accessed again either by\napplication code, or by Ext's classes. If accessing an element which will be processed regularly, then <a href=\"#!/api/Ext-method-get\" rel=\"Ext-method-get\" class=\"docClass\">Ext.get</a> will be more appropriate to take advantage of the caching provided by the <a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.dom.Element</a>\nclass.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dom</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/HTMLElement<div class='sub-desc'><p>The dom node or id</p>\n</div></li><li><span class='pre'>named</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>Allows for creation of named reusable flyweights to prevent conflicts (e.g.\ninternally Ext uses \"_global\")</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.dom.AbstractElement.Fly\" rel=\"Ext.dom.AbstractElement.Fly\" class=\"docClass\">Ext.dom.AbstractElement.Fly</a></span><div class='sub-desc'><p>The singleton flyweight object (or null if no matching element was found)</p>\n</div></li></ul></div></div></div></div></div></div></div>","subclasses":[],"extends":null,"statics":{"cfg":[],"property":[],"css_var":[],"event":[],"method":[{"owner":"Ext.dom.AbstractElement.Fly","tagname":"method","meta":{"static":true},"name":"fly","id":"static-method-fly"}],"css_mixin":[]},"alternateClassNames":[],"tagname":"class","singleton":false,"code_type":"assignment","inheritable":false,"superclasses":[],"component":false,"requires":[],"inheritdoc":null,"mixins":[],"mixedInto":[],"meta":{},"members":{"cfg":[],"property":[{"owner":"Ext.dom.AbstractElement.Fly","tagname":"property","meta":{},"name":"isFly","id":"property-isFly"}],"css_var":[],"event":[],"css_mixin":[],"method":[]},"allMixins":[],"html_meta":{},"uses":[],"private":false,"name":"Ext.dom.AbstractElement.Fly","aliases":{},"files":[{"href":"AbstractElement.html#Ext-dom-AbstractElement-Fly","filename":"AbstractElement.js"}],"id":"class-Ext.dom.AbstractElement.Fly"});