const { Schema, model } =  require('mongoose');

const peliSchema =  new Schema ({
    titulo: {
        type: String,
        required: true,
        unique : true
    }, 
    sinopsis : {
        type: String,
        required: true
    },
    genero : {
        type: String
    }, 
    valor : { 
        type: String,
        required : true
    }
},{
    timestamps: true
});

module.exports =  model('Pelicula', peliSchema);