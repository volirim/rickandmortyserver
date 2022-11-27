const writeFile = require("./fileWriter.js");
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, ()=>{
console.log(`App is listening on port ${port}`);
});


(async () => {
    await writeFile({
        name: "vasya",
        username: "abobka",
        password: "12345",
        email: "vasya@gmail.com",
        age: "23"

    });
})();