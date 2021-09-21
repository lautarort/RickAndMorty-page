const { Router } = require('express');
const characters = require('./character')
const episodes = require('./episode')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/characters", characters )
router.use("/episodes", episodes )

module.exports = router;
