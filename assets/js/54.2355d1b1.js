(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{511:function(e,a,r){"use strict";r.r(a);var s=r(0),t=Object(s.a)({},function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"using-microsoft-sql-server-as-a-database-backend"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#using-microsoft-sql-server-as-a-database-backend","aria-hidden":"true"}},[e._v("#")]),e._v(" Using Microsoft SQL Server as a database backend")]),e._v(" "),r("p",[e._v("Create a database on your backend, plus a user (and assign it the db_owner role)")]),e._v(" "),r("p",[e._v("In %RDECK_BASE%\\server\\config\\rundeck-config.properties, set the following:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("    rundeck.projectsStorageType=db\n    dataSource.dbCreate = update\n    dataSource.driverClassName = com.microsoft.sqlserver.jdbc.SQLServerDriver\n    dataSource.url = jdbc:sqlserver://myserver;DatabaseName=RUNDECK\n    dataSource.username = myusername\n    dataSource.password = mypassword\n")])])])])},[],!1,null,null,null);a.default=t.exports}}]);