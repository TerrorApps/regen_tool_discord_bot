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
const genesis =	new SlashCommandBuilder()
	  .setName('genesis')
	  .setDescription('return phone screen img of your 0n1')
	  .addStringOption(option =>
	  	option.setName('tokenid')
	  		.setDescription('tokenid of your nft')
	  		.setRequired(true));
const izzy =	new SlashCommandBuilder()
	  .setName('izzy')
	  .setDescription('return phone screen img of your 0n1 with izzy r0n1')
	  .addStringOption(option =>
	  	option.setName('tokenid')
	  		.setDescription('tokenid of your nft')
	  		.setRequired(true));
const nanoAo =	new SlashCommandBuilder()
	  .setName('nano-ao')
	  .setDescription('return your 0n1 with Ao nano suit')
	  .addStringOption(option =>
	  	option.setName('tokenid')
	  		.setDescription('tokenid of your nft')
	  		.setRequired(true));
const nanoAka =	new SlashCommandBuilder()
	  .setName('nano-aka')
	  .setDescription('return your 0n1 with Aka nano suit')
	  .addStringOption(option =>
	  	option.setName('tokenid')
	  		.setDescription('tokenid of your nft')
	  		.setRequired(true));
const nanoKiiro =	new SlashCommandBuilder()
	  .setName('nano-kiiro')
	  .setDescription('return your 0n1 with Kiiro nano suit')
	  .addStringOption(option =>
	  	option.setName('tokenid')
	  		.setDescription('tokenid of your nft')
	  		.setRequired(true));
const nanoObsidianGold =	new SlashCommandBuilder()
	  .setName('nano-obsidian-gold')
	  .setDescription('return your 0n1 with Obsidian Gold nano suit')
	  .addStringOption(option =>
	  	option.setName('tokenid')
	  		.setDescription('tokenid of your nft')
	  		.setRequired(true));
const nanoObsidianAo =	new SlashCommandBuilder()
	  .setName('nano-obsidian-ao')
	  .setDescription('return your 0n1 with Obsidian Ao nano suit')
	  .addStringOption(option =>
	  	option.setName('tokenid')
	  		.setDescription('tokenid of your nft')
	  		.setRequired(true));
const nanoPearl =	new SlashCommandBuilder()
	  .setName('nano-pearl')
	  .setDescription('return your 0n1 with Pearl nano suit')
	  .addStringOption(option =>
	  	option.setName('tokenid')
	  		.setDescription('tokenid of your nft')
	  		.setRequired(true));
const suitTease =	new SlashCommandBuilder()
	  .setName('warning')
	  .setDescription('suit teaser on your 0n1')
	  .addStringOption(option =>
	  	option.setName('tokenid')
	  		.setDescription('tokenid of your nft')
	  		.setRequired(true));
const commands = [
  ph0n1,
  genesis,
  izzy,
  nanoAo,
  nanoAka,
  nanoKiiro,
  nanoObsidianGold,
  nanoObsidianAo,
  nanoPearl
//  suitTease
].map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands to 0n1 force.'))
	.catch(console.error);

rest.put(Routes.applicationGuildCommands(clientId, "941057715722149958"), { body: commands })
	.then(() => console.log('Successfully registered application commands to missing-nin.'))
	.catch(console.error);
