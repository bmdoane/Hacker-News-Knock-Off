const BASE_URL = 'https://hacker-news.firebaseio.com/v0/'
const JSON_QUERY = '.json?print=pretty'

export function fetchItem(id) {
  return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
    .then(res => res.json())
}

export function fetchTopStories() {
  return fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    .then(res => res.json())
    .then(ids => {
      if (!ids) {
        throw new Error('There was an error fetching posts')
      }
      return ids.slice(0, 50)

    })
    .then(ids => Promise.all(ids.map(fetchItem)))

}
