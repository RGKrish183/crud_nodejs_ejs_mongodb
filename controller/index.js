const connect = require('../config/connection');
const ObjectID = require('mongodb').ObjectID;

exports.get = function (req, res, next) {

    let resulter = new Object();
    try {
        let getusers = new Promise((resolve, reject) => {
            connect.dbconnect(async (connecter) => {
                const collection = connecter.collection('user');
                // Find some documents
                collection.find({}).toArray(function (err, docs) {
                    if (err) {
                        console.log(err);
                        reject(err);
                    } else {
                        console.log(docs);
                        resolve(docs);
                    }
                });
            });
        });

        getusers.then((userdata) => {
            resulter.status = true;
            resulter.response = `sucess`;
            resulter.data = userdata;
            resulter.message = `User data listed succesfully!`;
            res.status(200).send(resulter);
        }).catch((error) => {
            resulter.status = false;
            resulter.response = `failed`;
            resulter.data = new Array();
            resulter.message = `User data somthing went wrong, Kindly try again!`;
            res.status(500).send(resulter);
        });
    } catch (e) {
        console.log(e);
        resulter.status = false;
        resulter.response = `failed`;
        resulter.data = new Array();
        resulter.message = `User data somthing went wrong, Kindly try again!`;
        res.status(500).send(resulter);
    }
};

exports.insert = function (req, res, next) {

    let resulter = new Object();
    try {
        let insertusers = new Promise((resolve, reject) => {
            connect.dbconnect(async (connecter) => {

                let userdata = new Object();
                userdata.username = req.body.username;
                userdata.password = req.body.password;
                userdata.first_name = req.body.first_name;
                userdata.last_name = req.body.last_name;
                userdata.email = req.body.email;

                const collection = connecter.collection('user');
                // Find some documents
                collection.insertOne(userdata, function (err, docs) {
                    if (err) {
                        console.log(err);
                        reject(err);
                    } else {
                        console.log(docs);
                        resolve(docs);
                    }
                });
            });
        });

        insertusers.then((userdata) => {
            resulter.status = true;
            resulter.response = `sucess`;
            resulter.data = userdata;
            resulter.message = `User data insert succesfully!`;
            res.status(200).send(resulter);
        }).catch((error) => {
            resulter.status = false;
            resulter.response = `failed`;
            resulter.data = new Array();
            resulter.message = `User data somthing went wrong, Kindly try again!`;
            res.status(500).send(resulter);
        });
    } catch (e) {
        console.log(e);
        resulter.status = false;
        resulter.response = `failed`;
        resulter.data = new Array();
        resulter.message = `User data somthing went wrong, Kindly try again!`;
        res.status(500).send(resulter);
    }
};


exports.update = function (req, res, next) {

    let resulter = new Object();
    try {
        let updateusers = new Promise((resolve, reject) => {
            connect.dbconnect(async (connecter) => {

                let userdata = new Object();
                userdata.username = req.body.username;
                userdata.password = req.body.password;
                userdata.first_name = req.body.first_name;
                userdata.last_name = req.body.last_name;
                userdata.email = req.body.email;
                // console.log(userdata);

                let usersid = ObjectID(req.params.id);
                const collection = connecter.collection('user');
                collection.updateOne({ "_id" : usersid }, { $set: userdata }, async (e, d)=>{
                    (e) ? reject(e) : resolve(d);
                });
            });
        });

        updateusers.then((userdata) => {
            resulter.status = true;
            resulter.response = `sucess`;
            resulter.data = userdata;
            resulter.message = `User data updated succesfully!`;
            res.status(200).send(resulter);
        }).catch((error) => {
            resulter.status = false;
            resulter.response = `failed`;
            resulter.data = new Array();
            resulter.message = `User data somthing went wrong, Kindly try again!`;
            res.status(500).send(resulter);
        });
    } catch (e) {
        console.log(e);
        resulter.status = false;
        resulter.response = `failed`;
        resulter.data = new Array();
        resulter.message = `User data somthing went wrong, Kindly try again!`;
        res.status(500).send(resulter);
    }
};


exports.delete = function (req, res, next) {

    let resulter = new Object();
    try {
        let updateusers = new Promise((resolve, reject) => {
            connect.dbconnect(async (connecter) => {
                let usersid = ObjectID(req.params.id);
                const collection = connecter.collection('user');
                collection.deleteOne({ "_id" : usersid }, async (e, d)=>{
                    (e) ? reject(e) : resolve(d);
                });
            });
        });

        updateusers.then((userdata) => {
            resulter.status = true;
            resulter.response = `sucess`;
            resulter.data = userdata;
            resulter.message = `User data delete succesfully!`;
            res.status(200).send(resulter);
        }).catch((error) => {
            resulter.status = false;
            resulter.response = `failed`;
            resulter.data = new Array();
            resulter.message = `User data somthing went wrong, Kindly try again!`;
            res.status(500).send(resulter);
        });
    } catch (e) {
        console.log(e);
        resulter.status = false;
        resulter.response = `failed`;
        resulter.data = new Array();
        resulter.message = `User data somthing went wrong, Kindly try again!`;
        res.status(500).send(resulter);
    }
};