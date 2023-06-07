// Write your code here.
import {Component} from 'react'

import './index.css'

const plusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  onToggleIsActive = () => {
    const {isActive} = this.state
    if (isActive === false) {
      this.setState({isActive: true})
    } else {
      this.setState({isActive: false})
    }
  }

  renderAnswer = () => {
    const {isActive} = this.state
    const {faqsDetails} = this.props
    const {answerText} = faqsDetails
    if (isActive) {
      return (
        <div>
          <hr />
          <p className="answer-text">{answerText}</p>
        </div>
      )
    }
    return null
  }

  renderActiveImage = () => {
    const {isActive} = this.state
    const image = isActive ? minusImage : plusImage
    const altText = isActive ? 'minus' : 'plus'

    return (
      <button
        type="button"
        className="plus-btn"
        onClick={this.onToggleIsActive}
      >
        <img src={image} alt={altText} className="plus" />
      </button>
    )
  }

  render() {
    const {faqsDetails} = this.props
    const {questionText} = faqsDetails

    return (
      <li className="list-item-container">
        <div className="list-container">
          <h1 className="question-text">{questionText}</h1>
          {this.renderAnswer()}
        </div>
        {this.renderActiveImage()}
      </li>
    )
  }
}

export default FaqItem
