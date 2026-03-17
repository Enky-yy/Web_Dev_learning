const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const hello=  require('./routes/hello')
// app.use(express.static('public'))

app.use('/hello',hello)

//  first middleware
// app.use((req,res,next)=>{
//     console.log(req.headers)
//     fs.appendFileSync('log.txt',`${Date.now()} is a ${req.method} \n`)
//     console.log(`${Date.now()} is a ${req.method}`)
//     res.send('Hacked')
//     req.method = '/contact'
//     // next() // next is used to contiune other wise it will get stucked in this function
// })
// //  second middleware
// app.use((req,res,next)=>{
//     console.log('m2')
//     // res.send('Hacked2')
//     next()
// })
// //  third
// app.use((req,res,next)=>{
//     console.log('m3')
//     next()
// })

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/contact', (req, res) => {
  res.send('Hello contact')
})

app.get('/about-us', (req, res) => {
  res.send('Hello about us')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})