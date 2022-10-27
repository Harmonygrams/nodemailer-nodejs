const router = require('express').Router() 
const contactForm = require('../utils/contactForm')
router.post('/reachout', contactForm)
module.exports = router