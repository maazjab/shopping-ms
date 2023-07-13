const express = require("express")



const app = express();



app.use("/", (req, res, next) => {
   return res.status(200).json({message: "Hello from Product"})
})

app.listen(8002, () => {
    console.log("Product is Listenning to port 8002")
})