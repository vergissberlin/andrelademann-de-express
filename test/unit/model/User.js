/***
 * @link https://www.npmjs.com/package/mongoose-mock
 */

var mongooseMock = require('mongoose-mock'),
	proxyquire = require('proxyquire'),
	chai = require('chai'),
	expect = chai.expect,
	sinon = require('sinon'),
	sinonChai = require("sinon-chai");
chai.use(sinonChai);

describe('User', function () {

	var User;

	beforeEach(function () {
		User = proxyquire('../../../model/User', {'mongoose': mongooseMock});
	});

	describe('.createAndSave', function () {
		it('saves the user', function () {
			var callback = sinon.spy();
			var user = User.createAndSave({title: 'Mr', lastName: 'White'}, callback);
			expect(user.save).calledOnce;
		});
	});
});
