const app = document.getElementById("app");

const getAllProducts = function () {
  fetch(`http://localhost:3000/products`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //   console.log(data)
      app.innerHTML = data
        .map((item, index) => {
          // console.log(">>> Check item:", item, "index:", index);

          return `<div>
            <span>${item.name}</span>
            <span>${item.price}</span>
            <span><img src="${item.images}"/></span>
            <span>
                <button>Update</button>
                <button>Delete</button>
            </span>
        </div>`;
        })
        .join("");
    });
};
getAllProducts();
