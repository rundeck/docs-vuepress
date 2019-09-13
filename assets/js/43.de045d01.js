(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{365:function(e,t,a){e.exports=a.p+"assets/img/webhook-run-job-plugin.a38da0c4.png"},413:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"webhook-run-job-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webhook-run-job-plugin","aria-hidden":"true"}},[e._v("#")]),e._v(" Webhook Run Job Plugin")]),e._v(" "),s("div",{staticClass:"danger custom-block"},[s("p",[e._v("Webhooks and the Run Job Plugin are currently in beta.\nThere may be breaking API changes between releases!")])]),e._v(" "),s("p",[e._v("The webhook run job plugin receives a webhook event and executes the configured job.\nYou can pass the payload of the webhook to the job or use the event payload information\nto supply options, node filter, and "),s("code",[e._v("Run As")]),e._v(" user to the job.")]),e._v(" "),s("p",[e._v("This plugin only handles JSON payloads.")]),e._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),s("p",[e._v("Add a new webhook in the UI, then pick the "),s("code",[e._v("Webhook Run Job")]),e._v(" webhook event plugin."),s("br"),e._v("\nYou will see the following configuration options in the "),s("code",[e._v("Plugin Configuration")]),e._v(" section.")]),e._v(" "),s("figure",[s("img",{attrs:{src:a(365),alt:"Run Job Config"}}),s("figcaption",[e._v("Run Job Config")])]),e._v(" "),s("p",[e._v("Once you have saved the webhook, you will see a "),s("code",[e._v("Post Url")]),e._v(". You can post a test message to\nthat Url using curl or httpie to ensure that it runs the job as expected.")]),e._v(" "),s("h2",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),s("p",[e._v("The JSON that is received by the plugin can be used to supply options, node filter, and the "),s("code",[e._v("Run As")]),e._v(" user.")]),e._v(" "),s("h4",{attrs:{id:"using-parsed-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-parsed-data","aria-hidden":"true"}},[e._v("#")]),e._v(" Using parsed data")]),e._v(" "),s("p",[e._v("If the plugin received the following JSON")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"field1"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"value1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"sub1"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"subfield"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"subval"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("You could use that data by specifying:")]),e._v(" "),s("p",[s("code",[e._v("${data.field1}")])]),e._v(" "),s("p",[e._v("or")]),e._v(" "),s("p",[s("code",[e._v("${data.sub1.subfield}")])]),e._v(" "),s("h4",{attrs:{id:"using-the-raw-payload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-the-raw-payload","aria-hidden":"true"}},[e._v("#")]),e._v(" Using the raw payload")]),e._v(" "),s("p",[e._v("If you had a job that had an option named "),s("code",[e._v("whkpayload")]),e._v(" you could send the entire JSON\npayload to that option like this:\n"),s("code",[e._v("-whkpayload ${raw}")])]),e._v(" "),s("h4",{attrs:{id:"webhook-context-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webhook-context-variables","aria-hidden":"true"}},[e._v("#")]),e._v(" Webhook context variables")]),e._v(" "),s("p",[e._v("The following context variables can be used:")]),e._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[e._v("unique event id")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("project")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[e._v("the project that owns the webhook")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("sender")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[e._v("the ip address of the sending system")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("timestamp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[e._v("the epoch milliseconds when the event was received")]),e._v("\n")])])]),s("p",[e._v("These variables can be used by specifying:")]),e._v(" "),s("p",[s("code",[e._v("${webhook.id}")]),s("br"),e._v(" "),s("code",[e._v("${webhook.project}")]),s("br"),e._v(" "),s("code",[e._v("${webhook.sender}")]),s("br"),e._v(" "),s("code",[e._v("${webhook.timestamp}")])])])},[],!1,null,null,null);t.default=n.exports}}]);