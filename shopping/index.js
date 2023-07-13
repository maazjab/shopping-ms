const express = require("express")



const app = express();



app.use("/", (req, res, next) => {
   return res.status(200).json({message: "Hello from Shopping"})
})

app.listen(8003, () => {
    console.log("Shopping is Listenning to port 8003")
})