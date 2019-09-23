import React from 'react';
import CharacterCard from './CharacterCard';
import './App.css';
import _ from 'lodash';
import f from './mavis.jpg'

let message = 'MAVIS' //คำที่ถูกต้อง
const prepareStateFromWord = (given_word) => {
  let word = given_word.toUpperCase()//ทำให้เป็นตัวใหญ่
  let chars = _.shuffle(Array.from(word))//ใช้สลับตัวอักษร
  return {//state
    word,
    chars,
    attempt: 1,
    guess: [],
    completed: false,
  }
}

class App extends React.Component {
  reset = () => {//setปุ่มรีหน้า
    this.setState({ completed: !this.state.completed, attempt: this.state.attempt + 1 })
  }
  state = prepareStateFromWord(message);
  activationHandler = (c) => {//ฟังก์ชั่นที่ใช้โชว์ปุ่มที่กด
    let guess = [...this.state.guess, c]
    this.setState({ guess })
    if (guess.length === this.state.chars.length) {//เช็คความยาวคำตอบ
      if (guess.join('').toString() === this.state.word) {//ถ้าใช่ให้โชว
        this.setState({ guess: [], completed: true })
      } else {//ถ้าไม่attempt+1
        this.setState({ guess: [], attempt: this.state.attempt + 1 })
      }
    }
  }
  render() {
    return (

      <div className="cen">
        <div>
          <img src={f} width="500" height="550" align="top" />
          {//ทำรูป
            Array.from(this.state.chars).map((item, index) => (
              <CharacterCard
                value={item}//ตัวอักษร
                key={index}//ตำเเหน่งตัวอักษร
                activationHandler={this.activationHandler}
                attempt={this.state.attempt}
              />
            ))
          }
        </div>
        <h2>Selected</h2>
        <div>
          {
            Array.from(this.state.guess).map((item, index) => (
              <CharacterCard
                value={item}
                key={index}
                activationHandler={this.activationHandler}
              />
            ))
          }
        </div>
        <div>Attemp {this.state.attempt}</div> 
        {//เงื่อนไขโชว
          this.state.completed && <h4>Complete</h4>
        }
        <div>
          {//เงื่อนไขรีเซต
            this.state.completed && <button onClick={this.reset}>Reset</button>
          }
        </div>
      </div>
    )
  }
}

export default App;


