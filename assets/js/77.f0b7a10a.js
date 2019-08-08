(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{485:function(e,t,a){"use strict";a.r(t);var r=a(0),n=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"system-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-requirements","aria-hidden":"true"}},[e._v("#")]),e._v(" System Requirements")]),e._v(" "),a("p",[e._v("The following operating systems are known to support Rundeck:")]),e._v(" "),a("ul",[a("li",[e._v("Linux: Most recent distributions are likely to work")]),e._v(" "),a("li",[e._v("Windows: XP, Server and above")]),e._v(" "),a("li",[e._v("Mac OS X 10.4 or later")])]),e._v(" "),a("p",[e._v('Root (or Administrator on Windows) is not required or recommended. We\nrecommend using a dedicated user account such as "rundeck".')]),e._v(" "),a("p",[e._v("If there is need for root access, please set up the Rundeck user\nto have access via "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Sudo",target:"_blank",rel:"noopener noreferrer"}},[e._v("sudo"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("FIXME: needs cleanup")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Supported Operating Systems:")]),e._v("\n_ Red Hat Enterprise Linux\n_ CentOS\n_ Ubuntu\n_ Windows Server")]),e._v(" "),a("li",[a("strong",[e._v("A currently supported version of Mozilla Firefox or Google Chrome")]),e._v(" * Other HTML5 compliant web browsers may work but are not fully tested or supported.")]),e._v(" "),a("li",[a("strong",[e._v("2 CPUs")]),e._v(" * 2 CPUs per member")]),e._v(" "),a("li",[a("strong",[e._v("4 GB RAM")]),e._v(" * other notes about memory sizing")]),e._v(" "),a("li",[a("strong",[e._v("20 GB hard disk")]),e._v(" * other notes about disk sizing")]),e._v(" "),a("li",[a("strong",[e._v("Database")]),e._v("\n_ Mysql version\n_ Mariadb version\n_ Postgres version\n_ Oracle version")]),e._v(" "),a("li",[a("strong",[e._v("Log store")]),e._v("\n_ File system\n_ S3 compatible object store")]),e._v(" "),a("li",[a("strong",[e._v("Amazon EC2")]),e._v("\n_ Instance size of m3.medium or larger\n_ An instance size of m3.xlarge or larger if there are more than 100 hosts")])]),e._v(" "),a("h3",{attrs:{id:"java"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java","aria-hidden":"true"}},[e._v("#")]),e._v(" Java")]),e._v(" "),a("p",[e._v("Rundeck is a Java-Servlet based server and therefore requires the Java\nruntime.")]),e._v(" "),a("p",[e._v("The install process requires that the latest version of Java 8\nbe installed. Both the "),a("a",{attrs:{href:"http://openjdk.java.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Open JDK"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://java.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sun/Oracle"),a("OutboundLink")],1),e._v(" JVMs can be used.\nYou must have the JAVA_HOME environment variable defined\nin your environment before running the launcher. The RPM will use the java found on your path. See [Setting JAVA_HOME](/administration/maintenance/startup.md#setting-java_home] if you want to run a different version of java.")]),e._v(" "),a("p",[e._v("Verify your Java version to check it meets the requirement:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ java -version\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('java version "1.8.0_131"\nJava(TM) SE Runtime Environment (build 1.8.0_131-b11)\nJava HotSpot(TM) 64-Bit Server VM (build 25.131-b11, mixed mode)\n')])])]),a("h3",{attrs:{id:"network-access"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#network-access","aria-hidden":"true"}},[e._v("#")]),e._v(" Network access")]),e._v(" "),a("p",[e._v("When the server starts, it binds to several TCP ports by default:")]),e._v(" "),a("ul",[a("li",[e._v("4440 (http)")]),e._v(" "),a("li",[e._v("4443 (https)")])]),e._v(" "),a("p",[e._v("To check if the ports are free on a Unix host, run:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("netstat")]),e._v(" -an "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("egrep")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'4440|4443'")]),e._v("\n")])])]),a("p",[e._v("If the ports are in use on the server, you will see output similar to below:")]),e._v(" "),a("pre",[a("code",[e._v("tcp46      0      0  *.4440                 *.*                    LISTEN\n")])]),e._v(" "),a("p",[e._v("The installation procedures describe how to choose different ports, if\nthere is a conflict.")]),e._v(" "),a("p",[e._v("In addition, TCP port 22 (by default) needs to be open on the clients for SSH.")]),e._v(" "),a("p",[e._v("Clients should be set up to allow the Rundeck server user to connect to\nthe clients using SSH via public-key authentication. It should not\nprompt for a password. See\n"),a("router-link",{attrs:{to:"/administration/projects/node-execution/ssh.html#configuring-remote-machine-for-ssh"}},[e._v("Configure remote machine for SSH")]),e._v("\nin the Administration chapter.")],1),e._v(" "),a("p",[e._v("There are various ways for installing SSH on Windows; we recommend\n"),a("a",{attrs:{href:"https://www.cygwin.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cygwin"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database","aria-hidden":"true"}},[e._v("#")]),e._v(" Database")]),e._v(" "),a("p",[e._v("When you install the vanilla standalone rundeck configuration, it will use H2, an embedded database.\nIt is convenient to have an embedded database when you are just trying Rundeck or using it for a non-critical purpose. Be aware though that using the H2 database is not considered safe for production because it not reslilient if Rundeck is not shutdown gracefully. When shutdown gracefully, Rundeck can write the data (kept in memory) to disk. If Rundeck is forcefully shutdown, the data can not be guaranteed to be written to file on disk and cause truncation and corruption.")]),e._v(" "),a("p",[e._v("Don't use the H2 embedded database for anything except testing and non-production.")]),e._v(" "),a("p",[e._v("Use an external database service like Mariadb, Mysql, Posgres or Oracle.")]),e._v(" "),a("p",[e._v("Also, be sure to locate your external database on a host(s) with sufficient capacity and performance. Don't create a downstream bottleneck!")]),e._v(" "),a("p",[e._v("For more about setting the datasource see: "),a("router-link",{attrs:{to:"/administration/configuration/database/"}},[e._v("Configuration/Database")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"logstore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logstore","aria-hidden":"true"}},[e._v("#")]),e._v(" Logstore")]),e._v(" "),a("p",[e._v("Rundeck records all job execution data into the Logstore. By default, Rundeck is configured to use the local file system. Normally, that is defined by the "),a("code",[e._v("framework.logs.dir")]),e._v(" system setting found in framework.properties.")]),e._v(" "),a("p",[e._v("If you are setting up a clustered Rundeck see: "),a("router-link",{attrs:{to:"/administration/cluster/logstore/"}},[e._v("Configuration/Logstore")]),e._v(".")],1)])},[],!1,null,null,null);t.default=n.exports}}]);