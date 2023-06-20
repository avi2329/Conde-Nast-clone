//     const content = document.getElementById('content');
//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     const initialPadding = 20;
//     const maxPadding = 100;

//     let newPadding = initialPadding + scrollTop / 10;
//     newPadding = Math.min(newPadding, maxPadding); // Limit to maxPadding

//     content.style.padding = newPadding + 'px';
// });




























// window.addEventListener('scroll', () => {
//     const video = document.getElementById('my-video');
//     const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
//     const padding = scrollPosition * 0.1;

//     video.style.padding = `${padding}px`;
// });
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//     let i;
//     const slides = document.getElementsByClassName("mySlides");
//     const dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
// }


// window.addEventListener('scroll', () => {
//     var scrollPosition = window.scrollY;
//     var zoomVideo = document.getElementById('zoom-video');
//     var videoContainerHeight = document.getElementById('video-container').clientHeight;

//     if (scrollPosition <= videoContainerHeight) {
//         var zoomFactor = 1 + (scrollPosition / videoContainerHeight);
//         zoomVideo.style.transform = 'scale(' + zoomFactor + ')';
//     } else {
//         zoomVideo.style.transform = 'scale(2)';
//     }
// });
