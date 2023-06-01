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

    var options = {
      root: null, // Use the viewport as the root element
      rootMargin: "0px", // No margin applied to the root
      threshold: 0.2, // Percentage of the video visible in the viewport
    };

    // Create a new Intersection Observer
    var observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var video = entry.target;
          var videoSource = video.getAttribute("data-src");

          // Set the source URL of the video element
          video.setAttribute("src", videoSource);
          video.autoplay = true;

          // Stop observing the video once it becomes visible
          observer.unobserve(video);
        }
      });
    }, options);

    // Observe each carousel video element
    carouselVideos.forEach(function (video) {
      observer.observe(video);
    });
  });
