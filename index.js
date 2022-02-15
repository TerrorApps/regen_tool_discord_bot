// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;


  var tokenId = interaction.options.get("tokenid").value
	const { commandName } = interaction;

	if (commandName === 'ph0n1') {
    tokenId = +tokenId
    const url = `https://ipfs.io/ipfs/QmdVbsF8p5B3z7LTMCZVQD4ScJvrnDgN3jwAYeK896iWD1/0n1_phonescreen_${tokenId}.png`
		await interaction.reply(url);
	}
});

client.login(token);
