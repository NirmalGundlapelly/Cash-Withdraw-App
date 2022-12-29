// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationsList, getWithDraw} = props
  const {id, value} = denominationsList

  const onWithDraw = () => {
    getWithDraw(id)
  }

  return (
    <li className="listItems">
      <button type="button" onClick={onWithDraw} className="denomiContainer">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
