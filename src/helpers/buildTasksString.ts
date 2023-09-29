import { RequiredType, Task, TaskStatus } from "../notion/types";
import { getStatusEmojiByStatus } from "./getStatusEmojiByStatus";

export const buildTasksString = (tasks: Task[]) => {

  let replyString = '';
  tasks.forEach(task => {
    
    const statusEmoji = getStatusEmojiByStatus(task.status);

    replyString += `${statusEmoji} ${task.name} [${task.type}]\n`;

    if (task.assignees.leader[0]) replyString += `├ 👤 Ответственный: ${task.assignees.leader[0].name}\n`;
    if (task.deadline) replyString += `├ ⏰ Дедлайн: ${task.deadline.toLocaleDateString()}\n`;
    if (task.assignees.writer[0]) replyString += `├─ 🖋️ ${task.assignees.writer[0].name}\n`;
    if (task.assignees.designer[0]) replyString += `├─ 🎨 ${task.assignees.designer[0].name}\n`;
    if (task.assignees.photographer.length > 0) replyString += `├─ 📸 ${task.assignees.photographer.map(p => p.name).join(', ')}\n`
    replyString += `🔗 Карточка: ${task.notionUrl}\n\n`;
  })
  return replyString;
}