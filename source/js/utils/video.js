function findVideos() {
  let videos = document.querySelectorAll('.fitness-room__video');

  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  let link = video.querySelector('.fitness-room__video-link');
  let button = video.querySelector('.fitness-room__video-button');
  // eslint-disable-next-line
  let id = getElementById('.fitness-room__video');

  video.addEventListener('click', () => {
    let iframe = createIframe(id);

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('fitness-room__video--enabled');
}

// function parseMediaURL(link) {
//   let regexp = /https:\/\/www\.youtu\.be\.com\/watch?v=\/([a-zA-Z0-9_-]+)/i;
//   let url = link.src;
//   let match = url.match(regexp);

//   return match[1];
// }

function createIframe(id) {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('fitness-room__video-image');

  return iframe;
}

function generateURL(id) {
  let query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
}

if (findVideos) {
  findVideos();
}
