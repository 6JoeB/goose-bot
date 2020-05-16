// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

const honkResponses = ["Honk", "HONK", "HONK HONK HONK HONK HOOONK", "honk honk"]
const greetingResponses = ["https://giphy.com/gifs/hello-goose-untitled-simulator-Ws9ksgMH6nbGemB3Yh"]
const angryResponses = ["https://giphy.com/gifs/untitled-goose-beaker-U4RX7LYnOywv1us4VP", "https://giphy.com/gifs/goose-7wq5iawqr1IZy", "https://giphy.com/gifs/goose-3fM0YdrBuHiiQ"]

const greetings = ["hi", "hello", "yo", "howdy", "hey", "hows it going", "how’s it going", "how are you doing", "what’s up", "whats up"]

probablityCalculator = () => {
    if (Math.random > 0) {
        return true
    }
}

messageInterpreter = (msg) => {
    var messageSent = false;

    while (!messageSent) {
        for (i = 0; i < greetings.length; i++) {
            if (msg.content.toLowerCase().includes(greetings[i])) {
                messageSent = true;
                return "GREETING";
            }
        }


    break;
    }
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

    if (msg.author.username !== "Goose Bot") {
        switch (messageInterpreter(msg)) {
            case "GREETING": 
                msg.reply(greetingResponses[Math.floor(Math.random() * greetingResponses.length)]);
            break;

            default:
                if (probablityCalculator) {
                    msg.reply(honkResponses[Math.floor(Math.random() * greetingResponses.length)]);
                    msg.reply("Translation: Give me bread " + (msg.author.username) +". Translated by Goosgle Translate (c)");
                }
        }
        
    }
    // if (msg.content.toLowerCase().includes(greetings[0])) {
    //         msg.reply(
    // }
})

client.on('message', msg => {
    if (msg.content === "test" ) {
        msg.reply("honk");
    }
})

client.login(process.env.DISCORD_TOKEN);
