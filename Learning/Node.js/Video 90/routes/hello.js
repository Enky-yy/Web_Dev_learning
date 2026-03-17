const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.get('/hi', (req, res) => {
  res.send('hi')
})

router.get('/bye-us', (req, res) => {
  res.send('bye')
})

module.exports = router