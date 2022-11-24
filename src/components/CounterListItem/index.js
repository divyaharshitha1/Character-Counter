import './index.css'

const CounterListItem = props => {
  const {countDetails} = props
  const {word} = countDetails

  return (
    <li className="count-list-item">
      <p className="word">
        {word}: <span>{word.length}</span>
      </p>
    </li>
  )
}

export default CounterListItem
