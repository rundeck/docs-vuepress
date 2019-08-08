(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{537:function(e,r,t){"use strict";t.r(r);var n=t(0),o=Object(n.a)({},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"version-2-4-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#version-2-4-0","aria-hidden":"true"}},[e._v("#")]),e._v(" Version 2.4.0")]),e._v(" "),t("h1",{attrs:{id:"release-2-4-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#release-2-4-0","aria-hidden":"true"}},[e._v("#")]),e._v(" Release 2.4.0")]),e._v(" "),t("p",[e._v("=============")]),e._v(" "),t("p",[e._v("Date: 2014-12-16")]),e._v(" "),t("p",[e._v("Name: "),t("span",{staticStyle:{color:"indigo"}},[t("span",{staticClass:"glyphicon glyphicon-briefcase"}),e._v(' "americano indigo briefcase"')])]),e._v(" "),t("p",[e._v("This release has bug fixes and new features, including some GUI improvements.")]),e._v(" "),t("h2",{attrs:{id:"new-features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-features","aria-hidden":"true"}},[e._v("#")]),e._v(" New Features")]),e._v(" "),t("ul",[t("li",[e._v("Job references can override Node Filters. See updates to [XML](/manpages/man5/job-v20.md#jobref] and [YAML](/manpages/man5/job-yaml-v12.md#job-reference-entry] job definition formats as well.")]),e._v(" "),t("li",[e._v("Job and Option descriptions can contain markdown and HTML. For Jobs, the first line is the short description, and following lines are interpreted as markdown.")]),e._v(" "),t("li",[e._v("MSSQL compatibility")]),e._v(" "),t("li",[e._v("Some GUI tweaks and changes\n"),t("ul",[t("li",[e._v("A new Action menu is available next to the Job name in job listing and view pages.  Actions include Edit, Duplicate, Delete, and download XML/YAML definitions.")]),e._v(" "),t("li",[e._v("The Delete Job link in the Job Edit page has been removed")]),e._v(" "),t("li",[e._v("The Job Edit link in job lists has been replaced with an Action menu")]),e._v(" "),t("li",[e._v("Hovering on job name in job lists now triggers the detail popup after a slight delay. Previously it was triggered by hovering on the Edit link.")]),e._v(" "),t("li",[e._v("Execution follow page layout has been rearranged")]),e._v(" "),t("li",[e._v("Added extended Job descriptions (sanitized Markdown/html)")]),e._v(" "),t("li",[e._v("Job Edit/Create page: you are now asked to confirm navigation away from the page if you have made changes to the Job")])])])]),e._v(" "),t("h2",{attrs:{id:"incubator-features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#incubator-features","aria-hidden":"true"}},[e._v("#")]),e._v(" Incubator features")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Parallel step execution")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("this can be enabled with "),t("code",[e._v("rundeck-config.properties")]),e._v(" entry:")]),e._v(" "),t("pre",[t("code",[e._v("  feature.incubator.parallelWorkflowStrategy=true\n")])])])])]),e._v(" "),t("li",[t("p",[e._v("ssh-agent forwarding for ssh connections")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("this can be enabled per node, project, or server\nframework.properties:")]),e._v(" "),t("pre",[t("code",[e._v("  framework.local-ssh-agent=<true|false>\n  framework.local-ttl-ssh-agent=<time in sec>\n")])]),e._v(" "),t("p",[e._v("project.properties:")]),e._v(" "),t("pre",[t("code",[e._v("  project.local-ssh-agent=<true|false>\n  project.local-ttl-ssh-agent=<time in sec>\n")])]),e._v(" "),t("p",[e._v("Node properties:")]),e._v(" "),t("pre",[t("code",[e._v("  local-ssh-agent=<true|false>\n  local-ttl-ssh-agent=<time in sec>\n")])])])])])]),e._v(" "),t("h2",{attrs:{id:"compatibility-notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compatibility-notes","aria-hidden":"true"}},[e._v("#")]),e._v(" Compatibility notes")]),e._v(" "),t("p",[e._v("A bug in API v11 XML responses caused them to sometimes be incorrectly wrapped in a "),t("code",[e._v("<result>")]),e._v(" element, this has now been corrected.  See the "),t("router-link",{attrs:{to:"/api/rundeck-api.html"}},[e._v("API Docs")]),e._v(" for information.  The Rundeck API Java Client library has been updated to workaround this issue (for previous versions of Rundeck).")],1),e._v(" "),t("h2",{attrs:{id:"what-is-americano-indigo-briefcase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-americano-indigo-briefcase","aria-hidden":"true"}},[e._v("#")]),e._v(' What is "americano indigo briefcase"?')]),e._v(" "),t("p",[e._v('New versions of Rundeck will have a name based on the version number. The 2.x theme is Coffee, and 2.4.x is "americano". The point release defines a combination of color and icon we can display in the GUI for easier visual differentiation. 2.4.0 is "indigo briefcase".')]),e._v(" "),t("blockquote",[t("p",[e._v("Why yes, I'd like an americano, thank you.")])]),e._v(" "),t("h2",{attrs:{id:"contributors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contributors","aria-hidden":"true"}},[e._v("#")]),e._v(" Contributors")]),e._v(" "),t("ul",[t("li",[e._v("Alex Honor (ahonor)")]),e._v(" "),t("li",[e._v("Greg Schueler (gschueler)")]),e._v(" "),t("li",[e._v("Jason (jasonhensler)")]),e._v(" "),t("li",[e._v("Jonathan Li (onejli)")]),e._v(" "),t("li",[e._v("Mathieu Payeur Levallois (mathpl)")]),e._v(" "),t("li",[e._v("Ruslan Lutsenko (lruslan)")]),e._v(" "),t("li",[e._v("mezbiderli")])]),e._v(" "),t("h2",{attrs:{id:"bug-reporters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bug-reporters","aria-hidden":"true"}},[e._v("#")]),e._v(" Bug Reporters")]),e._v(" "),t("ul",[t("li",[e._v("Whitepatrick")]),e._v(" "),t("li",[e._v("adamhamner")]),e._v(" "),t("li",[e._v("ahonor")]),e._v(" "),t("li",[e._v("danifr")]),e._v(" "),t("li",[e._v("davealbert")]),e._v(" "),t("li",[e._v("foundatron")]),e._v(" "),t("li",[e._v("gmichels")]),e._v(" "),t("li",[e._v("gschueler")]),e._v(" "),t("li",[e._v("jasonhensler")]),e._v(" "),t("li",[e._v("jcmoraisjr")]),e._v(" "),t("li",[e._v("katanafleet")]),e._v(" "),t("li",[e._v("lruslan")]),e._v(" "),t("li",[e._v("mathpl")]),e._v(" "),t("li",[e._v("mezbiderli")]),e._v(" "),t("li",[e._v("new23d")]),e._v(" "),t("li",[e._v("onejli")]),e._v(" "),t("li",[e._v("ujfjhz")]),e._v(" "),t("li",[e._v("zarry")])]),e._v(" "),t("h2",{attrs:{id:"issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#issues","aria-hidden":"true"}},[e._v("#")]),e._v(" Issues")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1051",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cancel editing resource model source doesn't work"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1044",target:"_blank",rel:"noopener noreferrer"}},[e._v('Job run form triggered from Jobs list page incorrectly shows next scheduled time as "never"'),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1039",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nodes yaml format: if attribute values are not strings, throws exception"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1036",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rundeck under Tomcat7 dump a lot a of serialization Warning "),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1031",target:"_blank",rel:"noopener noreferrer"}},[e._v("Project Config permission needs Project Create ACL"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/pull/1029",target:"_blank",rel:"noopener noreferrer"}},[e._v("ssh-agent forwarding limited to job execution"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/pull/1027",target:"_blank",rel:"noopener noreferrer"}},[e._v("Parameterize grails central"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1025",target:"_blank",rel:"noopener noreferrer"}},[e._v("Failure saving project config when empty password field value is used"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/pull/1024",target:"_blank",rel:"noopener noreferrer"}},[e._v("Job references can override Node filters"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1020",target:"_blank",rel:"noopener noreferrer"}},[e._v("Allow markup in job and option descriptions"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1018",target:"_blank",rel:"noopener noreferrer"}},[e._v("script-based file copier plugin fails to load project/framework configuration"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1017",target:"_blank",rel:"noopener noreferrer"}},[e._v("Add server uuid element to the /system/info endpoint"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1016",target:"_blank",rel:"noopener noreferrer"}},[e._v("Project config: plugins with same property names will render same values"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1015",target:"_blank",rel:"noopener noreferrer"}},[e._v('"Copy file" step moves file rather than copy '),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/pull/1013",target:"_blank",rel:"noopener noreferrer"}},[e._v("Do not look further if nodefilter.dispatch is not set"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1012",target:"_blank",rel:"noopener noreferrer"}},[e._v("rundeck.gui.login.welcome no longer allows html tags like "),t("b"),e._v(" to make all or part of the welcome message bold."),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/pull/1010",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fix API v11 xml wrapper responses"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1009",target:"_blank",rel:"noopener noreferrer"}},[e._v("Improve validation messages during job import"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/1008",target:"_blank",rel:"noopener noreferrer"}},[e._v("APIv11 responses should not include <result> element"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/999",target:"_blank",rel:"noopener noreferrer"}},[e._v('ux: clicking "Top" link when browsing jobs in a group takes you to the rundeck home page'),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/pull/972",target:"_blank",rel:"noopener noreferrer"}},[e._v("Add MSSQL Support"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/965",target:"_blank",rel:"noopener noreferrer"}},[e._v("job.serverUrl not available in reference job."),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/960",target:"_blank",rel:"noopener noreferrer"}},[e._v('HMAC request tokens expiring prematurely: "request did not include a valid token"'),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/pull/929",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issues/927 parallel execution"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/891",target:"_blank",rel:"noopener noreferrer"}},[e._v("Delete execution link should not be shown while execution is running"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/849",target:"_blank",rel:"noopener noreferrer"}},[e._v("Editing two workflow steps is unsupported"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/848",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rundeck using MSSQL datasource"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/811",target:"_blank",rel:"noopener noreferrer"}},[e._v("URL encode ${option.[name].value} in Cascading Remote Options"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/254",target:"_blank",rel:"noopener noreferrer"}},[e._v("Job editor: don't allow user to lose changes"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/222",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cannot use UTF8 in rundeck "),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/rundeck/rundeck/issues/131",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jobref calls should support overriding node filter params"),t("OutboundLink")],1)])])])},[],!1,null,null,null);r.default=o.exports}}]);