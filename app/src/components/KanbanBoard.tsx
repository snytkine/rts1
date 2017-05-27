import * as React from "react";
import  {Component} from 'react'
import {ICard, IKanbanProps} from "../interfaces"
import {List} from './List'


export class KanbanBoards extends Component<IKanbanProps, any> {


  render() {
    return (
        <div className="app">

          <List id="todo" title="To Do?" cards={
            this.props.cards.filter(_ => _.status === "todo")
          }/>

          <List id="in-progress" title="In Progress?" cards={
            this.props.cards.filter(_ => _.status === "in-progress")
          }/>

          <List id="done" title="Done" cards={
            this.props.cards.filter(_ => _.status === "done")
          }/>

        </div>
    )
  }


}