'use strict';

const Code = require('code');
const Lab = require('lab');

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

describe('test', () => {

    it('tests', () => {
        const test = require('./');
        expect(test).to.not.be.empty();
    });

});