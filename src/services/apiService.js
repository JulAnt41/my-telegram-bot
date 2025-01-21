//src/services/apiService.js Этот каталог предназначен для хранения логики, которая может взаимодействовать с внешними сервисами или данными. Например, функция для получения данных:

const fetch = require('node-fetch');

const fetchData = async (url) => {
    const response = await fetch(url);
    return response.json(); // Получаем данные в формате JSON
};

module.exports = { fetchData };