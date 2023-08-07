"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const onInteraction_1 = require("./events/onInteraction");
const deployCommands_1 = require("./deployCommands");
(async () => {
    const token = process.env.DISCORD_TOKEN;
    const clientId = process.env.CLIENT_ID;
    const guildId = process.env.GUILD_ID;
    let areEnvironmentVariablesSet = false;
    if (!token) {
        console.error('Missing Discord bot token.🔣');
        areEnvironmentVariablesSet = true;
    }
    if (!clientId) {
        console.error('Missing client ID.🔣');
        areEnvironmentVariablesSet = true;
    }
    if (!guildId) {
        console.error('Missing dev guild ID.🔣');
        areEnvironmentVariablesSet = true;
    }
    if (areEnvironmentVariablesSet)
        process.exit(1);
    const client = new discord_js_1.Client({ intents: [discord_js_1.GatewayIntentBits.Guilds] });
    client.on("ready", () => {
        console.log(`✅Bot connected to Discord... Jukebot is live!🤖`);
    });
    client.on("interactionCreate", async (interaction) => await (0, onInteraction_1.onInteraction)(interaction));
    await client.login(token);
    (0, deployCommands_1.deployCommands)(token, clientId, guildId);
})();
//# sourceMappingURL=index.js.map