export const actionTypes = {
  select_category : 'SELECT_CATEGORY',
}

export const selectCategory = id => ({
  type: actionTypes.select_category,
  payload: id,
});
