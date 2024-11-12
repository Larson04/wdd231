const products = [
    { id: 1, name: "Product 1", price: 3, image: "https://placehold.co/300" },
    { id: 2, name: "Product 2", price: 5, image: "https://placehold.co/300" },
    { id: 3, name: "Product 3", price: 1, image: "https://placehold.co/300" }
  ];

console.log(window.location);

function getParams(param){
    const paramString = window.location.search;
    const params = new URLSearchParams(paramString);
    return params.get(param);
}

function productTemplate(product){
  return `
    <section class="product">
      <img src="${product.image}" alt="${product.name}">
      <div class="product_details">
        <h2>${product.name}</h2>
        <p>Price: $${product.price}</p>
      </div>
    </section>`;
}

function getProductDetails(){
  const productId = getParams("id");
  const product = products.find(product => product.id == productId);
  return productTemplate(product);
}