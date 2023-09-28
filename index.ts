import { VK } from 'vk-io';
import { handleTasks } from './src/handlers/handleTasks';
import { handleRequired } from './src/handlers/handleRequired';
import { replaceMentions } from './src/middlewares/replaceMentions';
import { ERROR_MESSAGE } from './src/constants/messages';

if (!process.env.BOT_TOKEN) throw new Error('No bot token!');

const vk = new VK({
  token: process.env.BOT_TOKEN
});

// Replace bot mentions if is chat
vk.updates.on('message', replaceMentions);

vk.updates.on('message_new', async (ctx) => {
  try {
    if (ctx.text === 'текущие') await handleRequired(ctx)
    if (ctx.text === 'все') await handleTasks(ctx)
  } catch (error) {
    await ctx.reply(ERROR_MESSAGE)
    console.error(error);
  }
});

vk.updates.start();