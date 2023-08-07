"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const client = new discord_js_1.Client({ intents: [discord_js_1.GatewayIntentBits.Guilds] });
require('dotenv').config();
const TOKEN = process.env.DISCORD_TOKEN;
try {
    client.login(TOKEN);
    console.log('Bot logged in successfully.');
}
catch {
    console.error('Discord bot login failed.');
}
//# sourceMappingURL=index.js.map