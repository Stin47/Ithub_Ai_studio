const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(telegramToken, {polling: true});
require('dotenv').config();
const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
const myChatId = process.env.MY_CHAT_ID;

 

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;
  console.log(msg);
  bot.sendMessage(chatId, `${messageText}`);
  // if (messageText === '/start') {
  //   bot.sendMessage(chatId, `Привет, ${msg.from.first_name}! Я бот для обработки формы заказа с сайта.`);
  // }
  // if (messageText === '/help') {
  //   bot.sendMessage(chatId, `заполни форму заказа на сайте.`);
  // }
});
