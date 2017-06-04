import * as React from "react";
import  {Component, CSSProperties} from 'react'

interface MyEvent {
  target: {
    value: any
  }
}
interface ISearchBarProps {
  filterText: string
  onUserInput: (s: string) => void
}
export class SearchBar extends Component<ISearchBarProps, {}> {

  handleChange(event: MyEvent) {
    this.props.onUserInput(event.target.value)
  }

  render() {
    return <input type="search"
                  placeholder="search"
                  onChange={this.handleChange.bind(this)}
                  value={this.props.filterText}/>
  }
}