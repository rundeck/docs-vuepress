# RESOURCE-XML

Updated November 20, 2010

# NAME

resource-v13 - describes the Rundeck resource model document

The Resource Model XML document declares a resource model that can also be
uploaded to a project hosted on the Rundeck server. This document describes the
format and necessary elements.

# Elements

The root (aka "top-level") element of the resource file is called `project`.

## project

Project defines all the resources.

Can contain the following elements:

[node](#node)

: A node resource element.

_Example_

```xml
<project>
    <node .../>
</project>
```

## node

The node element defines a Node resource.

_Attributes_

name

: The node name. This is a logical identifier from the node. (required)

description

: A brief description about the node. (optional)

hostname

: The hostname or IP address of the remote host. (required)

osArch

: The operating system architecture. (optional)

osFamily

: The operating system family, such as unix or windows. (optional)

osName

: The operating system name such as Linux or Mac OS X. (optional)

tags

: Comma separated list of filtering tags. (optional) Tags are used for filtering nodes and often represent server role, environment, class, or group.

username

: The username used for the remote connection. (required)

editUrl

: URL to an external resource model editor service (optional)

remoteUrl

: URL to an external resource model service. (optional)

_anything_

: Any user-supplied attributes can be specified to add additional metadata about a node.

_Nested Elements_

[attribute](#attribute)

: Further user defined attributes.

## attribute

Defines a single metadata attribute for the node, as an alternative to specifying it as a XML attribute on the `<node>` element itself.

_Attributes_

name

: The name of the attribute

value

: The value of the attribute

Alternatively, the value can be specified as nested text content.

Examples:

```xml
<attribute name="server-path" value="/var/myapp"/>
<attribute name="server-port">9010</attribute>
```

## Examples

Define a node named "strongbad":

```xml
<node name="strongbad" type="Node"
    description="a development host"
    hostname="strongbad.local"
    osArch="i386" osFamily="unix" osName="Darwin" osVersion="9.2.2"
    username="alexh"/>
```

Define a node of the type LinuxNode that has a `https-port` attribute:

```xml
<node type="LinuxNode" name="centos54" hostname="centos54.local"
      description="Sample Linux node" tags="sample,linux"
      >
    <attribute name="https-port" value="435"/>
</node>
```

Define a node named that uses a non standard SSH port. The "hostname"
value is overloaded to include the port (192.168.1.106:4022):

```xml
<node name="centos54" type="Node"
    description="a centos host"
    hostname="192.168.1.106:4022"
    username="deploy"
    />
```

An example using just the required attributes:

```xml
<node name="centos54" type="Node"
    hostname="192.168.1.106:4022"
    username="deploy"/>
```

An example with a custom attribute "appname" specified in the `<node>` element:

```xml
<node name="centos54" type="Node"
    hostname="192.168.1.106:4022"
    username="deploy"
    appname="CoolApp"
    />
```

An example with tags and custom attributes that describe the server role and environment for this node:

```xml
<node name="centos54"
    hostname="192.168.1.106"
    username="deploy"
    role="redis_server"
    environment="production"
    tags="redis_server, production"
    />
```

The Rundeck source code and all documentation may be downloaded from
<https://github.com/rundeck/rundeck/>.
