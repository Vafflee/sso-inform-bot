import { MultiSelect } from "./api/types"

export type Task = {
  name: string,
  deadline: Date | null,
  type: TaskType,
  status: TaskStatus,
  notionUrl: string,
  required: RequiredType[]
  assignees: {
    leader: User[],
    designer: User[],
    photographer: User[],
    writer: User[],
    editor: User[]
  }
}

export enum AssigneeType {
  leader = 'leader',
  designer = 'designer',
  photographer = 'photographer',
  writer = 'writer',
  editor = 'editor'
}


export enum TaskType {
  ANNOUNCEMENT = 'Объявление',
  REPORT = 'Отчет',
  OTHER = 'Другое',
  REALS = 'Рилс'
}

export enum TaskStatus {
  DRAFT = 'Черновик',
  TODO = 'Не начато',
  IN_PROGRESS = 'В процессе',
  PLANNED = 'В отложенном',
  ON_REVIEW = 'На проверке',
  DONE = 'Готово'
}

export enum RequiredType {
  DESIGN = 'Дизайн',
  PHOTO = 'Фото',
  TEXT = 'Текст',
  EDIT = 'Монтаж',
}

export type User = {
  id: string,
  name: string
}