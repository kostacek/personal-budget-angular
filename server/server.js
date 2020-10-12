// Budget API

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());//should be modified for production

const budget = {
    myBudget:[
    {
    title: 'Eat out',
    budget: 30
},
{
    title: 'Rent',
    budget: 350
},
{
    title: 'Grocery',
    budget: 90
},
{
    title: 'Cable',
    budget: 100
},
{
    title: 'Internet',
    budget: 200
},
{
    title: 'Travel',
    budget: 150
},
{
    title: 'Childcare',
    budget: 1200
},

    ]
};

app.get('/budget',(req, res)=>{
    res.json(budget);
});

app.listen(port, () => {
    console.log(`API Example app listening at http://localhost:${port}`)
});