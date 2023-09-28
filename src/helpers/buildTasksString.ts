import { Task, TaskStatus } from "../notion/types";

export const buildTasksString = (tasks: Task[]) => {

  let replyString = '';
  tasks.forEach(task => {
    
    const statusEmoji = 
      task.status === TaskStatus.TODO ? '⚪' 
      : task.status === TaskStatus.IN_PROGRESS ? '🔵' :
      task.status === TaskStatus.PLANNED ? '🟡' : '🟢';

    replyString += `${statusEmoji} ${task.name} [${task.type}]\n`;

    if (task.assignments.leader[0]) replyString += `├─  👤 Ответственный: ${task.assignments.leader[0].name}\n`;
    if (task.deadline) replyString += `├─  ⏰ Дедлайн: ${task.deadline.toLocaleDateString()}\n`;
    if (task.assignments.writer[0]) replyString += `├─  🖋️ ${task.assignments.writer[0].name}\n`;
    if (task.assignments.designer[0]) replyString += `├─  🎨 ${task.assignments.designer[0].name}\n`;
    if (task.assignments.photographer.length > 0) replyString += `├─  📸 ${task.assignments.photographer.map(p => p.name).join(', ')}\n`
    replyString += `🔗 Карточка: ${task.notionUrl}\n\n`;
  })
  return replyString;
}