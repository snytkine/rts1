import * as React from "react";
import  {Component, CSSProperties} from 'react'

interface ISearchBarProps {
  filterText: string
}
export class SearchBar extends Component<ISearchBarProps, {}>{


  render(){
    return <input type="search" placeholder="search" value={this.props.filterText}/>
  }
}