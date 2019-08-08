(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{580:function(e,t,r){"use strict";r.r(t);var a=r(0),o=Object(a.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"rundeck-enterprise"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rundeck-enterprise","aria-hidden":"true"}},[e._v("#")]),e._v(" Rundeck Enterprise")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("Rundeck is a server application you host on a system you designate\na central administrative control point. Internally, Rundeck stores job\ndefinitions and execution history in a relational database. Output\nfrom command and job executions is saved on disk but can be forwarded\nto remote stores like S3 or Logstash.")]),e._v(" "),a("p",[e._v("Rundeck distributed command execution is performed using a pluggable\nnode execution layer that defaults to SSH but plugins allow you\nto use other means like MCollective, Salt, WinRM, or your custom method.\nRundeck server configuration includes settings to define the outbound\nuser allowed by the remote hosts. Remote machines\nare not required to make connections back to the server.")]),e._v(" "),a("p",[a("img",{attrs:{src:r(71),alt:"Rundeck architecture"}})]),e._v(" "),a("p",[e._v("The Rundeck application itself is a Java-based webapp. The application provides both\ngraphical interface and network interfaces used by the Rundeck shell\ntools.")]),e._v(" "),a("p",[e._v("Access to the Rundeck application requires a login and\npassword. The default Rundeck installation uses a flat file user\ndirectory containing a set of default logins. Logins are defined in\nterms of a username and password as well as one or more user\ngroups. An alternative configuration to the flat file user directory,\nis LDAP (e.g., ActiveDirectory) but Rundeck authentication and authorization\nis customizable via "),a("a",{attrs:{href:"http://en.wikipedia.org/wiki/Java_Authentication_and_Authorization_Service",target:"_blank",rel:"noopener noreferrer"}},[e._v("JAAS"),a("OutboundLink")],1),e._v(".\nUsers must also be authorized to perform actions like define a job\nor execute one. This is controlled by an access control facility that reads\npolicy files defined by the Rundeck administrator. Privilege is\ngranted if a user's group membership meets the requirements of the policy.")]),e._v(" "),a("h2",{attrs:{id:"license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[e._v("#")]),e._v(" License")]),e._v(" "),a("p",[e._v("See: "),a("router-link",{attrs:{to:"/administration/configuration/license.html"}},[e._v("Rundeck Enterprise Licensing and Support")])],1),e._v(" "),a("h2",{attrs:{id:"general-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general-configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" General configuration")]),e._v(" "),a("p",[e._v("Rundeck Enterprise supports all properties described in the "),a("router-link",{attrs:{to:"/administration/configuration/config-file-reference.html"}},[e._v("OSS version")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"node-model-sources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-model-sources","aria-hidden":"true"}},[e._v("#")]),e._v(" Node Model Sources")]),e._v(" "),a("p",[e._v("Node Sources allow you to import metadata about the nodes you want to run\nRundeck jobs on. Node Sources are configured on Rundeck Enterprise in the same was as\nthe OSS version, described in "),a("router-link",{attrs:{to:"/administration/projects/resource-model-sources/"}},[e._v("Node Model Sources")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"authentication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authentication","aria-hidden":"true"}},[e._v("#")]),e._v(" Authentication")]),e._v(" "),a("p",[e._v("Similar to OSS Rundeck, Rundeck Enterprise uses Servlet Container Authentication to\ndetermine the logged in user name and the user's authorized roles.")]),e._v(" "),a("p",[e._v("For more details, see "),a("router-link",{attrs:{to:"/administration/security/authentication.html"}},[e._v("Authenticating Users")])],1),e._v(" "),a("h2",{attrs:{id:"key-storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-storage","aria-hidden":"true"}},[e._v("#")]),e._v(" Key storage")]),e._v(" "),a("p",[e._v("Similar to OSS Rundeck, Rundeck Enterprise can securely store private keys that the Rundeck Node Executor and use for sessions.")]),e._v(" "),a("p",[e._v("For momre details, see "),a("router-link",{attrs:{to:"/administration/security/key-storage.html"}},[e._v("Key Storage")])],1),e._v(" "),a("h2",{attrs:{id:"remote-job-execution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remote-job-execution","aria-hidden":"true"}},[e._v("#")]),e._v(" Remote job execution")]),e._v(" "),a("p",[e._v("This feature allows Rundeck Enterprise cluster members to forward job executions to\nother cluster members based on a policy configuration. By default, each member\nof the cluster executes jobs locally and does not forward them. You can define\nmultiple profiles and assign different projects to different profiles. If a job\nis executed in a project which is not assigned to a specific profile, the\ndefault policy is used.")]),e._v(" "),a("p",[e._v("For more details, see "),a("router-link",{attrs:{to:"/administration/configuration/remote-job-execution.html"}},[e._v("Remote Job Execution")])],1),e._v(" "),a("h2",{attrs:{id:"high-availability"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#high-availability","aria-hidden":"true"}},[e._v("#")]),e._v(" High availability")]),e._v(" "),a("h3",{attrs:{id:"database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database","aria-hidden":"true"}},[e._v("#")]),e._v(" Database")]),e._v(" "),a("p",[e._v("See: "),a("router-link",{attrs:{to:"/administration/configuration/database/"}},[e._v("Database Backends")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"loadbalancer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loadbalancer","aria-hidden":"true"}},[e._v("#")]),e._v(" Loadbalancer")]),e._v(" "),a("p",[e._v("A loadbalancer allows you to achieve high availability in your Rundeck Enterprise\ninstallation by routing http traffic across several redundant Rundeck Enterprise\ninstances.")]),e._v(" "),a("p",[e._v("To learn how to set up a loadbalancer for Rundeck Enterprise, see "),a("router-link",{attrs:{to:"/administration/cluster/loadbalancer/"}},[e._v("Loadbalancer")])],1),e._v(" "),a("h3",{attrs:{id:"autotakeover"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#autotakeover","aria-hidden":"true"}},[e._v("#")]),e._v(" Autotakeover")]),e._v(" "),a("p",[e._v("If a cluster member goes down, all scheduled jobs on that cluster member must be moved to another cluster node. This process can be performed automatically using the heartbeat and Autotakeover features in Rundeck Enterprise version 2.1.0 and later releases.")]),e._v(" "),a("p",[e._v("To learn how to set up Autotakeover, see "),a("router-link",{attrs:{to:"/administration/cluster/autotakeover/"}},[e._v("Autotakeover")])],1),e._v(" "),a("h3",{attrs:{id:"logstore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logstore","aria-hidden":"true"}},[e._v("#")]),e._v(" Logstore")]),e._v(" "),a("p",[e._v("All Cluster members must share the same log storage, this can be achieved in two ways:")]),e._v(" "),a("ul",[a("li",[e._v("Shared file system: You can set the shared file system path with\n"),a("code",[e._v("framework.logs.dir")]),e._v(" in the "),a("code",[e._v("framework.properties")]),e._v(" file. This changes must be\ndone in all the cluster members.")]),e._v(" "),a("li",[e._v("Plugins: Using an Execution log storage plugin.")])]),e._v(" "),a("p",[e._v("Some plugins that can be used:")]),e._v(" "),a("h4",{attrs:{id:"rundeck-enterprise-s3-log-storage-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rundeck-enterprise-s3-log-storage-plugin","aria-hidden":"true"}},[e._v("#")]),e._v(" Rundeck Enterprise S3 Log Storage Plugin")]),e._v(" "),a("p",[e._v("This plugin provides Log Storage via Amazon AWS S3, or any storage compatible with AWS S3 API, eg: S3, "),a("a",{attrs:{href:"https://minio.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Minio"),a("OutboundLink")],1),e._v(", etc.")]),e._v(" "),a("p",[e._v("It is based on the open source "),a("a",{attrs:{href:"https://github.com/rundeck-plugins/rundeck-s3-log-plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rundeck S3 Log Storage Plugin"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("It adds the additional feature:")]),e._v(" "),a("ul",[a("li",[a("em",[e._v("Checkpoint log storage")]),e._v(": This enables viewing the execution logs while the execution is running.")])]),e._v(" "),a("h5",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("p",[e._v("Enable the ExecutionFileStorage provider named "),a("code",[e._v("com.rundeck.rundeckpro.amazon-s3")]),e._v(" in your rundeck-config file:")]),e._v(" "),a("pre",[a("code",[e._v("rundeck.execution.logs.fileStoragePlugin=com.rundeck.rundeckpro.amazon-s3\n")])]),e._v(" "),a("p",[e._v('The "checkpoint log storage" feature is enabled by default.')]),e._v(" "),a("p",[e._v("If you wish to disable it you can set this in your framework.properties:")]),e._v(" "),a("pre",[a("code",[e._v("framework.plugin.ExecutionFileStorage.com.rundeck.rundeckpro.amazon-s3.checkpoint=false\n")])]),e._v(" "),a("p",[e._v("Please refer to the "),a("a",{attrs:{href:"https://github.com/rundeck-plugins/rundeck-s3-log-plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("open source plugin"),a("OutboundLink")],1),e._v(" for other configuration. "),a("strong",[e._v("Note")]),e._v(": Be sure to use "),a("code",[e._v("com.rundeck.rundeckpro.amazon-s3")]),e._v(" in place of "),a("code",[e._v("org.rundeck.amazon-s3")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"azure-blob-storage-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#azure-blob-storage-plugin","aria-hidden":"true"}},[e._v("#")]),e._v(" Azure Blob Storage Plugin")]),e._v(" "),a("p",[e._v("See: "),a("a",{attrs:{href:"https://github.com/rundeck-plugins/rundeck-azure-plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Blob Storage"),a("OutboundLink")],1)])])},[],!1,null,null,null);t.default=o.exports},71:function(e,t,r){e.exports=r.p+"assets/img/architecture.b86a36dd.png"}}]);