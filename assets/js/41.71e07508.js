(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{319:function(e,t,a){e.exports=a.p+"assets/img/webhook-admin.1a9b8f05.png"},637:function(e,t,a){"use strict";a.r(t);var o=a(0),r=Object(o.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"webhooks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#webhooks","aria-hidden":"true"}},[e._v("#")]),e._v(" Webhooks")]),e._v(" "),o("div",{staticClass:"danger custom-block"},[o("p",[e._v("Webhooks are currently in beta.\nThere may be breaking API changes between releases!")])]),e._v(" "),o("p",[e._v("You can configure Rundeck to receive webhook events from external system and to run a job based on those actions.\nWebhook events are handled by "),o("router-link",{attrs:{to:"/developer/15-webhook-plugins.html"}},[e._v("Webhook Event")]),e._v(" Rundeck plugins, so you can write your own handling code if necessary.")],1),e._v(" "),o("h3",{attrs:{id:"enable-the-feature"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#enable-the-feature","aria-hidden":"true"}},[e._v("#")]),e._v(" Enable the feature")]),e._v(" "),o("h4",{attrs:{id:"war-deb-rpm"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#war-deb-rpm","aria-hidden":"true"}},[e._v("#")]),e._v(" WAR/Deb/RPM")]),e._v(" "),o("p",[e._v("To enable the use of webhooks for your Rundeck server add the following configuration property to\nyour "),o("code",[e._v("rundeck-config.properties")]),e._v(" or equivalent.")]),e._v(" "),o("div",{staticClass:"language-properties extra-class"},[o("pre",{pre:!0,attrs:{class:"language-properties"}},[o("code",[o("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("rundeck.feature.webhooks.enabled")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),o("span",{pre:!0,attrs:{class:"token attr-value"}},[e._v("true")]),e._v("\n")])])]),o("h4",{attrs:{id:"docker"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#docker","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker")]),e._v(" "),o("p",[e._v("Set the following environment variable:")]),e._v(" "),o("div",{staticClass:"language-properties extra-class"},[o("pre",{pre:!0,attrs:{class:"language-properties"}},[o("code",[o("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("RUNDECK_FEATURE_WEBHOOKS_ENABLED")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),o("span",{pre:!0,attrs:{class:"token attr-value"}},[e._v("true")]),e._v("\n")])])]),o("h3",{attrs:{id:"webhook-administration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#webhook-administration","aria-hidden":"true"}},[e._v("#")]),e._v(" Webhook Administration")]),e._v(" "),o("p",[e._v("Once enabled, the ability to configure webhooks will be added to the project sidebar.\nClick on "),o("code",[e._v("Webhooks")]),e._v(" to go to the webhook administration page where you can add, configure, and remove webhooks\nfor your project.")]),e._v(" "),o("figure",[o("img",{attrs:{src:a(319),alt:"Webhook Administration"}}),o("figcaption",[e._v("Webhook Administration")])]),e._v(" "),o("p",[e._v("You can also manage webhooks using the "),o("router-link",{attrs:{to:"/api/rundeck-api.html#webhooks-beta"}},[e._v("Webhook API")]),e._v(" or using the rd cli tool.")],1),e._v(" "),o("h4",{attrs:{id:"add-a-webhook"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#add-a-webhook","aria-hidden":"true"}},[e._v("#")]),e._v(" Add a webhook")]),e._v(" "),o("p",[e._v("Click the "),o("code",[e._v("Add")]),e._v(" button to add a new webhook.")]),e._v(" "),o("p",[e._v("Fill out the information in the form and select a Webhook event handler:")]),e._v(" "),o("ul",[o("li",[o("router-link",{attrs:{to:"/manual/webhooks/run-job.html"}},[e._v("Run Job")])],1),e._v(" "),o("li",[o("router-link",{attrs:{to:"/manual/webhooks/routing-run-job.html"}},[e._v("Routing Run Job (Enterprise)")])],1)]),e._v(" "),o("p",[e._v("Click "),o("code",[e._v("Save")]),e._v(".")]),e._v(" "),o("p",[e._v("Once you have saved the webhook you will see a "),o("code",[e._v("Post Url")]),e._v(" field which represents the\nurl you can copy to your external system as the webhook endpoint.")]),e._v(" "),o("p",[e._v("When a system posts to the url it will be authenticated as the user you specify in the\n"),o("code",[e._v("Webhook User")]),e._v(" field with the roles specified by "),o("code",[e._v("Webhook Roles")]),e._v(".")]),e._v(" "),o("h4",{attrs:{id:"updating-a-webhook"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#updating-a-webhook","aria-hidden":"true"}},[e._v("#")]),e._v(" Updating a webhook")]),e._v(" "),o("p",[e._v("Click on the webhook row in the "),o("code",[e._v("Webhooks")]),e._v(" list. The entry will be highlighted and you\nmay update the plugin configuration or the webhook details.")]),e._v(" "),o("p",[e._v("You cannot change the user associated with the webhook. If you need to update the user you will need to create a new webhook with that user.")]),e._v(" "),o("h4",{attrs:{id:"delete-a-webhook"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#delete-a-webhook","aria-hidden":"true"}},[e._v("#")]),e._v(" Delete a webhook")]),e._v(" "),o("p",[e._v("Click on the webhook as if to edit it. In the detail view at the bottom right there is a delete webhook button. Click the button and the webhook will be deleted.")]),e._v(" "),o("h4",{attrs:{id:"logging"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#logging","aria-hidden":"true"}},[e._v("#")]),e._v(" Logging")]),e._v(" "),o("p",[e._v("You can see events and log messages generated by the webhook activity in the "),o("code",[e._v("$RD_LOGS_DIR/rundeck.webhooks.log")]),e._v(" file.")]),e._v(" "),o("p",[e._v("Default log4j configuration")]),e._v(" "),o("div",{staticClass:"language-properties extra-class"},[o("pre",{pre:!0,attrs:{class:"language-properties"}},[o("code",[o("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("log4j.logger.org.rundeck.webhook.events")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),o("span",{pre:!0,attrs:{class:"token attr-value"}},[e._v("INFO,webhook")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("log4j.additivity.org.rundeck.webhook.events")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),o("span",{pre:!0,attrs:{class:"token attr-value"}},[e._v("false")]),e._v("\n\n"),o("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("log4j.appender.webhook")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),o("span",{pre:!0,attrs:{class:"token attr-value"}},[e._v("org.apache.log4j.DailyRollingFileAppender")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("log4j.appender.webhook.file")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),o("span",{pre:!0,attrs:{class:"token attr-value"}},[e._v("${rundeck.log.dir}${file.separator}rundeck.webhook.log")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("log4j.appender.webhook.append")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),o("span",{pre:!0,attrs:{class:"token attr-value"}},[e._v("true")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("log4j.appender.webhook.layout")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),o("span",{pre:!0,attrs:{class:"token attr-value"}},[e._v("org.apache.log4j.PatternLayout")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("log4j.appender.webhook.layout.ConversionPattern")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),o("span",{pre:!0,attrs:{class:"token attr-value"}},[e._v("[%d{ISO8601}] %-5p %c{2} - %m%n")]),e._v("\n")])])])])},[],!1,null,null,null);t.default=r.exports}}]);