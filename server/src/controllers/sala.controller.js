const salaCtrl = {};

const Sala = require('../models/Sala');


salaCtrl.getSala = async (req, res) => {
    const salas = await Sala.find();
    res.json(salas);
};

salaCtrl.creatSala = async (req, res) => {
    const { salaNum, horario, pelicula  } = req.body;
    const newSala = new Sala ({
        salaNum: salaNum,
        horario : horario,
        pelicula : pelicula
    });
    await newSala.save(),
    res.json('Creado');
};


salaCtrl.updateSala = async (req, res) => {
    const { salaNum, horario, pelicula } = req.body;
    await Sala.findOneAndUpdate(req.params.id, {    
        salaNum : salaNum,
        horario : horario,
        pelicula : pelicula
        });
    res.json({message: 'Actualizado'});
};

salaCtrl.deleteSala = async (req, res) =>  {
    await Sala.findOneAndDelete(req.params.id);
    res.json({message: 'Delete - SALA RUTA'});

};
module.exports = salaCtrl; 