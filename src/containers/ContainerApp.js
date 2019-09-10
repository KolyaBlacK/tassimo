import { connect } from 'react-redux'
import { getChangePage } from '../actions'
import App from '../App'

const mapStateToProps = (state) => {
  const { data } = state.page

  return { data }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetChangePage: (page) => {
      dispatch(getChangePage(page))
    }
  }
}

const ContainerApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default ContainerApp
