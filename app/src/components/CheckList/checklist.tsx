import * as React from "react"
import  {Component} from 'react'
import {ITask} from '../../interfaces'
import {ITaskCallbacks} from "../../interfaces/data";
require('./Component.module.css');

interface ICheckListProps {
  cardId: number
  tasks: ITask[]
  taskCallbacks: ITaskCallbacks
}

export class CheckList extends Component<ICheckListProps, {}> {

  render() {
    let tasks: Array<JSX.Element> = this.props.tasks.map((task, taskIndex) => {
      return <li className="checklist__task" key={task.id}>
        <input type="checkbox" checked={task.done}
               onChange={this.props.taskCallbacks.toggle.bind(null, this.props.cardId, task.id, taskIndex)}
        />
        {task.name}{" "}
        <a href="#" className="checklist__task--remove"
           onClick={this.props.taskCallbacks.delete.bind(null, this.props.cardId, task.id, taskIndex)}/>
      </li>
    });

    return <div className="checklist">
      <ul>{tasks}</ul>
      <input type="text" className="checklist--add-task" placeholder="Type then hit Enter to add task?"/>
    </div>
  }
}