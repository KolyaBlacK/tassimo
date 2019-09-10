import { connect } from 'react-redux'
import Results from '../Pages/Results'

const mapStateToProps = (state) => {
  const { data } = state.results

  return { data }
}

const ContainerResults = connect(mapStateToProps)(Results)

export default ContainerResults
