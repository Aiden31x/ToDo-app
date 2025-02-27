//basic boilerplate
//with express.json() middleware

const { createTodo, updateTodo } = require("./types");


const express = require(express);
const app = express();

app.use(express.json()); //allows to parse a json body

app.post("/todo", function (req, res) {

    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;

    }


})

app.get("/todos", function (req, res) {

})

app.put("/completed", function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs.",

        })
    }

})

