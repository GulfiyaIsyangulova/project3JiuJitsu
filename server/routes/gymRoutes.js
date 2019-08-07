const express = require('express');
const router  = express.Router();
const Gym = require('../models/Gym');
const axios = require('axios');

/* GET home page */
router.get('/', (req, res, next) => {

    const gymsName = req.body.username;
    const address= req.body.password;
  

  // this route is actualy localhost:3000/api/projects 
//  because of the preface i put on this routes file in app.js
Gym.find()
  .then((allTheGyms)=>{
    res.json(allTheGyms);
  })
  .catch((err)=>{
    res.json(err);
  })
});




// router.get('/getGymIds', (req, res, next) => {
    
//         Gym.find().then((gyms)=>{

//             console.log('------', gyms[0])

//             gyms.forEach((oneGym)=>{

            

//         // let oneGym = gyms[0]
        
//         // await gyms.forEach(async oneGym => {
//         //     oneGym.place_id = await axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${process.env.API_TOKEN}&input=${oneGym.name} ${oneGym.address}&inputtype=textquery`)
//         //     await oneGym.save();
//         // })
//         axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${process.env.API_TOKEN}&input=${oneGym.name} ${oneGym.address}&inputtype=textquery`)
//         .then((result)=>{
//             console.log('--------', result)

//             if(result.data.candidates){

//                 Gym.findByIdAndUpdate(oneGym._id, {place_id: result.data.candidates[0].place_id})
//                 .then(()=>{
//                     console.log('yay')
//                     // res.json({m: 'success'})
//                 })

//             }
router.get('/getPlacesDetails/:theid', (req, res, next) => {

  console.log(req.params)
    
   

    axios.get(`https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyCpGcRTL6DiWCcICDtehgpbBfr4DYVN__Q&fields=name,rating,formatted_phone_number,opening_hours,website,photo&placeid=` + req.params.theid)
      .then((result) => {

        console.log('--------', result.data)
        res.json(result.data)
       
      })
      .catch(err => {
    console.log(err);
  })

});
            
module.exports = router;