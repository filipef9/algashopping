import productsMock from '../../mocks/productsList.json';

const selectProductOnAvailableProductsList = (products, productId) => {
  const productsUpdated = [...products];
  const productIndex = productsUpdated.findIndex(product => product.id === productId);

  const productToUpdateFound = productIndex || productIndex >= 0;
  if (productToUpdateFound) {
    const productToUpdate = productsUpdated[productIndex];
    productsUpdated[productIndex] = {
      ...productToUpdate,
      checked: !productToUpdate.checked
    }

    return productsUpdated;

  }
};

const reducer = (state = productsMock.products, action) => {
  switch (action.type) {
    case 'SELECT_PRODUCT':
      return selectProductOnAvailableProductsList(state, action.payload)  

    default:
      return state;
  }
};

export default reducer;
