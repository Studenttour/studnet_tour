const blogDisplay = document.getElementById('blogDisplay');

const displayBlogs = (blogs) => {
    blogDisplay.innerHTML = '';
    blogs.forEach(blog => {
        const blogItem = document.createElement('div');
        blogItem.innerHTML = `
            <h2 class='index_blogtitle'>${blog.title}</h2>

            
            
            ${blog.content ? `<div class='divcontenttexst'><p class='index_blogdesc'>${blog.content}</p>`+`<img src="img/calendar2.gif" alt="" class='contetnimg'> </div>`  :''}
           
            ${blog.content1 ? `<div class='divcontenttexst'><p class='index_blogdesc'>${blog.content1}</p>`+`<img src="img/icons8-check-mark.gif" alt="" class='contetnimg'></div>`  :''}
            ${blog.content2 ? `<div class='divcontenttexst'><p class='index_blogdesc'>${blog.content2}</p>`+`<img src="img/mount-48.png" alt="" class='contetnimg'> </div>`  :''}
            ${blog.content3 ? ` <div class='divcontenttexst'><p class='index_blogdesc'>${blog.content3}</p>`+`<img src="img/car.gif" alt="" class='contetnimg'> </div>`  :''}
            ${blog.content4 ? `<div class='divcontenttexst'><p class='index_blogdesc'>${blog.content4}</p>`+`<img src="img/home-48.png" alt="" class='contetnimg'> </div>`  :''}
            ${blog.content5 ? `<div class='divcontenttexst'><p class='index_blogdesc'>${blog.content5}</p>`+`<img src="img/kveba.jpg" alt="" class='contetnimg kveba'> </div>`  :''}
            ${blog.content6 ? `<div class='divcontenttexst'><p class='index_blogdesc'>${blog.content6}</p>`+` </div>`  :''}
            ${blog.content7 ? `<div class='divcontenttexst'><p class='index_blogdesc'>${blog.content7}</p>`+`</div>`  :''}
            ${blog.content8 ? `<div class='divcontenttexst'><p class='index_blogdesc'>${blog.content8}</p>`+`<img src="img/price.png" alt="" class='contetnimg'></div>`  :''}
            ${blog.content9 ? `<div class='divcontenttexst'><p class='index_blogdesc'>`+`<img src="img/error2.png" alt="" class='contetnimg'> `+`<img src="img/error.gif" alt="" class='contetnimg'>${blog.content9}</p></div>`  :''}
           

     
            ${blog.image ? `<img src="${blog.image}" alt="Blog Image" class="index_blogimg">` : ''}
              <div class='blogahrefdiv_wrapper'> <a href="https://www.facebook.com/profile.php?id=61561299120485" target="_blank" class='blogahref'>მოგვწერეთ</a><div
            
        `;
       
        blogDisplay.appendChild(blogItem);
        blogItem.classList.add('blog_item');
    });
};

window.addEventListener('message', (event) => {
    if (event.origin === window.location.origin) {
        displayBlogs(event.data.blogs);
    }
});

// Initial load
const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
displayBlogs(blogs);