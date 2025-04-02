$(function(){var e=["https://web.whatsapp.com/send?phone=917043435987","https://api.whatsapp.com/send?phone=917043435987"];function t(){var t=767.98>$(window).width();$(".set-url-target").attr("href",e[t?1:0])}$(window).on("resize",function(){clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout(t,200)}).trigger("resize")});

document.addEventListener("DOMContentLoaded", function () {
    // Select the gallery link dynamically
    const galleryLink = document.querySelector('.nav-link[href="gallery.html"]');

    if (galleryLink) {
        // Add the disabled class
        galleryLink.classList.add("disabled-gallery");

        // Prevent click action
        galleryLink.addEventListener("click", function (event) {
            event.preventDefault();
        });
    }
});
