import * as React from "react";
import {IContact} from '../../interfaces'
import {ContactApp} from "../../components/ContactApp/"
import {ContactsAppContainer} from "../../components/ContactApp/contactsappcontainer"


let cardsList: IContact[] = [
  {name: "Cassio Zen", email: "cassiozen@gmail.com"},
  {name: "Dan Abramov", email: "gaearon@somewhere.com"},
  {name: "Pete Hunt", email: "floydophone@somewhere.com"},
  {name: "Paul O'Shannessy", email: "zpao@somewhere.com"},
  {name: "Ruan Florence", email: "rprlorence@somewhere.com"},
  {name: "Sebastian Markbage", email: "sebmarkbage@here.com"}
];


export default () => <ContactsAppContainer/>