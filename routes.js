//here only routing is done and if the ro

'use strict';
/*
const auth = require('basic-auth');
const jwt = require('jsonwebtoken');
*/
const register = require('./functions/register');
const createCampaign = require('./functions/createCampaign');
const login = require('./functions/login');
const date = require('date-and-time');
const postbid = require('./functions/postbid');
const fetchCampaignlist =require('./functions/fetchCampaignlist');
const fetchActiveCampaignlist =require('./functions/fetchActiveCampaignlist');

module.exports = router => {
      
	  router.get('/', (req, res) => res.end('Welcome to p2plending,please hit a service !'));

	   router.post('/login', (res, req) => {
	
		const email = req.body.email;
	     console.log(`email from ui side`,email);
		const passpin = req.body.passpin;
	    console.log(passpin,'passpin from ui');
        
		

		if (!email ||!passpin  || !email.trim() ||!passpin.trim() ) {

			res.status(400).json({ message: 'Invalid Request !' });

		} else {

			login.loginUser(email,passpin)

			.then(result => {

             var token = "";
             var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789rapidqubepvtltd";

             for( var i=0; i < 25; i++ )
             text += possible.charAt(Math.floor(Math.random() * possible.length));

            console.log (token);
			
				res.status(result.status).json({ message: result.message, token: token,email:email});

			})

			.catch(err => res.status(err.status).json({ message: err.message }));
		}
	});
	           router.post('/testmethod', function(req, res) {
               console.log(req.body)
               res.send({ "name": "risabh", "email": "rls@gmail.com" });
});

	console.log("entering register function in functions");

	router.post('/registerUser', (req, res) => {
      //  const id = Math.floor(Math.random() * (100000 - 1)) + 1;
	   // const id = "212121";
	   const user_type = req.body.user_type;
	
		const name = req.body.name;
	
		const email = req.body.email;
		
	    const phone = req.body.phone;
	
		const password = req.body.password;

		const re_password = req.body.re_password;
	
	    const doc_type = req.body.doc_type;
		
		const facebook = req.body.facebook;

		const blog =req.body.blog;

		const website_url = req.body.website_url;

		const youtube = req.body.youtube;
	
		const org = req.body.org;
		
		const designation = req.body.designation;
	
	
        		
			
    
		if (!user_type||!name||!email||!phone||!password||!re_password||!doc_type||!facebook||!blog||!website_url||!youtube||!org||!designation||!user_type.trim()||!name.trim()||!email.trim() ||!phone.trim() ||!password.trim() ||!re_password.trim()||!doc_type.trim()||!facebook.trim()||!blog.trim()||!website_url.trim()||!youtube.trim()||!org.trim()||!designation.trim()) {
             //the if statement checks if any of the above paramenters are null or not..if is the it sends an error report.
			res.status(400).json({message: 'Invalid Request !'});

		} else {
			console.log("register object"+ register)
			
			register.registerUser(user_type,name,email,phone,password,re_password,doc_type,facebook,blog,website_url,youtube,org,designation)
			.then(result => {

			//	res.setHeader('Location', '/registerUser/'+email);
				res.status(result.status).json({status:result.status, message: result.message })
			})

			.catch(err => res.status(err.status).json({ message: err.message }));
		}
	});

	router.post('/createCampaign', (req, res) => {
          const  status = req.body.status;
		  const campaign_id = req.body.campaign_id;
		  const user_id=req.body.user_id;
		  const	campaign_title=req.body.campaign_title;
          const campaign_discription= req.body.campaign_discription;
		  const loan_amt=req.body.loan_amt;
		  const interest_rate= req.body.interest_rate;
		  const term=req.body.term;

		
			
     
		if (!status || !campaign_id || !user_id || !campaign_title  ||!campaign_discription ||!loan_amt ||!interest_rate ||!term || !status.trim() ||!campaign_id.trim()||!user_id.trim()
		|| ! campaign_title.trim() ||!campaign_discription.trim()|| !loan_amt.trim()||!interest_rate.trim()||!term.trim()) {
             //the if statement checks if any of the above paramenters are null or not..if is the it sends an error report.
			res.status(400).json({message: 'Invalid Request !'});

		} else {
			
			createCampaign.Create_Campaign(status,campaign_id,user_id,campaign_title,campaign_discription,loan_amt,interest_rate,term)
			.then(result => {

			//	res.setHeader('Location', '/registerUser/'+email);
				res.status(result.status).json({status:result.status, message: result.message })
			})

			.catch(err => res.status(err.status).json({ message: err.message }));
		}
	});
	router.post('/postbid', (req, res) => {
		//let now = new Date();
        const bid_id = req.body.bid_id;
		console.log("bid id  "+bid_id);
		//date.format(now, 'YYYY/MM/DD HH:mm:ss');
		//const bid_creation_time = req.body.bid_creation_time;
	//	console.log("bid creation time "+bid_creation_time); 
		const bid_campaign_id = req.body.bid_campaign_id;
		console.log("bid_campaign_details  "+bid_campaign_id);
		const bid_user_id = req.body.bid_user_id;
		console.log("bid_user_id "+bid_user_id);
		const bid_quote = req.body.bid_quote;

			
     
		if (!bid_id  || !bid_campaign_id || !bid_user_id || !bid_quote || !bid_id.trim() ||!bid_campaign_id.trim()||!bid_user_id.trim()|| !bid_quote.trim()) {
             //the if statement checks if any of the above paramenters are null or not..if is the it sends an error report.
			res.status(400).json({message: 'Invalid Request !'});

		} else {
			
			
			postbid.postbid(bid_id,bid_campaign_id,bid_user_id,bid_quote)
			.then(result => {

			//	res.setHeader('Location', '/registerUser/'+email);
				res.status(result.status).json({status:result.status, message: result.message })
			})

			.catch(err => res.status(err.status).json({ message: err.message }));
		}
	});
		router.get('/campaign/Campaignlist', (req,res) => {
           if (1==1) {
          
		 	fetchCampaignlist.fetch_Campaign_list({"user":"risabh","getcusers":"getcusers"})

			.then(function(result){
					res.json(result)
			} )

			.catch(err => res.status(err.status).json({ message: err.message }));

		} else {

			res.status(401).json({ message: 'cant fetch data !' });
		}
	});
	router.get('/campaign/openCampaigns', (req,res) => {
           if (1==1) {
          
		 	fetchActiveCampaignlist.fetch_Active_Campaign_list({"user":"risabh","getcusers":"getcusers"})

			.then(function(result){
				console.log("result array data"+result.campaignlist.body.campaignlist);

				    var filteredcampaign=[];
				   console.log("length of result array"+result.campaignlist.body.campaignlist.length);
	        
                 for(let i=0;i<result.campaignlist.body.campaignlist.length;i++){
	 
	            if(result.campaignlist.body.campaignlist[i].status==="active"){
     
		        filteredcampaign.push(result.campaignlist.body.campaignlist[i]);

		     console.log("filteredampaign array "+filteredcampaign);
			 strArray = JSON.stringify(filteredcampaign);
			 console.log("array in strArray"+strArray);
        return res.json({message:"active campaigns found",activeCampaigns:filteredcampaign});

	} else if (result.campaignlist.body.campaignlist[i].status !=="active") {

        return res.json({status:409,message:'campaign not found'});
		}}})

			.catch(err => res.status(err.status).json({ message: err.message }));

		} else {

			return res.status(401).json({ message: 'cant fetch data !' });
		}
	});
	router.post('/user/login',function(req,res) {
		console.log(req.body)
    res.send({ "status": "201","usertype": "lender","token": "daidsa876dsa0dslbabds987"})});


router.get('/user/logout',function(req,res) {
    res.send({status :"201",message:"user logged out successfully"})
})
router.get('/campaign/updatePayment', function(req, res) {

    console.log(req.body)

    res.send({
  "message": "bid successful","status": "201","id": "d290f1ee-6c54-4b01-90e6-d701748f0851"});
});
}