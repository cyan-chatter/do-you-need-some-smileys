import logo from './logo.svg';
import './App.css';
import Smiling from './Face/Smiling';
import {React,Component} from 'react'


class App extends Component {
  
  state = {
    size : 960,
    num : 1
  }
  
  onChangeHandler = (e)=>{
      const number = e.target.value
      if(number>0){
        this.setState({num : number})
      }
      else e.target.value = 0
  }
  
  render(){
      const arr = new Array(this.state.num);
      for(var i=0; i<this.state.num; ++i){
        arr[i] = this.state.size * Math.random();
      }
      return (
        <div className="App">
          <h1>DO YOU NEED SOME SMILEYS?</h1>

          <h2>Take this many Smileys :</h2>
        <input type="number" value={this.state.num} onChange={this.onChangeHandler}></input>
        <div className="smileys">
          {arr.map((el)=>{
            return (<Smiling size={el}/>)    
          })}
        </div>
        </div>
      );
  }
  
}

export default App;
