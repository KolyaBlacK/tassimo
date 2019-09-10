import { combineReducers } from 'redux'
import { CHANGE_PAGE } from '../actions'
import pagesData from '../stateData/pagesData'
import homeData from '../stateData/homeData'
import questionsData from '../stateData/questionsData'
import resultsData from '../stateData/resultsData'

function page(state = pagesData, action) {
  switch (action.type) {
    case CHANGE_PAGE:
      return Object.assign({}, state, {
        data: action.page
      })

    default:
      return state
  }
}

function home(state = homeData) {
  return state
}

function questions(state = questionsData) {
  return state
}

function results(state = resultsData) {
  return state
}

const appRedusers = combineReducers({
  page,
  home,
  questions,
  results
})

export default appRedusers
