import * as React from "react";
import  {Component, CSSProperties} from 'react'
import {IContact} from '../../interfaces'
import {ContactItem} from '../ContactItem/contactitem'

interface IContactListProps {
  contacts: IContact[]
  filterText: string
}

export class ContactList extends Component<IContactListProps, object> {

  render() {
    return (
        <ul>
          {this.props.contacts.map(
              contact => <ContactItem key={contact.email}
                                      name={contact.name}
                                      email={contact.email}
              />
          )}
        </ul>
    )
  }
}