import * as React from "react";
import  {Component, CSSProperties} from 'react'
import {SearchBar} from '../SearchBar/searchbar'
import {ContactList} from '../ContactList/contactlist'
import {IContact} from '../../interfaces'


export interface ContactAppProps {
  contacts: IContact[]
}

export interface IContactAppState {
  filterText: string
}

export class ContactApp extends Component<ContactAppProps, IContactAppState> {

  constructor(){
    super();
    this.state = {
      filterText: ""
    }
  }

  handleUserInput(searchTerm: string){
    debugger;
    this.setState({filterText: searchTerm});
  }

  render() {
    return <div>
      <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
      <ContactList contacts={this.props.contacts} filterText={this.state.filterText}/>
    </div>
  }
}