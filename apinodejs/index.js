//llamar a express
const express = require('express')
const isodd = require('is-odd')

const app = express();
const port = 3000;

app.get('/',(req,res)=>{
  res.send('hola mundo - mi server en express')
})

app.get('/nuevaruta',(req,res)=>{
  res.send('hola soy una nueva ruta')
})

app.get('/nuevaruta2',(req,res)=>{

  res.json({
    name:'producto 1',
    precio : 1000
  })
})


app.get('/productos',(req,res)=>{

  res.json([{
    name:'producto 1',
    precio : 1000
  },
  {
    name: 'producto 2',
    precio : 2000
  }
])
})



app.get('/productos/:id',(req,res)=>{

  // const id = req.params.id
  const {id} = req.params

  res.json({
    id,
    name:'producto 1',
    precio : 1000
  })
})

app.get('/categoria/:catid/producto/:productoid', (req,res)=>{
  const{catid, productoid }= req.params;

  res.json({
    catid,
    productoid
  })
})
