import { connect } from 'react-redux'
import Questions from '../Pages/Questions'

const mapStateToProps = (state) => {
  const { data } = state.questions

  return { data }
}

const ContainerQuestions = connect(mapStateToProps)(Questions)

export default ContainerQuestions
