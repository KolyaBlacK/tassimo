export const CHANGE_PAGE = 'CHANGE_PAGE'
export const LOAD_RESULTS_DATA = 'LOAD_RESULTS_DATA'

export function getChangePage(page) {
  return { type: CHANGE_PAGE, page }
}

export function getResultsData() {
  return { type: LOAD_RESULTS_DATA }
}
