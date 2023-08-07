import { Client, Collection, Events, GatewayIntentBits } from 'discord.js';
import fs from 'node:fs';
import path from 'node:path';

require('dotenv').config();
const TOKEN = process.env.DISCORD_TOKEN;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

try {
	client.login(TOKEN);
	console.log('Bot logged in successfully.🥳');
} catch {
	console.error('Discord bot login failed.👎');
}	

console.log('Jukebot is live!🤖');

