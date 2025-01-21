const { Bot } = require('grammy');

const startCommand = require('./commands/start');
const helpCommand = require('./commands/help');
const playCommand = require('./commands/play');
const errorHandler = require('./middlewares/errorHandler');
const config = require('./config/botConfig')

const bot = new Bot(config.token);

startCommand(bot);
helpCommand(bot);
playCommand(bot);

bot.use(errorHandler);

bot.on('callback_query:data', (ctx) => {
    const data = ctx.callbackQuery.data;

    if (data === 'yes') {
        ctx.reply('Чтобы начать игру, напишите команду /play!');
    } else if (data === 'no') {
        ctx.reply('Спасибо за игру! Если захотите сыграть ещё раз, напишите команду /play.');
    }
});


bot.start();
console.log('Бот запущен.');