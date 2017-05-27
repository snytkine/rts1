import * as React from "react";
import  {Component} from 'react'
import {ICard} from '../interfaces'
import {CheckList} from './checklist'

export class Card extends Component<ICard, {}> {


  render() {
    return <div className="card">
      <div className="card__title">{this.props.title}</div>
      <div className="card__details">
        {this.props.description}
        <CheckList cardId={this.props.id} tasks={this.props.tasks}/>
      </div>
    </div>
  }
}