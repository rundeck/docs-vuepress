(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{446:function(a,e,t){"use strict";t.r(e);var r=t(0),s=Object(r.a)({},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"database-overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#database-overview","aria-hidden":"true"}},[a._v("#")]),a._v(" Database Overview")]),a._v(" "),t("ul",[t("li",[t("router-link",{attrs:{to:"/administration/configuration/database/mysql.html"}},[a._v("MySQL")])],1),a._v(" "),t("li",[t("router-link",{attrs:{to:"/administration/configuration/database/postgres.html"}},[a._v("PostgreSQL")])],1),a._v(" "),t("li",[t("router-link",{attrs:{to:"/administration/configuration/database/oracle.html"}},[a._v("Oracle")])],1),a._v(" "),t("li",[t("router-link",{attrs:{to:"/administration/configuration/database/mssql.html"}},[a._v("MS SQL Server")])],1),a._v(" "),t("li",[t("router-link",{attrs:{to:"/administration/configuration/database/secure_mssql.html"}},[a._v("Security Mode for MS SQL Server")])],1)]),a._v(" "),t("h3",{attrs:{id:"default-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#default-database","aria-hidden":"true"}},[a._v("#")]),a._v(" Default database")]),a._v(" "),t("p",[a._v("When you install the vanilla standalone rundeck configuration, it will use H2, an embedded database.\nIt is convenient to have an embedded database when you are just trying Rundeck or using it for a non-critical purpose. Be aware though that using the H2 database is not considered safe for production because it not reslilient if Rundeck is not shutdown gracefully. When shutdown gracefully, Rundeck can write the data (kept in memory) to disk. If Rundeck is forcefully shutdown, the data can not be guaranteed to be written to file on disk and cause truncation and corruption.")]),a._v(" "),t("p",[a._v("Don't use the H2 embedded database for anything except testing and non-production.")]),a._v(" "),t("p",[a._v("Use an external database service like Mariadb, Mysql, Posgres or Oracle.")]),a._v(" "),t("h3",{attrs:{id:"customize-the-datasource"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#customize-the-datasource","aria-hidden":"true"}},[a._v("#")]),a._v(" Customize the Datasource")]),a._v(" "),t("p",[a._v("The dataSource is configured in the "),t("code",[a._v("rundeck-config.properties")]),a._v(" file.")]),a._v(" "),t("p",[a._v("You specify the "),t("code",[a._v("dataSource.")]),a._v(" configuration properties.")]),a._v(" "),t("p",[a._v("Here is the default, set up for the default embedded H2 database:")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("dataSource"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("dbCreate "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" update\ndataSource"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("url "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" jdbc"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("h2"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("file"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("lib"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("rundeck"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("data"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("grailsdb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("MVCC"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n")])])]),t("p",[t("code",[a._v("dataSource.dbCreate")]),a._v(" specifies how the behavior that Hibernate should take when it\ngenerates the schema for your database. The default value of "),t("code",[a._v("update")]),a._v(" means that\nit will attempt to create the database schema if it does not exist, and update it\nif necessary if it already exists.")]),a._v(" "),t("p",[t("code",[a._v("dataSource.url")]),a._v(" specifices the connection URL for the data source.")]),a._v(" "),t("p",[a._v("If necessary, you may have to specify other dataSource properties, such as username\nand password, depending on the type of database. See the sections below\nfor your specific Database type.")]),a._v(" "),t("h3",{attrs:{id:"add-the-jdbc-driver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-the-jdbc-driver","aria-hidden":"true"}},[a._v("#")]),a._v(" Add the JDBC Driver")]),a._v(" "),t("p",[a._v('Rundeck includes a JDBC driver for Mysql, MariaDB, Postgres, MSsql and H2. If you are using another database or if you want to use an updated driver, copy the appropriate JDBC driver, such as "ojdbc14.jar" for Oracle into the server '),t("code",[a._v("lib")]),a._v(" dir:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" ojdbc14.jar "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$RDECK_BASE")]),a._v("/server/lib\n\nFor RPM and DEB you should create /var/lib/rundeck/lib folder and place the driver there.\n")])])])])},[],!1,null,null,null);e.default=s.exports}}]);