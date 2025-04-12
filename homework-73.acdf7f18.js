const s=s=>(console.log("wwww"),fetch(`https://pixabay.com/api/?key=49689044-b50b4b2a27f84104cd981c364&page=${s+1}&image_type=photo&per_page=12&colors=pink,green&orientation=horizontal`).then(s=>s.json())),a=(s,a)=>{let e="";console.log(s),s.hits.map(s=>{e+=`<li class="item">
                <img class="image" src="${s.webformatURL}" alt="">
                <div class="content">
                    <h2 class="title">Owner: <span class="data">${s.user}</span></h2>
                    <p class="text">Collections: <span class="data">${s.collections}</span></p>
                    <p class="text">Likes: <span class="data">${s.likes}</span></p> 
                    <p class="text">Comments: <span class="data">${s.comments}</span></p>  
                    <p class="text">Views: <span class="data">${s.views}</span></p> 
                    <p class="text">Downloads: <span class="data">${s.downloads}</span></p> 
                    <p class="text">Tags: <span class="data">${s.tags}</span></p> 
                </div>
            </li>`}),a.insertAdjacentHTML("beforeend",e)},e=s=>{localStorage.setItem("page",s)},t=document.querySelector("#list"),l=document.querySelector("#btn");let n=1;localStorage.getItem("page")&&(n=Number.parseInt(localStorage.getItem("page")));for(let e=0;e<n;e+=1)s(e).then(s=>{console.log(s),a(s,t,n)});l.addEventListener("click",()=>{e(n+=1),s(n).then(s=>{a(s,t,n)})});
//# sourceMappingURL=homework-73.acdf7f18.js.map
