import { Task, TaskStatus, TaskType } from "../notion/types";

export const buildRequiredString = (tasks: Task[]) => {

  let replyString = '';
  tasks.forEach(task => {
    
    const statusEmoji = 
      task.status === TaskStatus.TODO ? '⚪' 
      : task.status === TaskStatus.IN_PROGRESS ? '🔵' :
      task.status === TaskStatus.PLANNED ? '🟡' : '🟢';

    replyString += `${statusEmoji} ${task.name} [${task.type}]` + (task.deadline ? ` - выложить до: ${task.deadline.toLocaleDateString()}\n` : '\n');
    if (!task.assignments.writer[0]) replyString += `├─  🖋️ Требуется текст\n`;
    if (!task.assignments.designer[0] && task.type !== TaskType.REPORT) replyString += `├─  🎨 Требуется афиша\n`;
    if (task.assignments.photographer.length === 0 && task.type !== TaskType.ANNOUNCEMENT) replyString += `├─  📸 Требуется фотограф\n`;
    replyString += `🔗 Карточка: ${task.notionUrl}\n\n`;
  })
  return replyString;
}