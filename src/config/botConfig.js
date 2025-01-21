//src/config/botConfig.js Здесь будут настройки вашего бота, такие как токен. Это позволяет легко изменять конфигурации, не внося изменения в код.

require('dotenv').config({path: '../.env'});

 const config = {
    token: process.env.TELEGRAM_BOT_TOKEN, // Получаем токен из переменных окружения
};

module.exports = config