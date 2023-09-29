import { requiredMap } from "../constants/requiredMap";
import { Task } from "../notion/types";
import { getStatusEmojiByStatus } from "./getStatusEmojiByStatus";

export const buildRequiredString = (tasks: Task[]) => {

  let replyString = '';
  tasks.forEach(task => {
    
    const statusEmoji = getStatusEmojiByStatus(task.status)

    const required = task.required.filter(workType => {
      const role = requiredMap[workType].role;
      return task.assignees[role].length === 0
    }).map(workType => {
      return requiredMap[workType].text;
    })

    if (required.length === 0) return;

    replyString += `${statusEmoji} ${task.name} [${task.type}]` + (task.deadline ? ` - выложить до: ${task.deadline.toLocaleDateString()}\n` : '\n');
    replyString += required.join('');
    replyString += `🔗 Карточка: ${task.notionUrl}\n\n`;
  })
  return replyString;
}


