import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ArticleList from './components/ArticleList'

class App extends React.Component {
  render() {
    return <ArticleList />
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)