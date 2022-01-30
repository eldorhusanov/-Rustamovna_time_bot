const telegramBot=require('node-telegram-bot-api');
let token='5272921364:AAEXur-6rRhaG96t6VZDrgkB208IUsrOwJo';
const bot=new telegramBot(token, {polling: true});
bot.on('message', (event)=>{
   console.log(event);
   let msg=event.text;
   let chatid=event.chat.id;
   let fname=event.from.first_name;
   let lastname=event.from.username;
    if(msg ==='/start'){
   bot.sendMessage(chatid, 'salom, '+fname+'  biz sizga qanaqa yordam berolamiz ', {
       reply_markup: {
           keyboard: [
               [{text: 'Location', resize_keyboard: true}],
               [{text: 'Contact', request_contact: true}],
               [{text: 'ro\'yxattan o\'tish',  resize_keyboard: true}],
               [{text: 'batafsil malumot', resize_keyboard: true}],
           ],
           resize_keyboard: true,
           one_time_keyboard: true,
       },
   })


}
    if(msg==="batafsil malumot") {
        bot.sendMessage(chatid, 'batafsil malumot',{
            reply_markup: {
                keyboard: [
                    [{text: 'bolalar uchun ', resize_keyboard: true}],
                    [{text: 'kattalar uchun', request_contact: true}],
                    [{text: 'ayollar uchun',  resize_keyboard: true}],
                    [{text: 'orqaga',  resize_keyboard: true}],
                ],
                resize_keyboard: true,
                one_time_keyboard: true,
            },
        })
    }
    if(msg==="ro'yxattan o'tish"){
        bot.sendMessage(chatid,"shu xavola orqali ro'yxattan o'tishingiz mumkun "+fname+" https://docs.google.com/forms/d/e/1FAIpQLSeiwsTMKfqmlTiUfW-4a2RCDc0lCsYh-AYZvN6yuSdPJ0KkRw/viewform");
    }
    if(msg==="Location"){
        bot.sendLocation(chatid, 69.201883, 41.253495);
    }
    if(msg==="orqaga"){
        bot.sendMessage(chatid, 'orqaga',{
            reply_markup: {
                keyboard: [
                    [{text: 'Location', resize_keyboard: true}],
                    [{text: 'Contact', request_contact: true}],
                    [{text: 'ro\'yxattan o\'tish',  resize_keyboard: true}],
                    [{text: 'batafsil malumot', resize_keyboard: true}],
                ],
                resize_keyboard: true,
                one_time_keyboard: true,
            },
        })
    }
})
