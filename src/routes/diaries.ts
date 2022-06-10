import express from 'express'

const router = express.Router();

router.get('/', (_req, res) => { 
    res.send('entrada de dats del diario')
})

router.post('/', (_req, res) => {
    res.send('guradar diario')
})
export default router