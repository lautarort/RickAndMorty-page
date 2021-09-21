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
    

        let apiCharacters = (await axios.get("https://rickandmortyapi.com/api/character")).data.results
        let dbCharacters= await Characters.findAll({include: Episodes})
        
        return Promise.all([
            apiCharacters,
            dbCharacters
        ]).then(resultados => {
            var apiCharacters = resultados[0].data.results
            var dbCharacters = resultados[1]
    
    
    
            apiCharacters = apiCharacters.map((character) => {
                return {
                    id: character.id,
                    name: character.name,
                    image: character.image
                }
            })
            dbCharacters = dbCharacters.map((character) =>{
                return {
                    id: character.id,
                    name: character.name,
                    image: character.image
                }
            })
            var allCharacters = apiCharacters.concat(dbCharacters)
            res.send(allCharacters)
        })
        .catch(error => next(error))
   
}




async function getCharacterById(){

}

module.exports={
   addCharacter,
   getCharacters, 
   getCharacterById
}

