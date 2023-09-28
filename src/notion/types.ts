export type Task = {
  name: string,
  deadline: Date | null,
  type: TaskType,
  status: TaskStatus,
  notionUrl: string,
  assignments: {
    leader: User[],
    designer: User[],
    photographer: User[],
    writer: User[]
  }
}

export enum TaskType {
  ANNOUNCEMENT = 'Объявление',
  REPORT = 'Отчет',
  OTHER = 'Другое'
}

export enum TaskStatus {
  DRAFT = 'Черновик',
  TODO = 'Не начато',
  IN_PROGRESS = 'В процессе',
  PLANNED = 'В отложенном',
  DONE = 'Готово'
}

export type User = {
  id: string,
  name: string
}