import { connect } from 'react-redux'
import Home from '../Pages/Home'

const mapStateToProps = (state, ownProps) => {
  const { data } = state.home

  return { data, ownProps }
}

const ContainerHome = connect(mapStateToProps)(Home)

export default ContainerHome
