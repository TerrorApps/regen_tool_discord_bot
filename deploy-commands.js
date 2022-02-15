const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const ph0n1 =	new SlashCommandBuilder()
	  .setName('ph0n1')
	  .setDescription('return phone screen img of your 0n1')
	  .addStringOption(option =>
	  	option.setName('tokenid')
	  		.setDescription('tokenid of your nft')
	  		.setRequired(true));
const commands = [
  ph0n1
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
