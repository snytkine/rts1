import * as React from "react"
import  { Component} from 'react'
import {ITask} from '../interfaces'

interface ICheckListProps {
  cardId:number
  tasks: ITask[]
}

export class CheckList extends Component<ICheckListProps, {}> {

  render(){
    let tasks = this.props.tasks.map(task => {
      return <li className="checklist__taks">
        <input type="checkbox" defaultChecked={task.done} />
        {task.name}
        <a href="#" className="checklist__task--remove" />
      </li>
    });

    return <div className="checklist"><ul>{tasks}</ul></div>
  }
}