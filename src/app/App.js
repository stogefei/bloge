import React, { Component } from 'react';
import './App.scss';
import { Input, Button, List  } from 'antd';
import store from '../store'
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];
class App extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    console.log(store.getState())
  }
  render() {
    return (
      <div className="App">
        <Input placeholder="Basic usage" value={this.state.inputValue} style={{'width':300}} />
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
}

export default App;
