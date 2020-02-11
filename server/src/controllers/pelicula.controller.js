const pelicCtrl = {};

const Peli = require('../models/Pelicula');

pelicCtrl.getPelis = async (req, res) => {
    const pelis = await Peli.find();
    res.json(pelis);
};

pelicCtrl.createPeli = async (req, res) => {
   const { titulo, sinopsis, genero, valor } =  req.body;
   const newPeli =  new Peli ({
       titulo: titulo,
       sinopsis: sinopsis,
       genero: genero,
       valor: valor
   });
  await newPeli.save();
    res.json('Creado');
};

pelicCtrl.getPeli = async (req, res) => {
    const peli = await Peli.findById(req.params.id);
    res.json(peli);
};

pelicCtrl.updatePeli = async (req, res) => {
    const { titulo, sinopsis, genero, valor } = req.body;
    await Peli.findOneAndUpdate(req.params.id, {
        titulo : titulo,
        sinopsis: sinopsis,
        genero : genero,
        valor : valor
    });
    res.json({message: 'UPDATE - PELI RUTA'})
};

pelicCtrl.deletePeli = async (req, res) => {
    await Peli.findOneAndDelete(req.params.id);
    res.json({message: 'DELETE - PELI RUTA'});
}


module.exports = pelicCtrl;