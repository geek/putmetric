'use strict';

const Lab = require('lab');
const Putmetric = require('../');


const lab = exports.lab = Lab.script();
const it = lab.it;
const expect = Lab.expect;


it('calls containerpilot with metric data', (done) => {
  const putmetric = new Putmetric({ namespace: 'namespace', subsystem: 'subsystem', containerpilot: '/notfound' });
  putmetric('metric', 10, (err) => {
    expect(err).to.exist();
    expect(err.cmd).to.equal('/notfound -putmetric namespace_subsystem_metric=10');
    done();
  });
});

it('uses defaults when missing options', (done) => {
  const putmetric = new Putmetric();
  putmetric('metric', 10, (err) => {
    expect(err).to.exist();
    expect(err.cmd).to.equal('/bin/containerpilot -putmetric __metric=10');
    done();
  });
});
