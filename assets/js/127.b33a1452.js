(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{605:function(e,t,o){"use strict";o.r(t);var i=o(0),a=Object(i.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"scm-plugins"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#scm-plugins","aria-hidden":"true"}},[e._v("#")]),e._v(" SCM Plugins")]),e._v(" "),o("p",[e._v("Updated October 28, 2016")]),e._v(" "),o("h2",{attrs:{id:"about"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#about","aria-hidden":"true"}},[e._v("#")]),e._v(" About")]),e._v(" "),o("p",[e._v("SCM Plugins come in two flavors: "),o("code",[e._v("ScmExport")]),e._v(" and "),o("code",[e._v("ScmImport")]),e._v(".")]),e._v(" "),o("p",[o("code",[e._v("ScmExport")]),e._v("\n: Allows exporting Job changes.")]),e._v(" "),o("p",[o("code",[e._v("ScmImport")]),e._v("\n: Allows importing Job changes.")]),e._v(" "),o("p",[e._v("The two types can be combined or used separately.")]),e._v(" "),o("h2",{attrs:{id:"configuring"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuring","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuring")]),e._v(" "),o("p",[e._v("Each Project can enable a single "),o("code",[e._v("ScmImport")]),e._v(" and/or "),o("code",[e._v("ScmExport")]),e._v(" plugin.")]),e._v(" "),o("p",[e._v("This is done in the SCM Configuration page in the Rundeck GUI.")]),e._v(" "),o("p",[e._v("Alternately, you can use the [Rundeck API - SCM](/api/rundeck-api.md#scm].")]),e._v(" "),o("p",[e._v("SCM Configuration for a project is "),o("em",[e._v("not")]),e._v(" stored in the "),o("code",[e._v("project.properties")]),e._v("\nconfiguration contents.")]),e._v(" "),o("h2",{attrs:{id:"java-plugin-type"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#java-plugin-type","aria-hidden":"true"}},[e._v("#")]),e._v(" Java Plugin Type")]),e._v(" "),o("ul",[o("li",[o("em",[e._v("Note")]),e._v(": Refer to [Java Development](/developer/01-plugin-development.md#java-plugin-development] for information about developing a Java plugin for Rundeck.")])]),e._v(" "),o("p",[e._v("The plugin interface is "),o("router-link",{attrs:{to:"/developer/${javadocbase}/com/dtolabs/rundeck/plugins/scm/ScmExportPluginFactory.html"}},[e._v("ScmExportPluginFactory")]),e._v(".\nThis factory type should produce a "),o("router-link",{attrs:{to:"/developer/${javadocbase}/com/dtolabs/rundeck/plugins/scm/ScmExportPlugin.html"}},[e._v("ScmExportPlugin")]),e._v(" object.")],1),e._v(" "),o("p",[e._v("The plugin interface is "),o("router-link",{attrs:{to:"/developer/${javadocbase}/com/dtolabs/rundeck/plugins/scm/ScmImportPluginFactory.html"}},[e._v("ScmImportPluginFactory")]),e._v(".\nThis factory type should produce a "),o("router-link",{attrs:{to:"/developer/${javadocbase}/com/dtolabs/rundeck/plugins/scm/ScmImportPlugin.html"}},[e._v("ScmImportPlugin")]),e._v(" object.")],1),e._v(" "),o("h2",{attrs:{id:"localization"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#localization","aria-hidden":"true"}},[e._v("#")]),e._v(" Localization")]),e._v(" "),o("p",[e._v("For the basics of plugin localization see: [Plugin Development - Plugin Localization](/developer/01-plugin-development.md#plugin-localization].")]),e._v(" "),o("h3",{attrs:{id:"message-codes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#message-codes","aria-hidden":"true"}},[e._v("#")]),e._v(" Message Codes")]),e._v(" "),o("p",[e._v('In addition to the [basic plugin message codes](/developer/01-plugin-development.md#defining-plugin-localization-messages], SCM Plugins can have multiple "input views" with a set of properties,\nas well as a set of "setup" properties.\nThe codes for these properties can be defined in your "messages.properties"\nfile using the following patterns:')]),e._v(" "),o("ul",[o("li",[o("code",[e._v("setup.property.NAME.title")]),e._v(' Title for setup property named "NAME"')]),e._v(" "),o("li",[o("code",[e._v("setup.property.NAME.description")]),e._v(' Description for setup property named "NAME"')]),e._v(" "),o("li",[o("code",[e._v("action.ID.title")]),e._v(' Title for action view with ID "ID"')]),e._v(" "),o("li",[o("code",[e._v("action.ID.description")]),e._v(' Description for action view with ID "ID"')]),e._v(" "),o("li",[o("code",[e._v("action.ID.buttonTitle")]),e._v(' Button Title for action view with ID "ID"')]),e._v(" "),o("li",[o("code",[e._v("action.ID.property.NAME.title")]),e._v(' Title for property named "NAME" for action view with ID "ID"')]),e._v(" "),o("li",[o("code",[e._v("action.ID.property.NAME.description")]),e._v(' Description for property named "NAME" for action view with ID "ID"')])]),e._v(" "),o("h2",{attrs:{id:"example"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[e._v("#")]),e._v(" Example")]),e._v(" "),o("p",[e._v("The Git Plugin bundled with rundeck provides an example.")]),e._v(" "),o("p",[e._v("View: "),o("a",{attrs:{href:"https://github.com/rundeck/rundeck/tree/master/plugins/git-plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git Plugin Source"),o("OutboundLink")],1),e._v(".")])])},[],!1,null,null,null);t.default=a.exports}}]);