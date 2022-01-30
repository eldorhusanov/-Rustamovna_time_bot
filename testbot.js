const Telegraf = require('telegraf');
let token='5102571378:AAGAohabqhb3PWqCoaJlNxYk7T3t7vk75Wo';
const bot = new Telegraf(token, {polling: true});
bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'hello there! Welcome to my new telegram bot.', {
    })
})