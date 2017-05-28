import * as React from "react";
import  {Component} from 'react'
import {ICard} from '../../interfaces'
import {CheckList} from '../CheckList/checklist'


interface ICardState {
  showDetails: boolean
}
export class Card extends Component<ICard, ICardState> {

  constructor(props: ICard) {
    super(props);
    this.state = {
      showDetails: false
    }
  }


  toggleDetails(){
    this.setState({showDetails: !this.state.showDetails})
  }

  render() {

    let cardDetails;
    let cardClassName;
    if (this.state.showDetails) {
      cardClassName = "card__title--is-open";
      cardDetails = (
          <div className="card__details">
            {this.props.description}
            <CheckList cardId={this.props.id} tasks={this.props.tasks}/>
          </div>
      );
    } else {
      cardClassName = "card__title";
    }

    return <div className="card">
      <div className={cardClassName} onClick={this.toggleDetails.bind(this)}>{this.props.title}</div>
      {cardDetails}
    </div>
  }
}