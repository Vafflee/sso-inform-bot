import { TASKS_DB_ID } from "../../constants/notions"
import { TaskProperties } from "./types"
import { notion } from "../client"
import { TaskStatus, TaskType } from "../types"

type TasksSortOption = {
  property: 'Дэдлайн' | 'Статус',
  direction: 'ascending' | 'descending'
}
export type GetTasksOptions = {
  sortBy?: TasksSortOption[],
  filter?: {
    status?: TaskStatus[],
    type?: TaskType[],
    beforeDate?: Date,
    afterDate?: Date,
    assigneeName?: string[],
    assigneeId?: string[]
  }
}

export const getTasks = async (options?: GetTasksOptions) => {

  const filters = [];

  if (options?.filter?.status) {
    filters.push({
      or: options.filter.status.map(status => ({
        property: 'Статус',
        select: {
          equals: status
        }
      }))
    })
  }

  const taskResponse = await notion.databases.query({
    database_id: TASKS_DB_ID,
    sorts: options?.sortBy ?? [
      {
        property: "Дедлайн",
        direction: "ascending",
      },
    ],
    filter: filters.length > 0 ? {
      and: filters as any
    } : undefined
  })

  return taskResponse.results;
}