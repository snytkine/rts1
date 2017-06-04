import * as React from "react";
import  {Component, CSSProperties} from 'react'
import {IContactAppState, ContactAppProps, ContactApp} from './contactapp'
import {IContact} from '../../interfaces'
//import 'whatwg-fetch';


interface IAppState {
  contacts: IContact[]
}

export class ContactsAppContainer extends Component<{}, IAppState> {

  constructor() {
    super();
    this.state = {
      contacts: []
    }
  }

  componentDidMount() {
    fetch('./contacts.json')
        .then(resp => resp.json())
        .then(data => {
          this.setState({contacts: data})
        })
        .catch(e => console.error("DID NOT FETCH", e))
  }

  render() {
    return <ContactApp contacts={this.state.contacts}/>
  }
}