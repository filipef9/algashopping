export const selectAllProducts = (state) => state.products;

export const selectSelectedProducts = (state) => 
  state.products.filter(product => product.checked);

export const selectSelectedProductsTotalPrice = state => 
  state.products
    .filter(product => product.checked)
    .reduce((sum, product) => sum + product.price, 0);
