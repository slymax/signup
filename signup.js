const app = require("express")();
require("console-stamp")(console);
const valid = require("validator");
app.get("/signup/:topic/:mail", (request, response) => {
    if (valid.isEmail(request.params.mail)) {
        console.log(`${request.params.topic}/${request.params.mail}`);
        response.sendStatus(200);
    } else response.sendStatus(400);
}).listen(8002);
