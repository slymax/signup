const app = require("express")();
require("console-stamp")(console);
const validator = require("validator");
app.get("/signup/:topic/:email", (request, response) => {
    if (validator.isEmail(request.params.email)) {
        console.log(`${request.params.topic}/${request.params.email}`);
        response.sendStatus(200);
    } else {
        response.sendStatus(400);
    }
}).listen(8002);
