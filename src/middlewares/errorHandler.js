//// src/middlewares/errorHandler.js Здесь будут храниться промежуточные функции, которые выполняются перед основной логикой команд. Например, обработка ошибок:

const errorHandler = async (ctx, next) => {
    try {
        await next(); // Пытаемся выполнить следующую команду
    } catch (error) {
        console.error(error);
        await ctx.reply('Что-то пошло не так, попробуйте снова позже.');
    }
};

module.exports = errorHandler;