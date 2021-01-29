const core = require("@actions/core");

const TelegramBot = require('node-telegram-bot-api');

const token = core.getInput('token_telegram');
const bot = new TelegramBot(token, { polling: false });
const chatId = core.getInput('chat_id');
const username = core.getInput('username')

try {
  bot.sendMessage(chatId, `Workflow ejecutado correctamente tras el último commit. Saludos ${username}`);
} catch (error) {
  core.setFailed(error.message);
}

core.setOutput("response", "Mensaje enviado");