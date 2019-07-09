import React from 'react'


class StoryList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      topStoryIds: [],
      newStoryIds: [],
      topStories: [],
      newStories: [],
    }
  }

  componentDidMount() {
    this.fetchTopStoryIds()
    this.fetchNewStoryIds()

    // this.getStories(this.state.topStoryIds)
  }

  // Do I limit this to 50 here?  When?  Keep more for comments?
  fetchTopStoryIds() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          topStoryIds: data.slice(0, 50)
        })
      })
      .catch(error => console.log('topStoryIds data failed', error))
  }

  fetchNewStoryIds() {
    fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          newStoryIds: data.slice(0, 50)
        })
      })
      .catch(error => console.log('newStoryIds data failed', error))
  }

  fetchStories(id) {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
      .then(res => res.json())
      .then(story => {
        console.log('stories', data)
        return story
      })
  }

  getStories(storyIds) {
    console.log('boom')
    return Promise.all([
      storyIds.map(id => {
        this.setState({ topStories: this.fetchStories(id) })
      })
    ])
  }

  render() {
    const { isLoaded, topStoryIds, newStoryIds, topStories } = this.state
    console.log('top', topStoryIds);
    console.log('new', newStoryIds);
    // No results here
    console.log('ts', topStories)

    const storyIdList = topStoryIds.map(id => {
      return (
        <li key={id}>
          {id}
        </li>
      )
    })

    // if (!isLoaded) {
    //   return <div>Loading...</div>
    // }

    return (
      <ul>{storyIdList}</ul>
    )
  }
}

export default StoryList