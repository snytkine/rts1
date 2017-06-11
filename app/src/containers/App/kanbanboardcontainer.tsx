import * as React from "react";
import {Component} from 'react'
import {ICard} from '../../interfaces'
import {KanbanBoard} from "../../components/KanbanBoard/"
import {IKanbanProps} from "../../interfaces"



const API_URI = 'http://kanbanapi.pro-react.com';
const API_HEADERS = {
  'Content-Type': 'application/json',
  Authorization: 'GUXWZ47'
};

export default class KanbanBoardContainer extends Component<IKanbanProps, IKanbanProps> {

  constructor() {
    super();
    this.state = {
      cards: []
    }
  }


  componentDidMount() {
    console.log("ON kanbancontainer componentDidMount")
    fetch(`${API_URI}/cards`, {headers: API_HEADERS})
        .then(response => {
          console.log("GOT RESPONCE FROM API")
          return response.json()
        })
        .then(responseData => {
          console.log("RESPONSE DATA: ", responseData)
          return this.setState({cards: responseData})
        })
        .catch(_ => console.error(_))
  }

  render() {
    return <KanbanBoard cards={this.state.cards}/>
  }
}