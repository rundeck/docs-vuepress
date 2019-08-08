(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{514:function(e,a,r){"use strict";r.r(a);var t=r(0),n=Object(t.a)({},function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"using-oracle-as-a-database-backend"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#using-oracle-as-a-database-backend","aria-hidden":"true"}},[e._v("#")]),e._v(" Using Oracle as a database backend")]),e._v(" "),r("h2",{attrs:{id:"simple-guide"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#simple-guide","aria-hidden":"true"}},[e._v("#")]),e._v(" Simple Guide")]),e._v(" "),r("ul",[r("li",[e._v("Download the latest oracle driver (eg, ojdbc7.jar version 12.1.0.2):")])]),e._v(" "),r("p",[r("a",{attrs:{href:"http://www.oracle.com/technetwork/database/features/jdbc/default-2280470.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.oracle.com/technetwork/database/features/jdbc/default-2280470.html"),r("OutboundLink")],1)]),e._v(" "),r("ul",[r("li",[e._v("Copy the downloaded file "),r("code",[e._v("ojdbc7.jar")]),e._v(" to the "),r("code",[e._v("$RDECK_BASE/server/lib")]),e._v(" for war launcher or in "),r("code",[e._v("/var/lib/rundeck/lib")]),e._v(" (create it) for RPM and DEB installations")]),e._v(" "),r("li",[e._v("Update "),r("code",[e._v("rundeck-config.properties")]),e._v(" file according to your installation "),r("a",{attrs:{href:"https://rundeck.org/docs/administration/configuration/configuration-file-reference.html#configuration-layout",target:"_blank",rel:"noopener noreferrer"}},[e._v("layout"),r("OutboundLink")],1),e._v(":")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("dataSource.url = jdbc:oracle:thin:@127.0.0.1:1521:orcl # (change server name and instance name)\ndataSource.driverClassName = oracle.jdbc.driver.OracleDriver\ndataSource.username = XXXXXX\ndataSource.password = XXXXXXX\ndataSource.dialect = org.rundeck.hibernate.RundeckOracleDialect\ndataSource.properties.validationQuery = SELECT 1 FROM DUAL\n")])])])])},[],!1,null,null,null);a.default=n.exports}}]);