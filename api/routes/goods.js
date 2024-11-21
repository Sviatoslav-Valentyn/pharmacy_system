const express = require('express');
const Good = require('../models/Good');
const Pharmacy = require('../models/Pharmacy');

const router = express.Router();

// Отримати всі товари
router.get('/', async (req, res) => {
    try {
        const goods = await Good.findAll();
        res.json(goods);
    } catch (error) {
        res.status(500).json({ error: 'Помилка отримання товарів' });
    }
});

// Отримати товари для конкретної аптеки
router.get('/pharmacy/:pharmacyId', async (req, res) => {
    const { pharmacyId } = req.params;
    try {
        const goods = await Good.findAll({ where: { PharmacyId: pharmacyId } });
        res.json(goods);
    } catch (error) {
        res.status(500).json({ error: 'Помилка отримання товарів аптеки' });
    }
});

// Додати новий товар
router.post('/', async (req, res) => {
    const { name, description, price, pharmacyId } = req.body;
    try {
        const pharmacy = await Pharmacy.findByPk(pharmacyId);
        if (!pharmacy) {
            return res.status(404).json({ error: 'Аптека не знайдена' });
        }

        const good = await Good.create({
            name,
            description,
            price,
            PharmacyId: pharmacyId,
        });
        res.json(good);
    } catch (error) {
        res.status(500).json({ error: 'Помилка створення товару' });
    }
});

// Оновити товар
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;
    try {
        const good = await Good.findByPk(id);
        if (!good) {
            return res.status(404).json({ error: 'Товар не знайдений' });
        }

        await good.update({ name, description, price });
        res.json(good);
    } catch (error) {
        res.status(500).json({ error: 'Помилка оновлення товару' });
    }
});

// Видалити товар
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const good = await Good.findByPk(id);
        if (!good) {
            return res.status(404).json({ error: 'Товар не знайдений' });
        }

        await good.destroy();
        res.json({ message: 'Товар видалено' });
    } catch (error) {
        res.status(500).json({ error: 'Помилка видалення товару' });
    }
});

module.exports = router;
