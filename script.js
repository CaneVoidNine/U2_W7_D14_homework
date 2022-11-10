obj = {
  _id: "5d318e1a8541744830bef139",
  name: "app test 1",
  description: "somthing longer",
  brand: "nokia",
  imageUrl:
    "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80",
  price: 100,
  userId: "admin",
  createdAt: "2019-07-19T09:32:10.535Z",
  updatedAt: "2019-07-19T09:32:10.535Z",
  __v: 0,
};

console.log(JSON.stringify(obj));

const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmE4MWQ0YmUzZDAwMTU4NDYwMjYiLCJpYXQiOjE2NjgwODY0MDEsImV4cCI6MTY2OTI5NjAwMX0.ecElZ8gwuFf9laGk7MvkKPExEvdCm2cnS9zzYA2TesA",
  },
};
/* fetch("https://striveschool-api.herokuapp.com/api/product/", {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmE4MWQ0YmUzZDAwMTU4NDYwMjYiLCJpYXQiOjE2NjgwODY0MDEsImV4cCI6MTY2OTI5NjAwMX0.ecElZ8gwuFf9laGk7MvkKPExEvdCm2cnS9zzYA2TesA",
  }, 
});
*/
const loadProducts = async () => {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/product/",
    options
  );
  const product = await response.json();
  return product;
};
const renderData = (product) => {
  let containerRow = document.querySelector(".container .row");
  product.forEach((item) => {
    let column = document.createElement("div");
    column.className = "col-3";
    column.innerHTML = `<div class="card" style="width: 18rem;">
      <img src=${item.imageUrl} class="card-img-top" style="max-height: 25rem" alt="...">
      <div class="card-body" style="height: 10rem">
        <p class="card-text"> ${item.brand} </p>
        <p class="card-text"> ${item.name} </p>
        <p class="card-text"> ${item.description} </p>
        <p class="card-text"> ${item.price} </p>
        <a href="details.html"  class="btn btn-primary">Details</a>
        <a href="backoffice.html"  class="btn btn-primary">Edit</a>
      </div>
    </div>`;
    containerRow.appendChild(column);
  });
};
window.onload = async () => {
  const item = await loadProducts();
  renderData(item);
};
