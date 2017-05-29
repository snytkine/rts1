import * as React from "react";
import  {Component, CSSProperties} from 'react'
import {IContact} from "../../interfaces/data";
export {IContact} from "../../interfaces"

export class ContactItem extends Component<IContact, object>{

  render(){
    return(
        <li>{this.props.name} - {this.props.email}</li>
    )
  }
}