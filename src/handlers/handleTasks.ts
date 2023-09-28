import { MessageContext } from "vk-io";
import { getTasks } from "../notion/api/getTasks";
import { parseTasksResults } from "../notion/helpers/parseTasksResults";
import { TaskStatus } from "../notion/types";
import { buildTasksString } from "../helpers/buildTasksString";

export const handleTasks = async (ctx: MessageContext) => {
  const tasksResult = await getTasks({
    filter: {
      status: [TaskStatus.TODO, TaskStatus.IN_PROGRESS]
    }
  });
  const tasks = parseTasksResults(tasksResult);

  return ctx.reply(buildTasksString(tasks));
}