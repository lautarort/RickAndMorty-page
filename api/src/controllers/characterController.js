const { Characters, Episodes, Op} = require("../db");
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");

const addCharacter = (req,res, next)=>{
    const { name, status, gender, image, location, episode } = req.body;
    let character= {
        name,
        status,
        gender,
        image,
        location
    }

    Characters.create(character)
    .then(character=>{
        character.addEpisodes(episode)
      res.json({...character, episode})
    })
    .catch((error)=> next(error))
    
   
}

async function getCharacters(req, res, next){
    try {

        let apiCharacters = (await axios.get("https://rickandmortyapi.com/api/character")).data.results
        let dbCharacters= await Characters.findAll({include: Episodes})
        let allChars= dbCharacters.concat(apiCharacters)




        res.send(allChars)

    } catch (error) {
        next(error)
    }
}




async function getCharacterById(){

}

module.exports={
   addCharacter,
   getCharacters, 
   getCharacterById
}

