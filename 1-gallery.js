import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as r}from"./assets/vendor-CgTBfC_f.js";console.log("Gallery");const e=[{preview:"./img/1.jpg",original:"./img/1-big.jpg",description:"Photo 1"},{preview:"./img/2.jpg",original:"./img/2-big.jpg",description:"Photo 2"},{preview:"./img/3.jpg",original:"./img/3-big.jpg",description:"Photo 3"},{preview:"./img/row-2-1.jpg",original:"./img/row1-1-big.jpg",description:"Photo 4"},{preview:"./img/row-2-2.jpg",original:"./img/row1-2-big.jpg",description:"Photo 5"},{preview:"./img/row-2-3.jpg",original:"./img/row1-3-big.jpg",description:"Photo 6"},{preview:"./img/row-3-1.jpg",original:"./img/row3-1-big.jpg",description:"Photo 7"},{preview:"./img/row-3-2.jpg",original:"./img/row3-2-big.jpg",description:"Photo 8"},{preview:"./img/row-3-3.jpg",original:"./img/row3-3-big.jpg",description:"Photo 9"}],p=document.querySelector(".gallery"),l=e.map(({preview:i,original:o,description:g})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${o}">
          <img
            class="gallery-image"
            src="${i}"
            alt="${g}"
          />
        </a>
      </li>
    `).join("");p.innerHTML=l;new r(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
