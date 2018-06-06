# Driver AWS for Blockbase
Compatible with Blockbase Framework

### Version
0.0.3 alpha

### Description
Driver importing the [AWS Node SDK](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/) in Blockbase

### How to install ?

First add create the `~/.aws/credentials` file on your system
This file contains the access keys of your AWS account (or IAM dedicated user)

```
[default]
aws_access_key_id = AKID...
aws_secret_access_key = YOUR_SECRET_KEY
```


By default, you'll have one pair aws_access_key_id / aws_secret_access_key named `[default]`, but you can add as much as you want.


Then install the driver
```shell
$ npm i --save blockbase-aws
```

If you use a key other than `[default]`, you can add it to your {env}.yml config file.
```yml
aws :
    profile: mykey
```


Feel free to also use the {env}.yml config file to store other aws parameters for further usage in your controllers, they will simply appear in `app.config.get('aws').*`
```yml
aws :
    profile: mykey
    region : eu-west-1
    security_group : sg-x010101c
    # etc ...
```

License
----
(Licence [MIT](https://github.com/blacksmithstudio/blockbase-express/blob/master/LICENCE))
Coded by [Blacksmith](https://www.blacksmith.studio)


**Free Software, Hell Yeah!**

[Node.js]:https://nodejs.org/en
[NPM]:https://www.npmjs.com
