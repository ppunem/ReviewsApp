// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    num: 0,
  }

  changeDetails = reviewsList => {
    const {num} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[num]

    return (
      <div>
        <h1 className="head">Reviews</h1>
        <div className="align">
          <img src={imgUrl} className="image" alt={username} />
        </div>
        <p className="name">{username}</p>
        <p className="company">{companyName}</p>
        <p className="company">{description}</p>
      </div>
    )
  }

  gotoPrevious = () => {
    const {num} = this.state

    if (num > 0) {
      this.setState(prevState => ({
        num: prevState.num - 1,
      }))
    }
  }

  gotoNext = () => {
    const {num} = this.state
    const {reviewsList} = this.props

    if (num < reviewsList.length - 1) {
      this.setState(prevState => ({
        num: prevState.num + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props

    return (
      <div className="bg">
        <div className="container">
          <button
            type="button"
            onClick={this.gotoPrevious}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
              className="left-arrow"
              alt="left arrow"
            />
          </button>
          {this.changeDetails(reviewsList)}
          <button
            type="button"
            onClick={this.gotoNext}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
              className="right-arrow"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
