![image_squidhome@2x.png](http://i.imgur.com/RIvu9.png)

# DynamoDB Sails/Waterline Adapter

[![Build Status](https://travis-ci.org/unvar/sails-dynamodb.png?branch=master)](https://travis-ci.org/unvar/sails-dynamodb) [![NPM version](https://badge.fury.io/js/sails-dynamodb.png)](http://badge.fury.io/js/sails-dynamodb) [![Dependency Status](https://gemnasium.com/balderdashy/sails-dynamodb.png)](https://gemnasium.com/balderdashy/sails-dynamodb)

A [Waterline](https://github.com/balderdashy/waterline) adapter for DynamoDB. May be used in a [Sails](https://github.com/balderdashy/sails) app or anything using Waterline for the ORM.

## Install

Install is through NPM.

```bash
$ npm install sails-dynamodb
```

## Configuration

The following config options are available along with their default values:

```javascript
config: {
  TODO: "TODO"
};
```

## Testing

Test are written with mocha. Integration tests are handled by the [waterline-adapter-tests](https://github.com/balderdashy/waterline-adapter-tests) project, which tests adapter methods against the latest Waterline API.

To run tests:

```bash
$ npm test
```

## About Waterline

Waterline is a new kind of storage and retrieval engine.  It provides a uniform API for accessing stuff from different kinds of databases, protocols, and 3rd party APIs.  That means you write the same code to get users, whether they live in mySQL, LDAP, MongoDB, or Facebook.

To learn more visit the project on GitHub at [Waterline](https://github.com/balderdashy/waterline).
