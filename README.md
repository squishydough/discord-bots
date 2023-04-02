# Squishy's Discord Bots

Just some fun bots I made for friends in the Cheesehaven Discord community. Maybe the code helps you, or makes you laugh?

## Installation

### Requirements

- Node.js 12.0.0 or newer
- npm
- A Discord bot token (see [Creating a Bot Account](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot))

### Setup

1. Clone the repository
2. Install dependencies with `npm install`
3. Copy `.env.example` to `.env` and fill in the required values **for each bot in the `bots` folder!**.
   - `INVITE` token is not required, I just use it to store the invite link to invite my bot to the server.
4. Run all bots with `turbo run dev`
   - Run individual bots by navigating to a specific bot folder and running `npm run dev`.
