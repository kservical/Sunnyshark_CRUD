//import module and template
var router = require('express').Router();
var automates = require('./../models/automates')

// Getting all data in database
router.get("/", (req, res) => {
	automates.find({}).then(automates=>{
		res.render('automates/index.html', {automates: automates});
	})
});

//Add a new automates in database then redirect on main page 
router.post("/add", (req, res) =>{
	if(req.body.name != ""){

		var myData = new automates()
		myData.save()
			.then(automates => {
	            automates.name = req.body.name
	            automates.model = req.body.model
	            automates.brand = req.body.brand
	            automates.pool = req.body.pool
	            automates.physical_area = req.body.physical_area
	            automates.configuration = req.body.configuration
	            return automates.save()
	        })
	        .then(()=>{
	        	res.redirect('/');
	        })
	        .catch(err => {
	            res.status(400).send("Unable to save an object into database <a href='/'>Back</a>");
			})
	}
	else{
		res.status(400).send("Unable to save an object into database : because there are any name <a href='/'>Back</a>");
	}
})

// Delete an automates by Id.
router.post("/remove",(req,res)=>{
	automates.findByIdAndDelete(req.body.id)
		.then(()=>{
			res.redirect('/')
		})
		.catch(err => {
            res.status(400).send("Unable to delete an object into database <a href='/'>Back</a>");
		})
})

router.post("/update",(req,res)=>{
  automates.findById(req.body.id, (err,automates)=>{
	  if(err){
	  	res.status(400).send("Invalid ID : can't found into database : <a href='/'>Back</a>");
	  }
	  else{
		  automates.save()
		  .then(automates =>{
		  	if(req.body.name !=""){automates.name = req.body.name} 
			if(req.body.model !=""){automates.model = req.body.model} 
			if(req.body.brand !=""){automates.brand = req.body.brand} 
			if(req.body.pool !=""){automates.pool = req.body.pool}
			if(req.body.physical_area !=""){automates.physical_area = req.body.physical_area} 
			if(req.body.configuration !=""){automates.configuration = req.body.configuration} 
		  	return automates.save()
		  	})
		  .then(()=>{
		  	res.redirect('/');
		  })
		  .catch(err =>{
		  res.status(400).send("Unable to update an object into database : <a href='/'>Back</a>");
		  })
	 	}
	})
})

module.exports = router;
