import React from 'react'

function militaryTime(hours) {
  return hours - 12
}

function getTime(uts) {
  const date = new Date(uts * 1000)
  const year = Number(date.getFullYear().toString().substring(2))
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hours = date.getHours() > 12 ? militaryTime(date.getHours()) : date.getHours()
  const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  const ampm = date.getHours() > 12 ? 'PM' : 'AM'
  const formattedTime = `${month}/${day}/${year}, ${hours}:${minutes} ${ampm}`

  return formattedTime
}

function StoryDescription({ topStories }) {

  const storiesList = topStories.map(story => {
    return (
      <div key={story.id}>
        <div>{story.title}</div>
        <div>
          by {story.by} {getTime(story.time)} with comment.count comments
        </div>
      </div>
    )
  })

  return (
    <div>{storiesList}</div>
  )
}

export default StoryDescription