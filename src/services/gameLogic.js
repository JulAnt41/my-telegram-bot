const { InlineKeyboard } = require('grammy');

function determineWinner(userChoice, botChoice) {
    if (userChoice === botChoice) {
        return `Ничья! Вы оба выбрали ${botChoice}.`;
    } else if (
        (userChoice === 'камень' && botChoice === 'ножницы') ||
        (userChoice === 'ножницы' && botChoice === 'бумага') ||
        (userChoice === 'бумага' && botChoice === 'камень')
    ) {
        return `Вы выбрали ${userChoice}, а бот выбрал ${botChoice}. Вы победили! 🎉`;
    } else {
        return `Вы выбрали ${userChoice}, а бот выбрал ${botChoice}. Вы проиграли. 😢`;
    }
}

async function askToPlayAgain(ctx) {
    const keyboard = new InlineKeyboard()
        .text('Да', 'yes')
        .row()
        .text('Нет', 'no');

    await ctx.reply('Хотите сыграть еще раз?', { reply_markup: keyboard });
}

module.exports = { determineWinner, askToPlayAgain };
