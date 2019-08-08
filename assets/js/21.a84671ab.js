(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{228:function(e,t,a){e.exports=a.p+"assets/img/allow-delegating-fresh-credentials-1.f6612557.png"},229:function(e,t,a){e.exports=a.p+"assets/img/allow-delegating-fresh-credentials-2.fef2cb68.png"},230:function(e,t,a){e.exports=a.p+"assets/img/powershell-troubleshooting.adf893d5.png"},504:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"powershell-node-execution"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#powershell-node-execution","aria-hidden":"true"}},[e._v("#")]),e._v(" PowerShell Node Execution")]),e._v(" "),s("p",[e._v("These plugins are only applicable to Rundeck Enterprise deployments on Windows Servers.")]),e._v(" "),s("p",[e._v("There are two plugins:")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("File Copier")]),e._v(": Copies files to the remote node for execution by the Node Executor. This plugin would be used to execute any Script steps in your workflows, or to copy your own files stored on the Rundeck Enterprise host.")]),e._v(" "),s("li",[s("strong",[e._v("Node Executor")]),e._v(": Executes the command and script steps.")])]),e._v(" "),s("p",[e._v("The plugins can be enabled in the Project Configuration page by selecting the PowerShell Node Executor and PowerShell File Copier as the default Node Executor and File Copiers.")]),e._v(" "),s("h3",{attrs:{id:"authentication-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authentication-types","aria-hidden":"true"}},[e._v("#")]),e._v(" Authentication Types")]),e._v(" "),s("p",[e._v("Authentication can happen in two ways, via trusted domain account or by username and password.")]),e._v(" "),s("h4",{attrs:{id:"hosts-in-trusted-domain"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hosts-in-trusted-domain","aria-hidden":"true"}},[e._v("#")]),e._v(" Hosts in Trusted Domain")]),e._v(" "),s("p",[e._v("When all hosts are in a trusted domain, remote execution requires just the username to access the remote hosts. Authentication will be made to the remote nodes as the domain user account that is executing the Rundeck server process.")]),e._v(" "),s("h4",{attrs:{id:"username-and-password"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#username-and-password","aria-hidden":"true"}},[e._v("#")]),e._v(" Username and Password")]),e._v(" "),s("p",[e._v("If all hosts are not in a trusted domain, both username and password are required to access the remote hosts.")]),e._v(" "),s("h3",{attrs:{id:"plugin-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugin-configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Plugin Configuration")]),e._v(" "),s("p",[e._v("Trusted Domain authentication will be used by default, unless a username and password are configured to be used.")]),e._v(" "),s("p",[e._v("You can configure the plugins to use a password via the Key Storage facility when accessing remote hosts.")]),e._v(" "),s("ul",[s("li",[e._v("password storage - using a password that is stored in the Key Storage facility.")])]),e._v(" "),s("p",[e._v("You can either configure the password or password storage path at a project-wide level, or on a per-node basis.")]),e._v(" "),s("h3",{attrs:{id:"password-storage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#password-storage","aria-hidden":"true"}},[e._v("#")]),e._v(" Password Storage")]),e._v(" "),s("p",[e._v('Passwords can be stored securely in the Rundeck Enterprise Keystore facility. These passwords can be stored in a tree like structure to help you organize them any way you wish. The passwords can be referenced using an attribute named "password-storage-path". When Rundeck needs the password, it looks up the file as referenced by the storage path, reads, decrypts, and passes the value to the plugins.')]),e._v(" "),s("h3",{attrs:{id:"node-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Node Configuration")]),e._v(" "),s("p",[e._v('Each host is configurable via "nodes" in the project resource model. Nodes are defined in terms of attributes.')]),e._v(" "),s("p",[e._v("Attributes")]),e._v(" "),s("ul",[s("li",[e._v("hostname: The hostname of the remote node accessible to the Rundeck server host.")]),e._v(" "),s("li",[e._v("username: The login account name to the remote host.")]),e._v(" "),s("li",[e._v('password-storage-path: The path to the file containing the password in the keystore. This path will start with "keys/".')]),e._v(" "),s("li",[e._v('connectionUri: Alternate connection parameters as a URI. e.g. "https://hostname:port"')])]),e._v(" "),s("h4",{attrs:{id:"example-resource-model-definitions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-resource-model-definitions","aria-hidden":"true"}},[e._v("#")]),e._v(" Example resource model definitions")]),e._v(" "),s("p",[e._v("The following example show a node defined using the XML format.")]),e._v(" "),s("p",[s("strong",[e._v("Note the password-storage-path attribute referencing the key path.")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(' <node name="winhost123"\n       hostname="xxx.xxx.xxx.xxx"\n       username="myaccount"\n       password-storage-path="keys/winhost123.passwd" .../>\n')])])]),s("h3",{attrs:{id:"project-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#project-configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Project Configuration")]),e._v(" "),s("p",[e._v("The Password storage path can be configured at the project level. In the Project Configuration page, set the Password Storage Path to a key path. The path can contain references to information from the node or user who is executing the command, for example:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("keys/nodes/${node.name}.password\n")])])]),s("p",[e._v("or")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("keys/users/${job.username}.password\n")])])]),s("h3",{attrs:{id:"winrm-setting-to-use-powershell-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#winrm-setting-to-use-powershell-plugin","aria-hidden":"true"}},[e._v("#")]),e._v(" WinRM Setting to use PowerShell Plugin")]),e._v(" "),s("p",[e._v("In order to connect Rundeck with remote Windows nodes, it is necessary to set WinRM in both, the server and the remote nodes.")]),e._v(" "),s("h4",{attrs:{id:"on-the-rundeck-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#on-the-rundeck-server","aria-hidden":"true"}},[e._v("#")]),e._v(" On the rundeck server")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('winrm quickconfig\nwinrm set winrm/config/client @{TrustedHosts="*"}\n')])])]),s("h4",{attrs:{id:"on-the-remote-nodes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#on-the-remote-nodes","aria-hidden":"true"}},[e._v("#")]),e._v(" On the remote nodes")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('winrm quickconfig\n​winrm set winrm/config/service/Auth @{Basic="true"}\nwinrm set winrm/config/service @{AllowUnencrypted="true"}\nwinrm set winrm/config/winrs @{MaxMemoryPerShellMB="1024"}\n')])])]),s("h3",{attrs:{id:"other-setting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#other-setting","aria-hidden":"true"}},[e._v("#")]),e._v(" Other setting")]),e._v(" "),s("p",[e._v("To enable the execution of remote command:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Set-ExecutionPolicy RemoteSigned\n")])])]),s("p",[e._v("To enable permission to a user to execute remote command:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Set-PSSessionConfiguration -ShowSecurityDescriptorUI -Name Microsoft.PowerShell\n")])])]),s("p",[e._v("Increase the concurrent shell issue:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("set-item wsman:\\localhost\\shell\\maxshellsperuser 50\n")])])]),s("h2",{attrs:{id:"enable-credssp-authentication-on-windows-domain"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enable-credssp-authentication-on-windows-domain","aria-hidden":"true"}},[e._v("#")]),e._v(" Enable CredSSP Authentication On Windows Domain")]),e._v(" "),s("h3",{attrs:{id:"on-the-rundeck-server-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#on-the-rundeck-server-2","aria-hidden":"true"}},[e._v("#")]),e._v(" On the Rundeck server")]),e._v(" "),s("h4",{attrs:{id:"enable-credssp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enable-credssp","aria-hidden":"true"}},[e._v("#")]),e._v(" Enable CredSSP")]),e._v(" "),s("p",[e._v("Open a powershell windows and run:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('Enable-WSManCredSSP -Role "Client" -DelegateComputer "*.something.com"\n')])])]),s("p",[e._v("Where "),s("code",[e._v("something.com")]),e._v(" is the DNS domain of the target computer")]),e._v(" "),s("p",[e._v("or")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('Enable-WSManCredSSP -Role "Client" -DelegateComputer "*"\n')])])]),s("h4",{attrs:{id:"allow-delegating-fresh-credentials"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#allow-delegating-fresh-credentials","aria-hidden":"true"}},[e._v("#")]),e._v(" Allow Delegating Fresh Credentials")]),e._v(" "),s("ul",[s("li",[e._v("Click "),s("strong",[e._v("Start")]),e._v(", type "),s("strong",[e._v("mmc")]),e._v(" and then click "),s("strong",[e._v("OK")]),e._v(".")]),e._v(" "),s("li",[e._v("Click **File and then click **Add/Remove Snap-in**.")]),e._v(" "),s("li",[e._v("Click "),s("strong",[e._v("Group Policy Object")]),e._v(" and then click "),s("strong",[e._v("Add")]),e._v(".")]),e._v(" "),s("li",[e._v("Select "),s("strong",[e._v("Local Computer")]),e._v(" and then click "),s("strong",[e._v("Finish")]),e._v(".")]),e._v(" "),s("li",[e._v("Go to "),s("strong",[e._v("Computer Policy\\Administrative Templates\\System\\Credentials Delegation\\Allow Delegating Fresh Credentials")]),e._v(" → Set to "),s("strong",[e._v("enabled")])])]),e._v(" "),s("p",[s("img",{attrs:{src:a(228),alt:"Enable delegating fresh credentials"}})]),e._v(" "),s("ul",[s("li",[e._v("Add "),s("strong",[e._v("WSMAN/*")]),e._v(" to list of computers and check the box for "),s("strong",[e._v("Concatenate OS defaults with input above")]),e._v(".")])]),e._v(" "),s("p",[s("img",{attrs:{src:a(229),alt:"Add servers to list"}})]),e._v(" "),s("h4",{attrs:{id:"enable-credssp-authentication-on-winrm-client"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enable-credssp-authentication-on-winrm-client","aria-hidden":"true"}},[e._v("#")]),e._v(" Enable CredSSP authentication on Winrm Client")]),e._v(" "),s("p",[e._v("Open a CMD Prompt as an Administrator user and execute:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('winrm set winrm/config/client/auth @{CredSSP="true"}\n')])])]),s("p",[e._v("You need to have winrm service configured and running.")]),e._v(" "),s("h3",{attrs:{id:"on-the-remote-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#on-the-remote-node","aria-hidden":"true"}},[e._v("#")]),e._v(" On the remote node")]),e._v(" "),s("h4",{attrs:{id:"enable-credssp-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enable-credssp-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Enable CredSSP")]),e._v(" "),s("p",[e._v("Open a powershell windows and run:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('Enable-WSManCredSSP -Role "Server"\n')])])]),s("h4",{attrs:{id:"make-sure-that-you-enable-the-credssp-on-winrm-service-settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#make-sure-that-you-enable-the-credssp-on-winrm-service-settings","aria-hidden":"true"}},[e._v("#")]),e._v(" Make sure that you enable the CredSSP on WinRM Service settings")]),e._v(" "),s("p",[e._v("To get the WinRm Service config:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("winrm get winrm/config/service\n")])])]),s("p",[e._v("To enable the CredSSP:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('winrm set winrm/config/service/auth @{CredSSP="true"}\n')])])]),s("h3",{attrs:{id:"troubleshooting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting","aria-hidden":"true"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),s("p",[e._v("If you are using a non-administrator user (or a not- domain-administrator user) to execute command to remote nodes, you need to set up the access on the remote machine ( to the user or some of its groups, eg: Domain User group).")]),e._v(" "),s("p",[e._v("To add permissions to non-administrator user to execute remote commands:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Set-PSSessionConfiguration Microsoft.Powershell -ShowSecurityDescriptorUI\n")])])]),s("h3",{attrs:{id:"troubleshooting-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),s("p",[e._v('If you get "Access is denied" error when you try to access to a shared folder on the remote node, it is possible that you must use the '),s("a",{attrs:{href:"http://support.rundeck.com/customer/portal/articles/2522223-enable-credssp-authentication-windows",target:"_blank",rel:"noopener noreferrer"}},[e._v("CredSSP autentication"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("Then, you can define the authentication type like:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<node name="XXXXX"\n      description="Windows Server 2012"\n      tags="Win2012"\n      hostname="XXXXX"\n      osArch="amd64"\n      osFamily="windows"\n      osName="Windows Server 2012"\n      osVersion="6.3"\n      username="rundeckuser@Domain.Local" password-storage-path="keys/xxxxx"\n      ps-authentication-type="CredSSP" />\n')])])]),s("p",[e._v("If you get this error, you have to change the network category:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("WinRM service is already running on this machine.\n\nWSManFault\n   Message\n       ProviderFault\n           WSManFault\n               Message = WinRM firewall exception will not work since one of the network connection types on this machine is set to Public. Change the network connection type to either Domain or Private and try again.\nError number:  -2144108183 0x80338169\n\nWinRM firewall exception will not work since one of the network connection types on this machine is set to Public. Change the network connection type to either Domain or Private and try again.\n")])])]),s("p",[e._v("Workaround using PowerShell as Administrator User:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# (to get the InterfaceIndex)\nGet-NetConnectionProfile\n\nSet-NetConnectionProfile -InterfaceIndex [INTERFAZ_INDEX] -NetworkCategory Private\n")])])]),s("p",[e._v("It could be necessary to change the user’s log-on in tomcat service when the remote connection does not work:")]),e._v(" "),s("p",[s("img",{attrs:{src:a(230),alt:"Tomcat settings"}})])])},[],!1,null,null,null);t.default=r.exports}}]);