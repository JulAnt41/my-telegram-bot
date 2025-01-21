const { InlineKeyboard } = require('grammy');
const { determineWinner, askToPlayAgain } = require('../services/gameLogic');

module.exports = (bot) => {
    bot.command('play', (ctx) => {
        const keyboard = new InlineKeyboard()
            .text('Камень', 'rock')
            .row()
            .text('Ножницы', 'scissors')
            .row()
            .text('Бумага', 'paper');

        ctx.reply('Сделайте ставку:', { reply_markup: keyboard });
    });

    bot.callbackQuery('rock', async (ctx) => {
        await playGame(ctx, 'камень');
    });

    bot.callbackQuery('scissors', async (ctx) => {
        await playGame(ctx, 'ножницы');
    });

    bot.callbackQuery('paper', async (ctx) => {
        await playGame(ctx, 'бумага');
    });

    async function playGame(ctx, userChoice) {
        const options = ['камень', 'ножницы', 'бумага'];
        const botChoice = options[Math.floor(Math.random() * options.length)];
        const resultText = determineWinner(userChoice, botChoice);

        await ctx.reply(resultText);
        await askToPlayAgain(ctx);
    }
};
