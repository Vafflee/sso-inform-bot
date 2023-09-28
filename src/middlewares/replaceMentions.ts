import { MessageContext } from "vk-io";
import { MENTION_PATTERN } from "../constants/vk";

export const replaceMentions = (ctx: MessageContext, next: () => Promise<unknown>) => {
  if (!ctx.text) return;
  if (ctx.isChat && !MENTION_PATTERN.test(ctx.text)) {
      return;
  }

  if (ctx.text) {
      ctx.text = ctx.text.replace(MENTION_PATTERN, '');   
  }

  return next();
}