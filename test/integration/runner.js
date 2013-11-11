'use strict';
/**
 * Run Integration Tests
 *
 * Uses the waterline-adapter-tests module to
 * run mocha tests against the currently implemented
 * waterline API.
 */

var tests = require('waterline-adapter-tests'),
    adapter = require('../../lib/adapter');

/**
 * Build a DynamoDB config
 */

var config = {
  blah: 'blah'
};

/**
 * Run Tests
 */
tests({ adapter: adapter, config: config, failOnError: true });
