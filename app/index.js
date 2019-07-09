import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import StoryList from './components/StoryList'

class App extends React.Component {
  render() {
    return <StoryList />
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)