const express = require('express');
const db = require('./models');

const app = express();

app.use(express.urlencoded({extended: false}));

app.get('/', function(req, res){
    res.send("Working !!!");
});

// Read all record route
app.get('/champions', function(req, res){
    db.champion.findAll().then(function(champions){
        res.json(champions);
    })
})

// Read one record route
app.get('/champions/:id', function(req, res){
    db.champion.findOne({
        where: {id: parseInt(req.params.id)}
    }).then(function(champion){
        res.json(champion);
    })
})
// Make your model
app.post('/champions', function(req, res){
    db.champion.create({
        champName: req.body.champName,
        lane: req.body.lane,
        role: req.body.role,
        tier: parseInt(req.body.tier)
    }).then(function(data){
        console.log(data);
        res.json(data);
    })
});
// Run the migrations

// Update one record route
app.put('/champions/:id', function(req, res){
    db.champion.update({
        champName: req.body.champName,
        lane: req.body.lane,
        role: req.body.role,
        tier: parseInt(req.body.tier)
    }, {
        where: {id: parseInt(req.params.id)}
    }).then(function(data) {
        res.json(data);
    });
});

// Delete one record route
app.delete('/champions/:id', function(req, res){
    db.champion.destroy({
        where: {id: parseInt(req.params.id)}
    }).then(function(data){
        res.json(data);
    });
});


app.listen(3000, function(){
    console.log("Listening on 3000 🤓");
});