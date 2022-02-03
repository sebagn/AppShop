export const actionTypes = {
    filter_products : 'FILTER_PRODUCTS',
    select_product : 'SELECT_PRODUCT'
}

export const filterProducts = category => ({
  type: actionTypes.filter_products,
  payload: category,
});
export const selectProduct = id => ({
  type: actionTypes.select_product,
  payload: id,
});
