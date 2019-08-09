(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{653:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"resource-editor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resource-editor","aria-hidden":"true"}},[e._v("#")]),e._v(" Resource Editor")]),e._v(" "),a("p",[e._v('The Resource Editor integration is a way to link to a third-party system used for managing Node definitions from within Rundeck. Each Node entry in the resources.xml or resources.yaml can define a URL to provide an "Edit" link that will appear in the Rundeck Run page for that Node.')]),e._v(" "),a("p",[e._v("This allows you to make use of the Resource Model Source in a more seamless way. Rundeck will load the Resource model from the third-party Provider system, and users of Rundeck can click straight to the Editor for those Nodes. The Provider and the Editor could be the same system, or they could both be custom CGI scripts that integrate with a third system.")]),e._v(" "),a("p",[e._v("Some teams have acquired or developed tools to manage information\nabout the hosts deployed in their networks. These tools have\ninterfaces to not just view but also modify the data about these\nhosts. Though there is no widely used common standard adopted by users\nof these tools, it is possible to map the data to meet the needs of\n"),a("a",{attrs:{href:"#resource-model-source"}},[e._v("Rundeck resource models")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#definition","aria-hidden":"true"}},[e._v("#")]),e._v(" Definition")]),e._v(" "),a("p",[e._v("The "),a("router-link",{attrs:{to:"/manpages/man5/resource-v13.html"}},[e._v("Rundeck resource model document format")]),e._v(" and the "),a("router-link",{attrs:{to:"/manpages/man5/resource-yaml-v13.html"}},[e._v("resource-yaml-v13")]),e._v(" format provide two attributes that help connect the dots between the\nRundeck UI and the editing interface provided by the external data\nmanagement tool. They can use "),a("code",[e._v("editUrl")]),e._v(" or "),a("code",[e._v("remoteUrl")]),e._v(" attributes to specify the remote URL. The URLs can embed properties about the node to expand prior to being loaded, which allows you to e.g. submit query parameters using the node name.")],1),e._v(" "),a("p",[a("code",[e._v("editUrl")])]),e._v(" "),a("p",[e._v(': Specifies a URL to a remote site which will allow editing of the Node. When specified, the Node resource will display an "Edit" link in the Rundeck GUI and clicking it will open a new browser page for the URL.')]),e._v(" "),a("p",[a("a",{attrs:{href:"#using-remoteurl"}},[a("code",[e._v("remoteUrl")])])]),e._v(" "),a("p",[e._v(': Specifies a URL for a remote site which will be loaded in an iframe within a Rundeck page. Clicking the "Edit" link for the Node will load content from the site within the current Rundeck page, allow you to perform your edit at the remote site, and has optional JavaScript hooks to report the state of the editing process back to the Rundeck page for a more streamlined user interface.')]),e._v(" "),a("h3",{attrs:{id:"using-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Using properties")]),e._v(" "),a("p",[e._v("Properties of the Node can be embedded in the URL and expanded prior to use. The syntax is:")]),e._v(" "),a("pre",[a("code",[e._v("${node.property}\n")])]),e._v(" "),a("p",[e._v("Available properties are:")]),e._v(" "),a("p",[a("code",[e._v("name")]),e._v(", "),a("code",[e._v("hostname")]),e._v(", "),a("code",[e._v("os-name")]),e._v(", "),a("code",[e._v("os-version")]),e._v(", "),a("code",[e._v("os-family")]),e._v(", "),a("code",[e._v("os-arch")]),e._v(", "),a("code",[e._v("username")]),e._v(", "),a("code",[e._v("description")]),e._v(", "),a("code",[e._v("tags")]),e._v(", "),a("code",[e._v("project")])]),e._v(" "),a("p",[e._v("You can embed these properties within the url like this:")]),e._v(" "),a("pre",[a("code",[e._v("http://mycmdb:8080/node/edit?name=${node.name}\n")])]),e._v(" "),a("h3",{attrs:{id:"using-remoteurl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-remoteurl","aria-hidden":"true"}},[e._v("#")]),e._v(" Using remoteUrl")]),e._v(" "),a("p",[e._v("Using the "),a("code",[e._v("remoteUrl")]),e._v(" lets you embed another site into an iframe within the Rundeck page, and optionally allows communication back to the Rundeck page about the state of the editing process.")]),e._v(" "),a("p",[e._v("If you want to embed the remote site without having to make any changes to the remote page content, you can do so simply by specifying the "),a("code",[e._v("remoteUrl")]),e._v(' to use. When the user clicks "Edit" the site will load within an iframe, and the user can perform whatever actions on the site are necessary. After they are done they will have to manually click the "Close" button on the Rundeck page to close the iframe.')]),e._v(" "),a("p",[e._v("If you want the user interface in Rundeck to be more streamlined, you will have to be able to modify the web pages produced by the remote site to add simple Javascript calls to communicate back to the Rundeck page. The JavaScript hooks are designed to not add much burden to the developer of the remote site or system, so they are optional.")]),e._v(" "),a("h4",{attrs:{id:"streamlining-the-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#streamlining-the-interface","aria-hidden":"true"}},[e._v("#")]),e._v(" Streamlining the interface")]),e._v(" "),a("p",[e._v("If the remote site implements some Javascript messaging conforming to a simple optional protocol, then the user interface between Rundeck and the remote site can be made more seamless.")]),e._v(" "),a("p",[e._v("Rundeck lets the remote site inform it when the following steps occur:")]),e._v(" "),a("ul",[a("li",[e._v("The user begins editing a Node")]),e._v(" "),a("li",[e._v("The user saves the Node changes successfully and is finished")]),e._v(" "),a("li",[e._v("The user cancels the Node changes, or otherwise has finished without saving")]),e._v(" "),a("li",[e._v("An error occurs and an error message should be shown.")])]),e._v(" "),a("p",[e._v("Due to web browser security restrictions, direct communication between different webpages can only be done through use of the "),a("a",{attrs:{href:"https://html.spec.whatwg.org/#crossDocumentMessages",target:"_blank",rel:"noopener noreferrer"}},[e._v("postMessage"),a("OutboundLink")],1),e._v(" method.")]),e._v(" "),a("p",[e._v("The remote page can send these messages simply with this javascript:")]),e._v(" "),a("pre",[a("code",[e._v('<script type="text/javascript">\n    if(window.self!=window.parent){\n        window.parent.postMessage("...message...","http://rundeckserver:port");\n    }\n<\/script>\n')])]),e._v(" "),a("p",[a("code",[e._v("window.parent")]),e._v(" will be the enclosing browser window when the site is loaded within an iframe. This script simply checks whether the page is loaded in an iframe before sending the message.")]),e._v(" "),a("p",[e._v("The first argument to "),a("code",[e._v("postMessage")]),e._v(' is one of the message codes shown below. The second argument is the expected "origin", meaning the URL scheme, server and port of the server receiving the message. You can specify "*" to include any site that may be loading the content, but you may want to restrict it to your Rundeck installation\'s scheme, hostname and port.')]),e._v(" "),a("p",[e._v("Rundeck can receive the following messages sent by the remote site:")]),e._v(" "),a("p",[a("code",[e._v("rundeck:node:edit:started")]),e._v('\n~ Sent as soon as the remote edit URL is loaded and indicates that the remote Site understands the messaging protocol and has loaded the correct edit page. You would probably send this on the "edit" or "form" page for the targeted node.')]),e._v(" "),a("p",[a("code",[e._v("rundeck:node:edit:error")]),e._v(" or "),a("code",[e._v("rundeck:node:edit:error:An error message")]),e._v('\n~ Sent if some error occurs. The remote editing form will close and the error message (if any) will be shown. You would probably send this on the "edit" or "view" page if there is an error locating the targeted Node or loading anything required for the edit process.')]),e._v(" "),a("p",[e._v('The next two messages are only valid after the "started" message has already been received:')]),e._v(" "),a("p",[a("code",[e._v("rundeck:node:edit:finished:true")]),e._v('\n~ Sent after the remote form has been saved without errors. This indicates that the editing process is done and has completed with saved changes. You would probably send this on the "view" or "show" page for the targeted node if the save operation was successful.')]),e._v(" "),a("p",[a("code",[e._v("rundeck:node:edit:finished:false")]),e._v('\n~ Sent after the remote form has been either cancelled or discarded without changes. This indicates that the editing process is done but no changes were made. You would probably send this on the "view" or "show" for the targeted node (if your site simply shows the node view again) or "list" page (if your site goes back to a list of resources) if the user hits "cancel".')]),e._v(" "),a("p",[e._v('Any message not shown here that is received by Rundeck after it has received the "started" message will be considered unexpected and the editing process will close the iframe.')]),e._v(" "),a("p",[e._v("The user will also have the option to close and cancel the remote editing process at any time.")]),e._v(" "),a("p",[e._v('Note that sending the "error" or "finished" message will close the editing session and all subsequent messages will be ignored.')]),e._v(" "),a("p",[e._v("TODO: The JavaScript code to communicate back to Rundeck could be bundled into a simple widget script file for easier inclusion on remote sites.")]),e._v(" "),a("h3",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("p",[e._v("Here are some examples of using the "),a("code",[e._v("editUrl")]),e._v(" and "),a("code",[e._v("remoteUrl")]),e._v(" in a resources.xml/resources.yaml file:")]),e._v(" "),a("p",[e._v("Specify a simple URL for editing, which will simply produce a link:")]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("node")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("venkman"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("editUrl")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("http://mycmdb:8080/node/edit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("...")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("/>")])]),e._v("\n")])])]),a("p",[e._v('Specify a URL for editing, with embedded "name" property as a parameter:')]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("node")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("venkman"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("editUrl")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("http://mycmdb:8080/node/edit?name=${node.name}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("...")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("/>")])]),e._v("\n")])])]),a("p",[e._v('Specify a remote URL with embedded "name" and "project" properties as parameters:')]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("node")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("venkman"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("remoteUrl")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("http://mycmdb:8080/node/edit?name=${node.name}"),a("span",{pre:!0,attrs:{class:"token entity",title:"&"}},[e._v("&amp;")]),e._v("project=${node.project}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("...")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("/>")])]),e._v("\n")])])]),a("p",[e._v('Specify a remote URL with embedded "name" property as part of the path:')]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("node")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("venkman"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("remoteUrl")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("http://mycmdb:8080/node/edit/${node.name}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v("  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("...")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("/>")])]),e._v("\n")])])]),a("p",[e._v("In YAML, some examples:")]),e._v(" "),a("p",[e._v('Specify a remote URL with embedded "name" and "project" properties as parameters:')]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("venkman")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("nodename")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" venkman\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("remoteUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("//mycmdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("8080/node/edit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("?")]),e._v("name=$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("node.name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token important"}},[e._v("&amp")]),e._v(";project=$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("node.project"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v('Specify a remote URL with embedded "name" property as part of the path:')]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("venkman")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("nodename")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" venkman\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("remoteUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(' "http'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("//mycmdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("8080/node/edit/$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("node.name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("h4",{attrs:{id:"simple-site-integration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-site-integration","aria-hidden":"true"}},[e._v("#")]),e._v(" Simple site integration")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://github.com/gschueler/ndbtest",target:"_blank",rel:"noopener noreferrer"}},[e._v("ndbtest"),a("OutboundLink")],1),e._v(" project on github provides an example of how the remote Resource Editor can integrate with Rundeck using JavaScript.")]),e._v(" "),a("p",[e._v("This project is a simple "),a("a",{attrs:{href:"https://grails.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Grails"),a("OutboundLink")],1),e._v(" application which provides a database of Node data. The standard web-based user flow is:")]),e._v(" "),a("ul",[a("li",[e._v("List all nodes.")]),e._v(" "),a("li",[e._v("Edit a Node with the edit page. From here the User can:\n"),a("ul",[a("li",[e._v("Cancel the Node changes\n"),a("ul",[a("li",[e._v("Goes to the Node show page")])])]),e._v(" "),a("li",[e._v("Save the Node changes\n"),a("ul",[a("li",[e._v("Result is successful\n"),a("ul",[a("li",[e._v("Goes to the Node show page")])])]),e._v(" "),a("li",[e._v("Result fails, so display an Error message (either on the edit page or the list page)")])])])])])]),e._v(" "),a("p",[e._v('We want the Node\'s "edit" link in Rundeck to go directly to an edit page, so the '),a("code",[e._v("remoteUrl")]),e._v(" for each Node entry then should be a URL to link to this page, for example:")]),e._v(" "),a("pre",[a("code",[e._v('remoteUrl="http://localhost:8080/node/edit?name=${node.name}&amp;project=${node.project}"\n')])]),e._v(" "),a("p",[e._v("The code below shows that the "),a("code",[e._v("name")]),e._v(" & "),a("code",[e._v("project")]),e._v(" are used to select the correct node from the database, even though the built-in identifier is an ID number:")]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://github.com/gschueler/ndbtest/blob/master/grails-app/controllers/com/dtolabs/ndb/NodeController.groovy#L51",target:"_blank",rel:"noopener noreferrer"}},[e._v("NodeController.groovy:51"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("ul",[a("li",[e._v("Note that if there is no Node found with the specified values, then the response will be to set an error message and then show the list page.")])])])]),e._v(" "),a("p",[e._v("So the JavaScript for integrating with Rundeck is then added to the following pages in this system:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/gschueler/ndbtest/blob/master/grails-app/views/node/edit.gsp",target:"_blank",rel:"noopener noreferrer"}},[e._v("node/edit.gsp"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("If an error has occurred, it posts an error message starting on "),a("a",{attrs:{href:"https://github.com/gschueler/ndbtest/blob/master/grails-app/views/node/edit.gsp#L27",target:"_blank",rel:"noopener noreferrer"}},[e._v("Line 27"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Otherwise, it posts the "),a("code",[e._v("started")]),e._v(" message starting "),a("a",{attrs:{href:"https://github.com/gschueler/ndbtest/blob/master/grails-app/views/node/edit.gsp#L34",target:"_blank",rel:"noopener noreferrer"}},[e._v("on line 34"),a("OutboundLink")],1)])])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/gschueler/ndbtest/blob/master/grails-app/views/node/show.gsp",target:"_blank",rel:"noopener noreferrer"}},[e._v("node/show.gsp"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("If the node save was successful, send the "),a("code",[e._v("finished:true")]),e._v(" message, starting at "),a("a",{attrs:{href:"https://github.com/gschueler/ndbtest/blob/master/grails-app/views/node/show.gsp#L21",target:"_blank",rel:"noopener noreferrer"}},[e._v("line 21"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Otherwise send the "),a("code",[e._v("finished:false")]),e._v(" message starting at "),a("a",{attrs:{href:"https://github.com/gschueler/ndbtest/blob/master/grails-app/views/node/show.gsp#L28",target:"_blank",rel:"noopener noreferrer"}},[e._v("line 28"),a("OutboundLink")],1),e._v(".")])])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/gschueler/ndbtest/blob/master/grails-app/views/node/list.gsp",target:"_blank",rel:"noopener noreferrer"}},[e._v("node/list.gsp"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("If an error has occurred, it posts an error message starting on "),a("a",{attrs:{href:"https://github.com/gschueler/ndbtest/blob/master/grails-app/views/node/list.gsp#L20",target:"_blank",rel:"noopener noreferrer"}},[e._v("line 20"),a("OutboundLink")],1),e._v(".")])])])]),e._v(" "),a("p",[e._v("To complete the round-trip of editing a Node and then showing the results back in Rundeck, the ndbtest project would have to export XML formatted Resource data, and then your Rundeck project.properties file would have to point to the appropriate URL. (This is left as an exercise to the reader.)")]),e._v(" "),a("p",[a("router-link",{attrs:{to:"/tutorials/"}},[e._v("Tutorial")])],1)])},[],!1,null,null,null);t.default=n.exports}}]);