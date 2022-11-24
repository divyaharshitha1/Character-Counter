import {Component} from 'react'
import {v4} from 'uuid'
import CounterListItem from './components/CounterListItem'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    textInput: '',
    countList: [],
  }

  onClickAddBtn = event => {
    event.preventDefault()
    const {textInput} = this.state
    const newText = {
      id: v4(),
      word: textInput,
    }
    this.setState(prevState => ({
      countList: [...prevState.countList, newText],
      textInput: '',
    }))
  }

  onChangeInput = event => {
    this.setState({textInput: event.target.value})
  }

  render() {
    const {textInput, countList} = this.state
    return (
      <div className="app-container">
        <div className="responsive-container">
          <div className="count-container">
            <div className="count-heading-container">
              <h1 className="count-heading">
                Count the characters like a Boss...
              </h1>
            </div>
            {textInput === '' ? (
              <ul className="count-list">
                {countList.map(eachItem => (
                  <CounterListItem key={eachItem.id} countDetails={eachItem} />
                ))}
              </ul>
            ) : (
              <div className="image-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                  className="image"
                />
              </div>
            )}
          </div>
          <div className="character-counter-container">
            <h1 className="character-counter-heading">Character Counter</h1>
            <div className="input-container">
              <form className="form" onSubmit={this.onClickAddBtn}>
                <input
                  type="text"
                  className="input-ele"
                  placeholder="Enter the Characters here"
                  onChange={this.onChangeInput}
                  value={textInput}
                />
                <button className="add-btn" type="submit">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
