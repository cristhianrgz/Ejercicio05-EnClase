var mongoose = require('mongoose');
var schema = require('./schema');

//conección
mongoose.connect('mongodb://localhost:27017/test');

//Parametros del modelo - (nombre del modelo, schema, nombre de colección)
var User = mongoose.model('User2',schema,'users2'); //modelo

//Index.js
var user = new User({
    name: 'Cristhian Rodriguez',
    email: 'crurrodriguezro@ittepic.edu.mx'
});

user.save(function(error)
{
    if(error)
    {
        console.log(error);
        process.exit(1);
    }
    console.log("Saved!!");
    process.exit(1);
});