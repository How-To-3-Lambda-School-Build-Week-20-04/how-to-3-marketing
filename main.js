let textWrapper = document.querySelector('.mane .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letters'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.mane .letters',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.mane',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });