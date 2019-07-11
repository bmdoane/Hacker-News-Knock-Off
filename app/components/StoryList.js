import React from 'react'
import { fetchTopStories } from '../utils/api'
import StoryDescription from './StoryDescription'


class StoryList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      topStories: [],
      newStories: [],
      error: null
    }
    this.handleFetch = this.handleFetch.bind(this)
  }

  componentDidMount() {
    this.handleFetch()

  }

  handleFetch() {
    this.setState({
      isLoaded: false,
      topStories: []
    })

    fetchTopStories()
      .then(stories => this.setState({
        topStories: stories,
        isLoaded: true,
        error: null
      }))
  }

  render() {
    const { isLoaded, topStories } = this.state
    console.log('loaded', isLoaded)
    console.log('ts', topStories)

    // const storiesList = topStories.map(story => {
    //   return (
    //     <div key={story.id}>
    //       {story.title}
    //     </div>
    //   )
    // })

    if (!isLoaded) {
      return <div>Loading...</div>
    }

    return (
      <StoryDescription topStories={topStories}/>
    )
  }
}

export default StoryList