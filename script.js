const accessKey = ``;

const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector(".search-btn");
const imgGrid = document.querySelector(".image-grid");
const moreSection = document.querySelector(".load-more-section");
const moreBtn = document.querySelector(".load-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
  keyword = searchInput.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;

  console.log(data);

  if( page === 1 ){
     imgGrid.innerHTML = "";
  }

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small; 
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    imgGrid.appendChild(imageLink);
  })
  
  moreSection.style.display = "block";
  
}

searchBtn.addEventListener(`click`, () => {
  page = 1;
  searchImages();
});


moreBtn.addEventListener(`click` , () => {
  page++ ;
  searchImages();
})