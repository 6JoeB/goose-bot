// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

const honkResponses = ["Honk", "HONK", "HONK HONK HOOONK", "Honk honk", "HONK HOOONK", "Honk hooonk, HONK"]
const greetingResponses = ["https://giphy.com/gifs/hello-goose-untitled-simulator-Ws9ksgMH6nbGemB3Yh"]

const greetings = ["hi", "hello", "yo", "howdy", "hey", "hows it going", "how’s it going", "how are you doing", "what’s up", "whats up"];
const gooseNameVariations = ["goose", "goose bot", "goosebot", "goosey", "honker"];
const translations = ["Give me bread", "What if I'm just saying honk but you can't tell because everything I say is honk", 
"Can I borrow a tenner", "What you saying", "https://giphy.com/gifs/goose-3fM0YdrBuHiiQ What are you looking at", 
"I'll ban you" , "https://giphy.com/gifs/goose-7wq5iawqr1IZy Consider this a warning of what is to come",
 "https://giphy.com/gifs/untitled-goose-beaker-U4RX7LYnOywv1us4VP Consider this a warning of what is to come", "You wanna play Runescape?"];

function probablityCalculator(){
    if (Math.random() > 0) {
        return true;
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
    if (msg.author.bot) {return};

    switch (messageInterpreter(msg)) {
        case "GREETING": 
            msg.reply(greetingResponses[Math.floor(Math.random() * greetingResponses.length)])
            .then(() => console.log(`Sent a greeting reply to ${msg.author.username}`))
            .catch(console.error);
        break;

    default:
        if (probablityCalculator()) {
            msg.reply(honkResponses[Math.floor(Math.random() * honkResponses.length)])
            .then(() => console.log(`Sent a reply to ${msg.author.username}`))
            .catch(console.error);

            msg.reply("Translation: \"" + (translations[Math.floor(Math.random() * translations.length)]) + " " + (msg.author.username) +"\". Translated by Goosgle Translate (c)")
            .then(() => console.log(`Sent a reply to ${msg.author.username}`))
            .catch(console.error)
        }
        break;
    }
    
})

client.login(process.env.DISCORD_TOKEN);
