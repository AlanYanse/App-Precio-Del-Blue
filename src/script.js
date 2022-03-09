
const button = document.querySelector("button");
button.addEventListener("click", fetchPrice);


function fetchPrice(){
  const url ="https://www.dolarsi.com/api/api.php?type=valoresprincipales"
  fetch(url)
  .then(response => response.json())
  .then(data => {
    let precioC = document.getElementById("price")
    let precioV = document.getElementById("price2")
    precioC.innerHTML = "Compra: " + data[1].casa.compra;
    precioV.innerHTML = "Venta: " + data[1].casa.venta;
    console.log(data);
  })
  .catch(err => console.log(err))
}
