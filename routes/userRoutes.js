const express = require("express");
const bcrypt = require("bcrypt");
const users = require("./fileReader.js")
const writeFile = require("./fileWriter.js")

const router = express.Router();

router.post("/sign-up", async (req, res) => {
    const { email, password, username, name, age } = req.body;
    
    let userExists = await users().findIndex(el =>  el.email === email);
    
    if (userExists === -1) {
    res.status(401).json({ message: "Email is already in use"});
    return;
    }
    
    const saltRounds = 10;
    
    bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) throw new Error("Internal Server Error");
        
        let user = {
        email,
        password: hash,
        name,
        age,
        username
        };
        
        const writtenFile = await writeFile(user);
        if(writtenFile) {
            res.json({message: "Success"})
        } else {
            res.status(401).json({message: 'something went wrong'})
        }
    })
})