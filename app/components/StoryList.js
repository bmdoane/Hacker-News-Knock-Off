import React from 'react'


class StoryList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      topStories: [],
      newStories: [],
    }
  }

  componentDidMount() {
    this.fetchTopStories()

  }

  fetchItem (id) {
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
      .then(res => res.json())
  }

  fetchTopStories() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .then(res => res.json())
      .then(ids => {
        if (!ids) {
          throw new Error('There was an error fetching posts')
        }
        return ids.slice(0, 50)

      })
      .then(ids => Promise.all(ids.map(this.fetchItem)))
      .then(stories => this.setState({ 
        topStories: stories,
        isLoaded: true
       }))

  }

  render() {
    const { isLoaded, topStories } = this.state
    console.log('loaded', isLoaded)
    console.log('ts', topStories)

    const storyList = topStories.map(story => {
      return (
        <li key={story.id}>
          {story.title}
        </li>
      )
    })

    if (!isLoaded) {
      return <div>Loading...</div>
    }

    return (
      <ul>{storyList}</ul>
    )
  }
}

export default StoryList