// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  getWithDraw = id => {
    const {amount} = this.state
    const {denominationsList} = this.props
    const pressedAmount = denominationsList.filter(
      eachItem => eachItem.id === id,
    )

    const pressedValue = pressedAmount[0].value
    this.setState(prevState => ({amount: prevState.amount - pressedValue}))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bgContainer">
        <div className="card">
          <div className="logoNameContainer">
            <span>s</span>
            <p className="account-name">Sarah Williams</p>
          </div>
          <div className="balanceContainer">
            <p className="your-balance">Your Balance</p>
            <div>
              <p className="amount">{amount}</p>
              <p className="in-rupees">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum-text">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-container">
            {denominationsList.map(each => (
              <DenominationItem
                key={each.id}
                denominationsList={each}
                getWithDraw={this.getWithDraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
