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
  title: string
  description: string
  status?: IStatus
  tasks: ITask[]
}

export interface IKanbanProps {
  cards: ICard[]
}

export interface ICardsList {
  id: string
  title: string
  cards: ICard[]
}