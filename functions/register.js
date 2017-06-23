'use strict';

const bc_client = require('../blockchain_sample_client');
const bcrypt = require('bcryptjs');
var bcSdk = require('../src/blockchain/blockchain_sdk');
var user = 'risabh.s';
var affiliation = 'fundraiser';
//exports is used here so that registerUser can be exposed for router and blockchainSdk file
exports.registerUser = (user_type,name,email,phone,password,re_password,doc_type,facebook,blog,website_url,youtube,org,designation)=>
new Promise((resolve,reject) => {
	

	const newUser =({
         user_type:user_type,
		 name:name,
		 email:email,
		 phone:phone,
		 password:password,
		 re_password:re_password,
		 doc_type: doc_type,
		 facebook:facebook,
		 blog:blog,
		 website_url:website_url,
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
	
