const { Router } =  require('express');
const router = Router();

const { getPelis, createPeli, getPeli, updatePeli, deletePeli } = require('../controllers/pelicula.controller');

router.route('/')
    .get(getPelis)
    .post(createPeli);

router.route('/:id')
    .get(getPeli)
    .put(updatePeli)
    .delete(deletePeli);

module.exports = router;