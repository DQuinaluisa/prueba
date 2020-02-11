const { Schema, model } =  require('mongoose');

const salaSchema =  new Schema ({
    salaNum: {
        type: String,
        required: true,
        unique: true
    },
    horario : {
        type: String,
        required : true
    }, 
    pelicula : String,
    
}, {
    timestamps: true
});

module.exports =  model('Sala', salaSchema);