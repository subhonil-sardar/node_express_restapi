const {v4 : uuidv4} = require("uuid");
const Users = require("../models/user.model");
// Show Alll User 
exports.getAlluser = async (req, res) =>{
    try {
        const users = await Users.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
// Find User
exports.getOneuser = async (req, res) =>{
    try {
        const user = await Users.findOne({id: req.params.id});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
//Create User
exports.createUser = async (req, res) =>{
    try {
        const newUsers = new Users ({
            id : uuidv4(),
            name : req.body.name,
            age : Number(req.body.age),
        }); 
        await newUsers.save();
        res.status(201).json(newUsers);
    } catch (error) {
        res.status(500).send(error.message);
    };
};
//Update User
exports.updateUser = async (req, res) =>{
    try {
        const user = await Users.findOne({id: req.params.id});
        user.name = req.body.name;
        user.age = Number(req.body.age);
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    };
};
//Delete User
exports.deleteUser = async (req, res) =>{
    try {
        const user = await Users.deleteOne({id: req.params.id});
        res.status(200).json({message : "User is deleted"});
    } catch (error) {
        res.status(500).send(error.message);
    }
};