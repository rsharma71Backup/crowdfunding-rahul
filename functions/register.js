'use strict';

const bc_client = require('../blockchain_sample_client');
const bcrypt = require('bcryptjs');
var bcSdk = require('../src/blockchain/blockchain_sdk');
var user = 'risabh.s';
var affiliation = 'fundraiser';
//exports is used here so that registerUser can be exposed for router and blockchainSdk file
exports.registerUser = (usertype,name,email,phone,password,repassword,doctype,facebook,blog,websiteurl,youtube,org,designation)=>
new Promise((resolve,reject) => {
	

	const newUser =({
         usertype:usertype,
		 name:name,
		 email:email,
		 phone:phone,
		 password:password,
		 repassword:repassword,
		 doctype: doctype,
		 facebook:facebook,
		 blog:blog,
		 websiteurl:websiteurl,
		 youtube:youtube,
		 org:org,
		 designation:designation
		});
		
	console.log("ENTERING THE Userregisteration from register.js to blockchainSdk");
	  
	    bcSdk.UserRegisteration({user: user, UserDetails: newUser})



	.then(() => resolve({ status: 201, message: usertype }))

		.catch(err => {

			if (err.code == 11000) {
						
				reject({ status: 409, message: 'User Already Registered !' });

			} else {
				conslole.log("error occurred" + err);

				reject({ status: 500, message: 'Internal Server Error !' });
			}
		});
	}
	);
	
