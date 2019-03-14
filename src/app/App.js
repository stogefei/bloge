import React, { Component } from 'react';
import './App.scss';
import { Input, Button, List  } from 'antd';
import store from '../store'
import {ChangeInputValue, AddList, DeleteList} from '../store/actionTypes'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()

    console.log(this.state, 'this.state')
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleSumt = this.handleSumt.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  render() {
    return (
      <div className="App">
        <Input placeholder="Basic usage" 
        onChange={this.handleInputChange}
        value={this.state.inputValue} style={{'width':300}} />
        <Button type="primary" onClick={this.handleSumt}>提交</Button>
        <List
         style={{"marginTop": 30}}
          bordered
          dataSource={this.state.list}
          renderItem={item => (<List.Item onClick={e => {  this.handleDelete(item) }}>{item}</List.Item>)}
        />
      </div>
    );
  }

  handleInputChange(e) {
    const action = {
      type: ChangeInputValue,
      value: e.target.value
    }
    store.dispatch(action)
    // console.log(e.target.value)
  }

  handleStoreChange() {
    // console.log(store.getState())
    this.setState(store.getState())
  }

  handleSumt() {
    const action = {
      type: AddList,
      value: store.getState().inputValue
    }
    store.dispatch(action)
  }
  handleDelete(e) {
    console.log(e)
    const action = {
      type: DeleteList,
      value: e
    }
    store.dispatch(action)
  }
}

export default App;
