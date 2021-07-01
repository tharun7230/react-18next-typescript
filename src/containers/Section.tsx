import React, { Component } from "react"; 
type Langstate = {
  time: Date;
};
export class Clock extends Component<{}, LangState> {

  load() {
    this.Langstate({
      time: new Date(),
    });
  render() {
    return <p>The current time is {this.state.lang.change()}</p>;
  }
}
