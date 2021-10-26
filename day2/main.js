const items = document.querySelector("#items");

const link = "https://ecuaguia.com/iceland/";

const addVAT = (price) => {
  return (price * 1.245).toFixed(2);
};

const get_items = async (url) => {
  //connect to API
  const conn = await fetch(url);
  // Get the data from the API
  const res = await conn.json();

  console.log(res);

  res.forEach((item) => {
    const divItem =
      /*html*/
      `<div class="item">
        <div>${item.id}</div>
        <div>${item.name}</div>
        <div>${addVAT(item.price)}</div>
        <div><img src="${link}/images/${item.image}"></div>
    </div>`;
    items.insertAdjacentHTML("beforeend", divItem);
  });
};

get_items(link + "api-get-items");
