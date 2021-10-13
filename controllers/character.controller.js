const mongoose = require('mongoose');
const Character = require('../models/Character');

const getAllCharacters = async (req, res, next) => {
    try {
        const charactersDb = await Character.find();
        return res.status(200).json(charactersDb)
    } catch (error) {
        return next(error)
    }
};

const getCharacter = async (req, res, next) => {
    try{
        const {id} = req.params
        const characterDb = await Character.findById(id)
        if(characterDb){
            return res.status(200).json(characterDb)
        }else{
            return res.status(404).json('No character found by this id')
        }

    }catch(error){
        return next(error)
    }
}

const postNewCharacter = async (req, res, next) => {
    try {
        const newCharacter = new Character({
            alias: req.body.alias,
            actor: req.body.actor,
            age: req.body.age
        })
        const createdCharacter = await newCharacter.save();
        return res.status(201).json(createdCharacter)
    } catch (error) {
        return next(error)
    }
}

const deleteCharacter = async (req, res, next) => {
    try{
        const {id} = req.params;
        const characterDeleted = await Character.findByIdAndRemove(id)
        if(characterDeleted){
            return res.status(200).json('Character deleted')
        }else{
            return res.status(404).json('No character found by this id')
        }    
    }catch(error){
        return next(error)
    }
}

const putCharacter = async (req, res, next) => {
    try{
        const {id} = req.params;
        const characterMod = new Character({
            alias: req.body.alias,
            age: req.body.age,
            actor: req.body.actor
        });
        characterMod._id = id;
        const characterDb = await Character.findByIdAndUpdate(id, characterMod);
        return res.status(200).json(characterDb);
    }catch(error){
        return next(error)
    }
}

module.exports = {
    getAllCharacters,
    postNewCharacter,
    getCharacter,
    deleteCharacter,
    putCharacter
}