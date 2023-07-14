const express = require('express');
const router = express.Router();
// const uuid=require('uuid');
const { v4: uuidv4 } = require('uuid');
const Users=require('../../Users');
// to get the all users
router.get('/',(req,res)=>{
    res.json(Users);

})

//to the user by id:
router.get('/:id', (req,res) => {
    const found = Users.some(user => user.id === parseInt(req.params.id));
    if (found){
        res.json(Users.filter(user=> user.id === parseInt(req.params.id)));

    }else{
        res.sendStatus(400);
    }
});

// Create  newUser

router.post('/', (req,res) =>{
    const newUser={
        id: uuidv4(),
        name: req.body.name,
        email: req.body.email,
        address: req.body.address
    }

    if (!newUser.name || !newUser.email ||!newUser.address) {
        return res.sendStatus(400)
    }
    Users.push(newUser)
    res.json(Users)
})

module.exports = router;

