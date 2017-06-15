import React, { Component } from 'react';
import './App.css';

class User extends Component {

  handleChange = e => {
    console.log('input value:', this.inputEl.value);
    this.props.customOnChange(this.inputEl.value)
  }

  render(){
    return (
      <div>
        <p>User: {this.props.name}</p>
        <input onChange={this.handleChange} ref={ el => this.inputEl = el } />
      </div>
    )
  }
}

// el => this.inputEl = el
// function(el){ this.inputEl = el }

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'World',

    }
    //setTimeout(this.handlerChangeName,1000)
  }

  componentDidMount() {
    console.log('App did mount')
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('will update', this.state.name, '-->', nextState.name)
  }

  handlerChangeName = (e) => {
    this.setState({ name: 'Mark'})
  }

  handleChange = (newValue) => {
    this.setState({ name: newValue })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello {this.state.name}</h1>
        <button onClick={this.handlerChangeName}>Change Name</button>
        <User name={this.state.name} customOnChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
