window.addEventListener('scroll', function(){
    var header = document.querySelector('.encabezado');
    header.classList.toggle('abajo',window.scrollY>0);
})
/*_________________________________*/

        /*for search bar*/
        $(document).on('click', '.search', function () {
            $('.search-bar').addClass('search-bar-active')
        });
        $(document).on('click', '.search-cancel', function () {
            $('.search-bar').removeClass('search-bar-active')
        });

        /*---Login sign up form*/
        $(document).on('click', '.user,.already-account', function () {
            $('.form').addClass('login-active').removeClass('sign-up-active')
        });

        $(document).on('click', '.sign-up-btn', function () {
            $('.form').addClass('sign-up-active').removeClass('login-active')
        });

        $(document).on('click', '.form-cancel', function () {
            $('.form').removeClass('login-active').removeClass('sign-up-active')
        });
 /*_________________________________*/
         const root = document.documentElement;
         const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
         const marqueeContent = document.querySelector("ul.marquee-content");
         
         root.style.setProperty("--marquee-elements", marqueeContent.children.length);
         
         for(let i=0; i<marqueeElementsDisplayed; i++) {
           marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
         }