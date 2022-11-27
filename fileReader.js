const { json } = require("body-parser");
const fileSystem = require("fs");

module.exports = async () => {
    console.log('asd');
    const users = await fileSystem.readFile("users.json", json);
    console.log("users", users);
    return JSON.parse(users);
};
