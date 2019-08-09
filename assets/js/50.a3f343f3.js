(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{493:function(e,t,o){"use strict";o.r(t);var n=o(0),r=Object(n.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"s3-log-storage-plugin"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#s3-log-storage-plugin","aria-hidden":"true"}},[e._v("#")]),e._v(" S3 Log Storage Plugin")]),e._v(" "),o("p",[e._v("This is a plugin for "),o("a",{attrs:{href:"http://rundeck.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rundeck"),o("OutboundLink")],1),e._v(" that uses "),o("a",{attrs:{href:"http://aws.amazon.com/s3",target:"_blank",rel:"noopener noreferrer"}},[e._v("Amazon S3"),o("OutboundLink")],1),e._v(" to store execution\nlog files, for backup or for cloud-friendly behavior.")]),e._v(" "),o("p",[e._v("The source code lives at "),o("a",{attrs:{href:"https://github.com/rundeck-plugins/rundeck-s3-log-plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/rundeck-plugins/rundeck-s3-log-plugin"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"build"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#build","aria-hidden":"true"}},[e._v("#")]),e._v(" Build")]),e._v(" "),o("pre",[o("code",[e._v("./gradlew clean build\n")])]),e._v(" "),o("h2",{attrs:{id:"install"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[e._v("#")]),e._v(" Install")]),e._v(" "),o("p",[e._v("Copy the "),o("code",[e._v("rundeck-s3-log-plugin-x.y.jar")]),e._v(" file to the "),o("code",[e._v("libext/")]),e._v(" directory inside your Rundeck installation.")]),e._v(" "),o("p",[e._v("Enable the ExecutionFileStorage provider named "),o("code",[e._v("org.rundeck.amazon-s3")]),e._v(" in your "),o("code",[e._v("rundeck-config")]),e._v(" file:")]),e._v(" "),o("pre",[o("code",[e._v("rundeck.execution.logs.fileStoragePlugin=org.rundeck.amazon-s3\n")])]),e._v(" "),o("h2",{attrs:{id:"aws-credentials"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#aws-credentials","aria-hidden":"true"}},[e._v("#")]),e._v(" AWS Credentials")]),e._v(" "),o("p",[e._v('The plugin will by default use the "credentials provider chain" for AWS access credentials, which allows you to\nexternally configure the credentials in any of three ways:')]),e._v(" "),o("ol",[o("li",[e._v("Environment variables "),o("code",[e._v("AWS_ACCESS_KEY_ID")]),e._v(" and "),o("code",[e._v("AWS_SECRET_KEY")])]),e._v(" "),o("li",[e._v("Java system properties "),o("code",[e._v("aws.accessKeyId")]),e._v(" and "),o("code",[e._v("aws.secretKey")])]),e._v(" "),o("li",[e._v("Instance Profile credentials, if you are running on EC2. (See "),o("a",{attrs:{href:"http://docs.aws.amazon.com/IAM/latest/UserGuide/role-usecase-ec2app.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("the IAM user guide"),o("OutboundLink")],1),e._v(").")])]),e._v(" "),o("p",[e._v("If you want to specify access key and secret key, you can do so in the configuration:")]),e._v(" "),o("h2",{attrs:{id:"configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),o("p",[e._v("To configure the AWS access credentials you can set these property values:")]),e._v(" "),o("p",[o("code",[e._v("AWSAccessKeyId")]),e._v(" : access key, required if using "),o("code",[e._v("AWSSecretKey")])]),e._v(" "),o("p",[o("code",[e._v("AWSSecretKey")]),e._v(" : secret key, required if using "),o("code",[e._v("AWSAccessKeyId")])]),e._v(" "),o("p",[o("code",[e._v("AWSCredentialsFile")]),e._v(" : properties file which contains "),o("code",[e._v("accessKey")]),e._v(" and "),o("code",[e._v("secretKey")]),e._v(" entries. Alternative to specifying\nthe "),o("code",[e._v("AWSAccessKeyId and")]),e._v("AWSSecretKey`")]),e._v(" "),o("p",[e._v("S3 configuration uses these plugin configuration property values:")]),e._v(" "),o("p",[o("code",[e._v("bucket")]),e._v(" : name of the S3 bucket to use")]),e._v(" "),o("p",[o("code",[e._v("path")]),e._v(" : a path-like string that defines where in the bucket to store the log for a particular execution. You can\ninclude variables to expand. Default value: "),o("code",[e._v("rundeck/project/$PROJECT/logs/$ID")])]),e._v(" "),o("p",[e._v("Variables in the "),o("code",[e._v("path")]),e._v(" value include:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("${job.execid}")]),e._v(" - the execution ID")]),e._v(" "),o("li",[o("code",[e._v("${job.project}")]),e._v(" - the project name")]),e._v(" "),o("li",[o("code",[e._v("${job.id}")]),e._v(" - the Job UUID if it exists")]),e._v(" "),o("li",[o("code",[e._v("${job.group}")]),e._v(" - the Job Group if it exists")]),e._v(" "),o("li",[o("code",[e._v("${job.path}")]),e._v(" - the Job Name if it exists")])]),e._v(" "),o("p",[o("code",[e._v("region")]),e._v(" : AWS region name to use. Default: "),o("code",[e._v("us-east-1")])]),e._v(" "),o("p",[o("code",[e._v("endpoint")]),e._v(": Optional, a custom S3 compatible endpoint to use, such as "),o("code",[e._v("https://my-host.com/s3")])]),e._v(" "),o("p",[o("code",[e._v("pathStyle")]),e._v(": Optional, boolean, default=False, set to True if you need to define the bucket in your S3 like endpoint URL. e.g https://<s3_like_end_point_url>/<your_bucket_name>\nA custom way of defining buckets in your endpoint. Useful for non-AWS S3 like object storage technology e.g swift stack, Optums, etc.\nBackground information http://docs.aws.amazon.com/AmazonS3/latest/dev/VirtualHosting.html. May be useful if you have an https endpoint URL.")]),e._v(" "),o("p",[e._v("You can define the configuration values in "),o("code",[e._v("framework.properties")]),e._v(" by prefixing the property name with the stem:\n"),o("code",[e._v("framework.plugin.ExecutionFileStorage.org.rundeck.amazon-s3.")]),e._v(". Or in a project's project.properties file with the stem\n"),o("code",[e._v("project.plugin.ExecutionFileStorage.org.rundeck.amazon-s3.")]),e._v(".")]),e._v(" "),o("p",[e._v("For example:")]),e._v(" "),o("pre",[o("code",[e._v("#AWSAccessKeyId and AWSSecretKey can be specified in the file\nframework.plugin.ExecutionFileStorage.org.rundeck.amazon-s3.AWSAccessKeyId=ABC123...\nframework.plugin.ExecutionFileStorage.org.rundeck.amazon-s3.AWSSecretKey=ABC321...\n\n#alternately, AWSCredentialsFile can point to a file which contains `accessKey` and `secretKey`\nframework.plugin.ExecutionFileStorage.org.rundeck.amazon-s3.AWSCredentialsFile=/path/to/awscredentials.properties\n\n#name of the bucket\nframework.plugin.ExecutionFileStorage.org.rundeck.amazon-s3.bucket=test-rundeck-logs\n\n#path to store the logs\nframework.plugin.ExecutionFileStorage.org.rundeck.amazon-s3.path=logs/${job.project}/${job.execid}.log\n")])]),e._v(" "),o("h2",{attrs:{id:"using-with-rundeck-ssl-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-with-rundeck-ssl-configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Using with Rundeck SSL Configuration")]),e._v(" "),o("p",[e._v("If you want to use this plugin when you have Rundeck configured with a custom SSL truststore, you will need to import the Amazon S3 SSL certificates to your truststore.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("echo -n | openssl s_client -connect my-bucket.s3.amazonaws.com:443 > certs.out\nkeytool -importcert -trustcacerts -file certs.out -alias s3-amazonaws -keystore $RDECK_BASE/etc/truststore\n")])])])])},[],!1,null,null,null);t.default=r.exports}}]);