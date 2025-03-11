const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

const galleryEl = document.querySelector(".gallery");

galleryEl.style.display = "flex";
galleryEl.style.width = "1440px";
galleryEl.style.height = "848px";
galleryEl.style.padding = "100px 156px";
galleryEl.style.flexDirection = "column";
galleryEl.style.flexWrap = "wrap";
galleryEl.style.rowGap = "48px";
galleryEl.style.columnGap = "24px";
galleryEl.style.justifyContent = "center";
galleryEl.style.alignItems = "flex-start";
galleryEl.style.listStyle = "none"; 
galleryEl.style.backgroundColor = "#fff";


const markup = images
  .map(
    ({ url, alt }) =>
      `<li><img src="${url}" alt="${alt}" width="360" height="240"></li>`
  )
  .join("");

galleryEl.insertAdjacentHTML("beforeend", markup);