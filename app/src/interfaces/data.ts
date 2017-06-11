/**
 * Created by snytkind on 5/27/17.
 */

export type IStatus = "in-progress" | "todo" | "done"

export interface ITask {
  id: number
  name: string
  done: boolean
}
export interface ICard {
  id: number
  key: string|number
  title: string
  description: string
  status?: IStatus
  color?: string
  tasks: ITask[]
  taskCallbacks: ITaskCallbacks
}


export interface ITaskCallbacks {
  toggle: Function
  delete: Function
  add: Function
}

export interface IKanbanProps {
  cards: ICard[]
  taskCallbacks: ITaskCallbacks
}

export interface ICardsList {
  id: string
  title: string
  cards: ICard[]
}