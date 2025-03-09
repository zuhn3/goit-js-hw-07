const categoriesList = document.querySelector("#categories");
const categoryItems = document.querySelectorAll(".item");
console.log(`кількість категорій:${categoryItems.length}`);

categoryItems.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const itemsCount = item.querySelectorAll("li").length;
  
  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${itemsCount}`);
});