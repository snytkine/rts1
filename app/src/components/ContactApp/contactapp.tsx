import * as React from "react";
import  {Component, CSSProperties} from 'react'
import {SearchBar} from '../SearchBar/searchbar'
import {ContactList} from '../ContactList/contactlist'
import {IContact} from '../../interfaces'


interface ContactAppProps {
  contacts: IContact[]
}

interface IContactAppState {
  filterText: string
}

export class ContactApp extends Component<ContactAppProps, IContactAppState> {

  constructor(){
    super();
    this.state = {
      filterText: ""
    }
  }

  render() {
    return <div>
      <SearchBar filterText={this.state.filterText}/>
      <ContactList contacts={this.props.contacts} filterText={this.state.filterText}/>
    </div>
  }
}