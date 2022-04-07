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
    const url = `https://regentool.mypinata.cloud/ipfs/QmPSmLFF9aPM3CSU6WSTrtxobPGt6xxmLsEkNRo8K8YQZn/0n1_phonescreen_${tokenId}.png`
		await interaction.reply(url);
	}

	if (commandName === 'izzy') {
    tokenId = +tokenId
    const url = `https://regentool.mypinata.cloud/ipfs/QmPLxxvzKPLMGDHQoAdo2ZHx7VHHUdf342tbQjyVmi9VXm/0n1_izzy_${tokenId}.png`
		await interaction.reply(url);
	}

  if (commandName === "genesis") {
    if (tokenId.length < 4) {
      for (let i = tokenId.length; i < 4; i++) {
        tokenId = "0" + tokenId
      }
    }
    const url = `https://ipfs.io/ipfs/QmcoavNZq2jyZGe2Zi4nanQqzU9hRPxunHAo8pgYZ5fSep/${tokenId}.png`
		await interaction.reply(url);
  }

//  if (commandName === "warning") {
//    tokenId = +tokenId
//    const url = `https://regentool.mypinata.cloud/ipfs/QmSPgDD5ERvUPtbhNNnCkXA33vna5AXuVYmFZ2nXpxD6ia/0n1_suit_teaser_${tokenId}.png`
//		await interaction.reply(url);
//  }
  var nanoSuitHash = "QmeKo9m435po4bd7HEqgwd2E1g4imioNcy7RtggW3rHJaV"
	if (commandName === 'nano-ao') {
    tokenId = +tokenId
    const url = `https://regentool.mypinata.cloud/ipfs/${nanoSuitHash}/nano_suit_${tokenId}_4.png`
		await interaction.reply(url);
	}
	if (commandName === 'nano-aka') {
    tokenId = +tokenId
    const url = `https://regentool.mypinata.cloud/ipfs/${nanoSuitHash}/nano_suit_${tokenId}_6.png`
		await interaction.reply(url);
	}
	if (commandName === 'nano-kiiro') {
    tokenId = +tokenId
    const url = `https://regentool.mypinata.cloud/ipfs/${nanoSuitHash}/nano_suit_${tokenId}_5.png`
		await interaction.reply(url);
	}
	if (commandName === 'nano-obsidian-ao') {
    tokenId = +tokenId
    const url = `https://regentool.mypinata.cloud/ipfs/${nanoSuitHash}/nano_suit_${tokenId}_3.png`
		await interaction.reply(url);
	}
	if (commandName === 'nano-obsidian-gold') {
    tokenId = +tokenId
    const url = `https://regentool.mypinata.cloud/ipfs/${nanoSuitHash}/nano_suit_${tokenId}_1.png`
		await interaction.reply(url);
	}
	if (commandName === 'nano-pearl') {
    tokenId = +tokenId
    const url = `https://regentool.mypinata.cloud/ipfs/${nanoSuitHash}/nano_suit_${tokenId}_2.png`
		await interaction.reply(url);
	}
});
client.login(token);
