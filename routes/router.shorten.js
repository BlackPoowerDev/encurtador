import express from 'express'
const router = express.Router()

import createShorten from '../controllers/create.shorten.js'
import getShorten from '../controllers/get.shorten.js'

router.post('/api/shorten', async (req, res) =>{

    const url = req.body.url

    const result = await createShorten(url)

    console.log(result);

    return res.status(200).json({
        ...result
    })
})


router.get('/:id', async (req, res) =>{

    const id = req.params.id
    const result = await getShorten(id)
    res.redirect(result.url)
    
})
export default router

