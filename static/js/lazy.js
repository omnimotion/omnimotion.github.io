// document.addEventListener("DOMContentLoaded", function() {
//   var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

//   if ("IntersectionObserver" in window) {
//     var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
//       entries.forEach(function(video) {
//         if (video.isIntersecting) {
//           for (var source in video.target.children) {
//             var videoSource = video.target.children[source];
//             if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
//               videoSource.src = videoSource.dataset.src;
//             }
//           }

//           video.target.load();
//           video.target.classList.remove("lazy");
//           lazyVideoObserver.unobserve(video.target);
//         }
//       });
//     });
//     lazyVideos.forEach(function(lazyVideo) {
//       lazyVideoObserver.observe(lazyVideo);
//     });
//   }
// });


document.addEventListener("DOMContentLoaded", function () {
  // Get all carousel video elements
  var carouselVideos = document.querySelectorAll(".carousel-video");

  carouselVideos.forEach(function (video) {
    // Get the video source URL from the data-src attribute
    var videoSource = video.getAttribute("data-src");

    // Set the source URL of the video element
    video.setAttribute("src", videoSource);
    video.autoplay = true;
  });
});
