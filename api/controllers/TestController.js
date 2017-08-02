/**
 * TestController
 *
 * @description :: Server-side logic for managing tests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	adduser : function(req, res) {

		var params = req.query;

		var testUser = {};
		testUser.firstName = params.firstName;
		testUser.lastName = params.lastName;

		sails.log("We got a request!");

		sails.log(params);

		Test.create(testUser).exec(function(err, data)
		{
			if (err){
				sails.log("There was an error adding the user");
				sails.log(err);
				res.send("There was an error!");
			}
			else {
				sails.log("The user was created!");
				sails.log(data);
				res.send(data);
			}
		});
	},


	sayhello: function(req, res) {

		res.send("Hello There!");
	},

	doSomethingElse: function(req, res) {

		var params = req.query;
		sails.log(params);
		res.send(params);
	},

	storeMyName: function (req, res) {
		var params = req.query;
		Test.create(params).exec(function(data, err) {
			if (err) {
				sails.log(err);
			} else {
				sails.log("successfully added to database");
			}
			res.send("thank you!");
		});

	}


};

