// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

const honkResponses = ["Honk", "HONK", "HONK HONK HOOONK", "Honk honk", "HONK HOOONK", "Honk hooonk, HONK"]
const greetingResponses = ["https://giphy.com/gifs/hello-goose-untitled-simulator-Ws9ksgMH6nbGemB3Yh"]
const angryResponses = ["https://giphy.com/gifs/untitled-goose-beaker-U4RX7LYnOywv1us4VP", "https://giphy.com/gifs/goose-7wq5iawqr1IZy", "https://giphy.com/gifs/goose-3fM0YdrBuHiiQ"]

const greetings = ["hi", "hello", "yo", "howdy", "hey", "hows it going", "how’s it going", "how are you doing", "what’s up", "whats up"];
const gooseNameVariations = ["goose", "goose bot", "goosebot", "goosey", "honker"];
const translations = ["Give me bread", "What if I'm just saying honk but you can't tell because everything I say is honk", 
"Can I borrow a tenner", "What you saying",];

probablityCalculator = () => {
    if (Math.random > 0.8) {
        return true
    }
}

messageInterpreter = (msg) => {
    var messageSent = false;
    var messageContainsGreeting = false;
    var messageContainsGooseName = false;

    while (!messageSent) {

        for (i = 0; i < greetings.length; i++) {
            if (msg.content.toLowerCase().includes(greetings[i])) {
                messageContainsGreeting = true;
            }
        }

        for (x = 0; x < gooseNameVariations.length; x++) {
            if (msg.content.toLowerCase().includes(gooseNameVariations[x])) {
                messageContainsGooseName = true;
            }
        }

        if (messageContainsGooseName && messageContainsGreeting) {
            messageSent = true;
            return "GREETING";
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
                    msg.reply(honkResponses[Math.floor(Math.random() * honkResponses.length)]);
                    msg.reply("Translation: \"" + (translations[Math.floor(Math.random() * translations.length)]) + " " + (msg.author.username) +"\". Translated by Goosgle Translate (c)");
                }
        }
    }
})

client.on('message', msg => {
    if (msg.content === "test" ) {
        msg.reply("honk");
    }
})

client.login(process.env.DISCORD_TOKEN);
