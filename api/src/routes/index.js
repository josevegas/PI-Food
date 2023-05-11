const { Router } = require('express');
const getRecipeById=require('../controllers/getRecipeById.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/recipes/:idRecipe',getRecipeById);

module.exports = router;
