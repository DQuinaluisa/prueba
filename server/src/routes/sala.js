const { Router } =  require('express');
const router = Router();

const { getSala, creatSala, updateSala, deleteSala } =  require('../controllers/sala.controller');

router.route('/')
    .get(getSala)
    .post(creatSala);

router.route('/:id')
    .put(updateSala)
    .delete(deleteSala);

module.exports = router;