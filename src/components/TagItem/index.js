import {Tag, TagButton} from './styledComponents'

const TagItem = props => {
  const {tagDetails, getActiveTagId, activeTagId} = props
  const {displayText, optionId} = tagDetails
  const Active = event => {
    getActiveTagId(event.target.value)
  }
  const bgColor = activeTagId === optionId ? '#f3aa4e' : 'transparent'
  return (
    <Tag>
      <TagButton onChange={Active} bgColor={bgColor}>
        {displayText}
      </TagButton>
    </Tag>
  )
}

export default TagItem
