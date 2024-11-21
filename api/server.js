const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./db');

const app = express();
app.use(bodyParser.json());

// Маршрути
app.use('/api/auth', require('./routes/auth'));
app.use('/api/pharmacies', require('./routes/pharmacies'));
app.use('/api/goods', require('./routes/goods'));

// Підключення до бази
sequelize.sync({ force: true }).then(() => {
    console.log('База даних синхронізована');
    app.listen(3000, () => {
        console.log('Сервер працює на порту 3000');
    });
});