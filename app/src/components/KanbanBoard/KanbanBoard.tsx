import * as React from "react";
import {Component} from 'react'
import {IKanbanProps} from "../../interfaces"
import {List} from '../List/list'


export class KanbanBoards extends Component<IKanbanProps, any> {


  render() {
    return (
        <div className="app">

          <List id="todo" key="todo" title="To Do?" cards={
            this.props.cards.filter(_ => _.status === "todo")
          }/>

          <List id="in-progress" key="inprogress" title="In Progress?" cards={
            this.props.cards.filter(_ => _.status === "in-progress")
          }/>

          <List id="done" key="done" title="Done" cards={
            this.props.cards.filter(_ => _.status === "done")
          }/>

        </div>
    )
  }


}