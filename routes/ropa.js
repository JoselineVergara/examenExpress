var express = require('express');
var router = express.Router();
const { ropa } = require('../models');
const { Op, where } = require('sequelize'); // Importa Sequelize para usar operadores


router.get('/buscarPorId/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const ropaEncontrada = await ropa.findByPk(id); // Busca por clave primaria
        if (ropaEncontrada) {
            res.status(200).json(ropaEncontrada);
        } else {
            res.status(404).send('Ropa no encontrada');
        }
    } catch (error) {
        console.error('Error al buscar la ropa por ID:', error);
        res.status(500).send('Error al buscar la ropa');
    }
});

router.get('/buscarPorRango', async (req, res) => {
    const { precioMin, precioMax } = req.query; // Obtén los valores de los parámetros de consulta
    try {
        // Valida que los parámetros estén presentes
        if (!precioMin || !precioMax) {
            return res.status(400).send('Debe proporcionar precioMin y precioMax');
        }

        // Busca la ropa en el rango de precios
        const ropaEnRango = await ropa.findAll({
            where: {
                precio: {
                    [Op.between]: [parseFloat(precioMin), parseFloat(precioMax)], // Busca entre el rango de precios
                },
            },
        });

        // Devuelve la ropa encontrada
        if (ropaEnRango.length > 0) {
            res.status(200).json(ropaEnRango);
        } else {
            res.status(404).send('No se encontró ropa en el rango de precios especificado');
        }
    } catch (error) {
        console.error('Error al buscar ropa por rango de precios:', error);
        res.status(500).send('Error al buscar ropa');
    }
});

router.get('/todos', async (req, res) => {
    try {
        const todaLaRopa = await ropa.findAll(); // Obtiene todos los registros de la tabla ropa
        res.status(200).json(todaLaRopa); // Devuelve la ropa en formato JSON
    } catch (error) {
        console.error('Error al obtener toda la ropa:', error);
        res.status(500).send('Error al obtener la ropa');
    }
});

module.exports=router;
