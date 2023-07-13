const express = require("express")


const app = express();


app.use("/", (req, res, next) => {
   return res.status(200).json({message: "Hello from Customer"})
})

app.listen(8001, () => {
    console.log("Customer is Listenning to port 8001")
})