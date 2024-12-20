const router=require('express').Router()
const registerValidation=require('../MIDDLEWARE/registerValidation')
const registerUser = require('../Controllers/registerController'); // Use the renamed function
const deleteController=require('../CONTROLLERS/deleteController')


// const  registerController=require('../CONTROLLERS/registerController')

const  renderController=require('../CONTROLLERS/renderController')




// router.post('/register',registerValidation, registerController)
router.post('/register', registerValidation, registerUser);  // Use registerUser here


router.get('/render',renderController)
router.delete('/delete/:id', deleteController);



module.exports=router;