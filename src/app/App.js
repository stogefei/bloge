import React, { Component } from 'react';
import './App.scss';
import { Input, Button, List  } from 'antd';
import store from '../store'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()

    console.log(this.state, 'this.state')
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  render() {
    return (
      <div className="App">
        <Input placeholder="Basic usage" 
        onChange={this.handleInputChange}
        value={this.state.inputValue} style={{'width':300}} />
        <Button type="primary">提交</Button>
        <List
        style={{"marginTop": 30}}
          bordered
          dataSource={this.state.list}
          renderItem={item => (<List.Item> {item}</List.Item>)}
        />
      </div>
    );
  }
  handleInputChange(e) {
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action)
    // console.log(e.target.value)
  }
  handleStoreChange() {
    // console.log(store.getState())
    this.setState(store.getState())
  }
}

export default App;
