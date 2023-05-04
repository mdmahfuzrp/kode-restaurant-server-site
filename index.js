const express = require('express');
const app = express();
const port = process.env.PORT || 5500;
const chefsData = require('./data/kode-chefs.json');
const recipe = require('./data/recipe.json')
const cors = require('cors')


app.use(cors());

app.get('/', (req, res)=>{
    res.send('Site is now running')
})
app.get('/all-chefs', (req, res)=>{
    res.send(chefsData);
})
app.get('/all-chefs/recipe', (req, res)=>{
    res.send((recipe));
})
app.listen(port, ()=>{
    console.log('site running in port: ', port);
})