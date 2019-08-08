(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{546:function(e,r,t){"use strict";t.r(r);var o=t(0),n=Object(o.a)({},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"upgrading-to-rundeck-3-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-to-rundeck-3-1","aria-hidden":"true"}},[e._v("#")]),e._v(" Upgrading to Rundeck 3.1")]),e._v(" "),t("h2",{attrs:{id:"rpm-package"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rpm-package","aria-hidden":"true"}},[e._v("#")]),e._v(" RPM package")]),e._v(" "),t("blockquote",[t("p",[t("strong",[e._v("Note:")]),e._v(" There is now only a single RPM package required (rundeck-config is no more)")])]),e._v(" "),t("p",[t("strong",[e._v("Updating")]),t("br"),e._v("\nFor convenience the "),t("code",[e._v("3.1.0")]),e._v(" rpm package obsoletes "),t("code",[e._v("rundeck-config")]),e._v(". When rundeck is updated\nit will remove this package and take over the files without prompting.")]),e._v(" "),t("p",[t("strong",[e._v("Downgrading")]),t("br"),e._v("\nIf you need to downgrade and/or install a specific version of Rundeck prior to "),t("code",[e._v("3.1.0")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("yum --setopt=obsoletes=0 downgrade rundeck-3.0.24.20190719-1.201907192053\n")])])]),t("p",[e._v("Otherwise there should be no problem upgrading from Rundeck 3.0 to Rundeck 3.1")]),e._v(" "),t("p",[e._v("If you are upgrading from an older version, please review the Upgrade Guide for the specific version.")]),e._v(" "),t("h2",{attrs:{id:"docker-using-openshift"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-using-openshift","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker using OpenShift")]),e._v(" "),t("p",[e._v("Some changes to the Docker image were added to support OpenShift, see "),t("a",{attrs:{href:"https://github.com/rundeck/rundeck/pull/4826",target:"_blank",rel:"noopener noreferrer"}},[e._v("#4826"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("ul",[t("li",[e._v("The "),t("code",[e._v("rundeck")]),e._v(" user's default group needs to be "),t("code",[e._v("root(0)")])]),e._v(" "),t("li",[e._v("Any files and directories Rundeck uses need to have the appropriate "),t("code",[e._v("root")]),e._v(" group and permissions set")]),e._v(" "),t("li",[e._v("Use "),t("code",[e._v("chown=rundeck:root")]),e._v(" in Dockerfile with "),t("code",[e._v("ADD")]),e._v(" and "),t("code",[e._v("COPY")])]),e._v(" "),t("li",[e._v("Use "),t("code",[e._v("chmod 0775")]),e._v(" on directories and files as appropriate")])])])},[],!1,null,null,null);r.default=n.exports}}]);