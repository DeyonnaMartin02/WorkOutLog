
const router = require('express').Router();

const User = require('../db').import('../models/user');

const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');



router.post('/create', function (req, res) {
   
    User.create({
        // 1: Left side of the object needs to match the column/object title specified in our model
        // 2: Right side is the request(req), body where data is held, user(property of body), and email/password(properties of user)
            // req.body is middleware provided by Express to append two properties or key-value pairs to it
        // 3: Add bcrypt hashSync method to take in the string value of what to make secure and the number of times we want it salted (13x's)
        //(1)         (2)
        email: req.body.user.email,
        //  (1)        (3)                 (2)
        password: bcrypt.hashSync(req.body.user.password, 13)
    })
        
        .then(
            
            function createSuccess(user) {
                
                let token = jwt.sign( {id: user.id}, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24} );

                
                res.json({
                   
                    user: user,
                    message: 'User successfully created!',
                    sessionToken: token
                })
            }
        )

        .catch(err => res.status(500).json({ error: err }))
});


/*  -------  USER LOGIN  ---------  */

router.post('/login', function(req, res) {
    
    User.findOne({ 
       
        where: {
            
            email : req.body.user.email
        }
    })
   
    .then(function loginSuccess(user) {
        
        if (user) {
           
            bcrypt.compare(req.body.user.password, user.password, function(err, matches) {
               
                if (matches) {
                   
                    let token = jwt.sign( {id: user.id}, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24} );

                   
                    res.status(200).json({
                  
                    user: user,
                   
                    message: 'User successfully logged in!',
                   
                    sessionToken: token
                    })
               
                } else {
                
                    res.status(502).send({ error: 'Login failed'});
                }
            })

        } else {
            
            res.status(500).json({ error: 'User does not exist.' })
        }
    })
  
    .catch(err => res.status(500).json({ error: err }))
});

es
module.exports = router;