const core = require("@actions/core");
const github = require("@actions/github")
const TelegramBot = require('node-telegram-bot-api');

let git = github.context.payload; 
const token = core.getInput('token_telegram');
const bot = new TelegramBot(token, { polling: false });
const chatId = core.getInput('chat_id');
const username = core.getInput('username')

try {
  bot.sendMessage(chatId, `Workflow ejecutado correctamente tras el último commit. Saludos ${username}\nCOMMIT INFO: \nName: ${git.head_commit.author.name}\nUsername: ${git.head_commit.author.username}\nEmail: ${git.head_commit.author.email}\nMessage_Commit: ${git.head_commit.message} \n`);
} catch (error) {
  core.setFailed(error.message);
}

console.log("response", "Mensaje enviado");