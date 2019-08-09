(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{645:function(e,t,n){"use strict";n.r(t);var o=n(0),s=Object(o.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"openssh-bastion-host-node-execution-plugins"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#openssh-bastion-host-node-execution-plugins","aria-hidden":"true"}},[e._v("#")]),e._v(" OpenSSH Bastion Host Node Execution Plugins")]),e._v(" "),n("p",[e._v("This plugin provides a node-executor and file-copier supporting ssh actions through a bastion host.\nUse this plugin if you must access remote servers via a jump host.")]),e._v(" "),n("h2",{attrs:{id:"dry-run-mode"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dry-run-mode","aria-hidden":"true"}},[e._v("#")]),e._v(" Dry run mode")]),e._v(" "),n("p",[e._v("You can configure the plugin to just print the invocation string to the console.\nThis can be useful when defining the configuration properties.")]),e._v(" "),n("h2",{attrs:{id:"plugin-configuration-properties"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#plugin-configuration-properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Plugin Configuration Properties")]),e._v(" "),n("ul",[n("li",[e._v("Bastion SSH Key Storage Path: Identity to use for the bastion host connection.")]),e._v(" "),n("li",[e._v("SSH Options: Extra options to pass to the ssh command invocation")]),e._v(" "),n("li",[e._v("ssh_conifig: Specify ProxyCommand and other flags. Consult the reference for "),n("a",{attrs:{href:"https://linux.die.net/man/5/ssh_config",target:"_blank",rel:"noopener noreferrer"}},[e._v("ssh_config(5)"),n("OutboundLink")],1),e._v(" to learn about posible settings.")]),e._v(" "),n("li",[e._v("Dry run? If set true, just print the command invocation that would be used but do not execute the command. This is useful to preview.")])]),e._v(" "),n("h2",{attrs:{id:"node-specific-key"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node-specific-key","aria-hidden":"true"}},[e._v("#")]),e._v(" Node Specific Key")]),e._v(" "),n("p",[e._v("If the node is configured with the "),n("code",[e._v("ssh-key-storage-path")]),e._v(" attribute, the ssh connection will use that to connect to the remote node.")]),e._v(" "),n("ul",[n("li",[e._v("ssh-key-storage-path: Set to location in Rundeck Keystore")])]),e._v(" "),n("h2",{attrs:{id:"configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),n("p",[e._v("The plugin can be configured as a default node executor and file copier for a Project. Use the Simple Conguration tab to see the configuration properties. The page has a form with inputs to configure the connection to the bastion host.")]),e._v(" "),n("p",[e._v("You can also modify the project.properties or use the API/CLI to define the plugin configuration.\nThe Plugin List page will describe the key names to set.")]),e._v(" "),n("h4",{attrs:{id:"customize-the-ssh-config"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#customize-the-ssh-config","aria-hidden":"true"}},[e._v("#")]),e._v(" Customize the ssh_config")]),e._v(" "),n("p",[e._v("You can define multiple lines using a trailing backslash and an indent on the following line.")]),e._v(" "),n("p",[e._v("Here is an example that defines ssh_config file.")]),e._v(" "),n("pre",[n("code",[e._v("project.plugin.NodeExecutor.openssh-bastion-host.node-executor.ssh_config=Host * \\\n  StrictHostKeyChecking no\n  Port 22\n  ProxyCommand ssh user@bastionhost -W %h\\:%p\n  IdentityFile @plugin.config.identity_file@\n")])]),e._v(" "),n("p",[e._v("Here ssh_options are set.")]),e._v(" "),n("pre",[n("code",[e._v('project.plugin.NodeExecutor.openssh-bastion-host.node-executor.ssh_options="-q -oClearAllForwardings=yes"\n')])]),e._v(" "),n("p",[e._v("Using Dry run, you might see output similar to this:")]),e._v(" "),n("pre",[n("code",[e._v("[dry-run] +------------------------------------------+\n[dry-run] | ssh_config                               |\n[dry-run] +------------------------------------------+\n[dry-run] | Host *\n[dry-run] |   StrictHostKeyChecking no\n[dry-run] |   Port 22\n[dry-run] |   ProxyCommand ssh user@bastion -W %h:%p\n[dry-run] |   IdentityFile /tmp/bastion.ssh-keyfile.prWLUyFU\n[dry-run] +------------------------------------------+\n[dry-run] ssh -q -oClearAllForwardings=yes -F /tmp/ssh_config.zTr9j5KK -i /tmp/host1234.ssh-keyfile.4cjnI2qL alexh@Targa.local whoami\nBegin copy 18 bytes to node host1234: /etc/motd -> /tmp/motd\n[dry-run] +------------------------------------------+\n[dry-run] | ssh_config                               |\n[dry-run] +------------------------------------------+\n[dry-run] | Host *\n[dry-run] |   StrictHostKeyChecking no\n[dry-run] |   Port 22\n[dry-run] |   ProxyCommand ssh user@bastion -W %h:%p\n[dry-run] |   IdentityFile /tmp/bastion.ssh-keyfile.XXXXX.WAlpZLNb\n[dry-run] |\n[dry-run] +------------------------------------------+\n[dry-run] scp -q -oClearAllForwardings=yes -F /tmp/ssh_config.XXXX.cosJ7xQ2 -i /tmp/host1234.ssh-keyfile.XXXXX.BOqYAKRu /etc/motd alexh@Targa.local:/tmp/motd\n/tmp/motd\nCopied: /tmp/motd\n")])]),e._v(" "),n("h1",{attrs:{id:"docker-example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-example","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker Example")]),e._v(" "),n("p",[e._v("You can test the plugin on a docker environment on the plugin "),n("a",{attrs:{href:"https://github.com/rundeck-plugins/openssh-bastion-node-execution",target:"_blank",rel:"noopener noreferrer"}},[e._v("repo"),n("OutboundLink")],1)]),e._v(" "),n("ul",[n("li",[e._v("Run "),n("code",[e._v("./star-docker-example.sh")])]),e._v(" "),n("li",[e._v("Got to "),n("code",[e._v("http://localhost:8080")])]),e._v(" "),n("li",[e._v("User/Password => admin/admin")])]),e._v(" "),n("p",[e._v("The example has two networks:")]),e._v(" "),n("ul",[n("li",[e._v("Network1: rundeck, bastion")]),e._v(" "),n("li",[e._v("Network2: bastion, linux-1, linux-2")])]),e._v(" "),n("p",[e._v("The goal of this example is that Rundeck connects to the nodes linux-1 and linux-2 through the bastion container (Rundeck cannot see linux-X nodes)")])])},[],!1,null,null,null);t.default=s.exports}}]);