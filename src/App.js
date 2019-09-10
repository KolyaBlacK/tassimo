import React, { Component } from 'react'
import ContainerHome from './containers/ContainerHome'
import Rules from './Pages/Rules'
import ContainerQuestions from './containers/ContainerQuestions'
import ContainerResults from './containers/ContainerResults'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }

    this.handleCount = this.handleCount.bind(this)
  }

  handleCount(count) {
    this.setState({
      count
    })
  }

  render() {
    const { onGetChangePage } = this.props
    const { data: page } = this.props
    const { count } = this.state
    return (
      <div className='start-container'>
        {page === 'home' ? <ContainerHome callChangePage={onGetChangePage} /> : null}
        {page === 'rules' ? <Rules callChangePage={onGetChangePage} /> : null}
        {page === 'questions' ? <ContainerQuestions callChangePage={onGetChangePage} handleCount={this.handleCount} /> : null}
        {page === 'results' ? <ContainerResults count={count} /> : null}
      </div>
    )
  }
}

export default App
