import * as React from "react";
import  { Component} from 'react'
import {ICardsList} from "../../interfaces"
import {Card} from "../Card/card"



export class List extends Component<ICardsList, {}>{

  render(){
    let cards = this.props.cards.map(card => {
      return <Card id={card.id}
                   key={card.id}
                   title={card.title}
                   color={card.color}
                   description={card.description}
                   tasks={card.tasks} />
    });


    return <div className="list"><h1>{this.props.title}</h1>
      {cards}
    </div>
  }
}
