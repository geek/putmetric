'use strict';

const ChildProcess = require('child_process');


const internals = {
  defaults: {
    containerpilot: '/bin/containerpilot',
    namespace: '',
    subsystem: ''
  }
};


module.exports = class {
  constructor (options) {
    this._settings = Object.assign({}, options || {}, internals.defaults);
  }

  putmetric (name, value, cb) {
    const metric = `${this._settings.namespace}_${this._settings.subsystem}_${name}=${value}`;
    ChildProcess.execFile(this._settings.containerpilot, ['-putmetric', metric], cb);
  }
};
