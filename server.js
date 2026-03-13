import express from 'express'

import shorten from './routes/router.shorten.js'
const app = express()

app.use(express.json())
app.use('/', shorten)

const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log(`Servidor ativo na porta: ${PORT}`);
})