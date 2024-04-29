import express from "express"

const app = express()

const port = process.env.PORT || 4000;

app.get("/api/data", (req,res)=>{
    const data = [
        {
          "name": "Adeel Solangi",
          "language": "Sindhi",
          "id": "V59OF92YF627HFY0",
          "bio": "Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum. Maecenas quis nisi nunc. Nam tristique feugiat est vitae mollis. Maecenas quis nisi nunc.",
          "version": 6.1
        },
        {
          "name": "Afzal Ghaffar",
          "language": "Sindhi",
          "id": "ENTOCR13RSCLZ6KU",
          "bio": "Aliquam sollicitudin ante ligula, eget malesuada nibh efficitur et. Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna. Etiam congue dignissim volutpat. Vestibulum pharetra libero et velit gravida euismod.",
          "version": 1.88
        },
        {
          "name": "Aamir Solangi",
          "language": "Sindhi",
          "id": "IAKPO3R4761JDRVG",
          "bio": "Vestibulum pharetra libero et velit gravida euismod. Quisque mauris ligula, efficitur porttitor sodales ac, lacinia non ex. Fusce eu ultrices elit, vel posuere neque.",
          "version": 7.27
        },
    ]
    res.send(data)

})

app.listen(port, ()=>{
    console.log(`App is listening on ${port}`)
})