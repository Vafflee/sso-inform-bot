import { TaskStatus } from "../notion/types";

export function getStatusEmojiByStatus(status: TaskStatus) {
  return status === TaskStatus.TODO ? '⚪' : 
      status === TaskStatus.IN_PROGRESS ? '🔵' :
      status === TaskStatus.ON_REVIEW ? '' :
      status === TaskStatus.PLANNED ? '🟡' : 
      '🟢';
}