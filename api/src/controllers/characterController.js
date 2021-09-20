const { Characters, Episodes, Op} = require("../db");
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");

const addCharacter = (req,res)=>{
    const { name, status, gender, image, location } = req.body;

    return res.json({ name, status, gender, image, location })
}


module.exports={
   addCharacter
}