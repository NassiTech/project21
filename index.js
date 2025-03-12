import express from "express";
const app = express();
import file from "fs";

//const file = (require("fs"))

app.get("/", (req, res) => {

    res.send("Hello world")
})


app.get("/content", (req, res) => {

    res.send("<h1>Notice form the content! </h1>")


})

app.get("/api/data", (req, res) => {

    file.readFile('shopping.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error when reading file: ', err);
            return;
        }
        try {
            const jsonData = JSON.parse(data);
            console.log('JSON-Content: ', jsonData);
            //res.json(jsonData);
        } catch (parseErr) {
            console.error('Error when parsing JSON-File: ', parseErr);
        }

    });

    res.json({ fullName: "Lukas Probst", age: "28" })
})









app.listen(3000, () => {
    // call back function "concatenated"
    console.log("server is runnung on port 3000")
})