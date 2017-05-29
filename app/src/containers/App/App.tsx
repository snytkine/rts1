import * as React from "react";
import {ICard} from '../../interfaces'
import {KanbanBoards} from "../../components/KanbanBoard/"
let cardsList: ICard[] = [
  {
    id: 1,
    title: "Read the Book",
    description: "I Should read the whole book",
    color: '#BD8D31',
    status: "in-progress",
    tasks: []
  },
  {
    id: 2,
    title: "Write Some Code",
    description: "Code along with the sample in the book",
    color: '#3A7E28',
    status: "todo",
    tasks: [
      {
        id: 1,
        name: "ContactList Example",
        done: true
      },
      {
        id: 2,
        name: "Kanban Example",
        done: false
      },
      {
        id: 3,
        name: "My own experiments!",
        done: false
      }


    ]
  }
];


export default () => <KanbanBoards cards={cardsList}/>