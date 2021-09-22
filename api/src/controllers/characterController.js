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
        let {name, order, page} = req.query

        let apiCharacters
        let dbCharacters
        let allChars=[]
        page = page ? page : 1
        const charXPage = 5;
        //#region NAME
        if(name && name !== ""){
            apiCharacters = (await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`)).data.results
            dbCharacters = await Characters.findAll({
                where: {
                    name: {
                        [Op.iLike] : `%${name}%`
                    }
                }
            })
            allChars = dbCharacters.concat(apiCharacters)
        }
        //#endregion
        //#region ORDER

        if(order === "asc" || !order){
            allChars = allChars.sort((a,b) =>{
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
            })
        }else{
            allChars = allChars.sort((a,b) =>{
                return b.name.toLowerCase().localeCompare(a.name.toLowerCase())
            })
        }
        //#endregion

        //#region PAGE
            let result = allChars.slice((charXPage * (page -  1)) , (charXPage * (page -  1)) + charXPage )
        //#endregion
        
        return res.send({
            result: result, 
            count: allChars.length
        })

        

    } catch (error) {
        next(error)
    }

}




async function getCharacterById(req, res, next){
    try {
        const {id} = req.params
        let character;
        if(isNaN(id)){
            character = await Characters.findByPk(id)
        } else {
            //API
            character = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            character = character.data
        }
        return res.json(character)
    } catch(error){
        next(error)
    }

}

module.exports={
   addCharacter,
   getCharacters, 
   getCharacterById
}

