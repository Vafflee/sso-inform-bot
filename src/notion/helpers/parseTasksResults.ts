import { DatabaseObjectResponse, PageObjectResponse, PartialDatabaseObjectResponse, PartialPageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { TaskProperties } from "../api/types";
import { RequiredType, Task, TaskStatus, TaskType } from "../types";
import { parsePeople } from "./parsePeople";

export const parseTasksResults = (tasksResults: (DatabaseObjectResponse | PageObjectResponse | PartialPageObjectResponse | PartialDatabaseObjectResponse)[]) => {
  const taskObjects = tasksResults as DatabaseObjectResponse[];
  const tasks: Task[] = taskObjects.map(task => {
    const props = task.properties as unknown as TaskProperties;
    return {
      name: props.Name.title[0].plain_text,
      deadline: props['Дедлайн'].date?.start ? new Date(props['Дедлайн'].date?.start) : null,
      type: props['Тип'].select.name as TaskType,
      status: props['Статус'].select.name as TaskStatus,
      notionUrl: task.url,
      required: props['Требуется'].multi_select.map(v => v.name as RequiredType),
      assignees: {
        leader: parsePeople(props['Ответственный'].people),
        designer: parsePeople(props['Дизайн'].people),
        photographer: parsePeople(props['Фото'].people),
        writer: parsePeople(props['Текст'].people),
        editor: parsePeople(props['Монтаж'].people)
      }
    }
  })
  return tasks;
}