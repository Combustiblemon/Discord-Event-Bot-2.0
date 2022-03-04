// Require the necessary discord.js classes
import { Client, Intents, Message, } from "discord.js";
import * as dotenv from "dotenv";
dotenv.config()


// Create a new client instance
const client = new Client({ 
    intents: [
        Intents.FLAGS.GUILDS, 
        Intents.FLAGS.GUILD_MESSAGES, 
        Intents.FLAGS.DIRECT_MESSAGES, 
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING
    ],
    partials: [
        "CHANNEL"
    ] 
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
    console.log(client.guilds.cache.map(guild => guild.id).join(", \n"));
});

client.on('messageCreate', async (message: Message) => {
    //console.log(`ID: ${message.author.id}\nName: ${message.author.username}`)
    console.log();
    
    
})

// Login to Discord with your client's token
client.login(process.env.BOT_TOKEN);