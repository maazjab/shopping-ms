const express = require("express")
const cors = require("cors")


const app = express();
const proxy = require("express")

app.use(cors())
app.use(express.json())

app.use("/customer", proxy("http://localhost:8001"))
app.use("/product", proxy("http://localhost:8002"))
app.use("/shopping", proxy("http://localhost:8003"))


app.listen(8000, () => {
    console.log("Gateway is Listenning to port 8000")
})