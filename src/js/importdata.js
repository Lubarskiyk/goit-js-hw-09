import imageData from "../data/gallery.json";
console.log(data);

function showVegetables(jsonObj) {
  const vegetables = jsonObj;
  let vegetableHtml = "";

  for (var i = 0; i < vegetables.length; i++) {
    vegetableHtml += imageVegetable(
      vegetables[i].name,
      vegetables[i].price,
      vegetables[i].image_url,
      vegetables[i].retina_url
    );
  }
  document.querySelector("#vegetablelist").innerHTML = `${vegetableHtml}`;
}
