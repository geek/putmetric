'use strict';

const Putmetric = require('./');

const putmetric = new Putmetric({ namespace: 'test', subsystem: 'test'});

putmetric('test', 1, (err) => {
  console.log(err);
});
