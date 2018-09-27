let nodes = document.getElementsByClassName('paralaxContainer');
const images = [...nodes];

const calculatePosition = image => {
  const windowHeight = window.innerHeight;
  const speed = image.dataset.speed ? image.dataset.speed : 1;
  const scroll = image.offsetTop - window.scrollY;
  let calculatedPosition = scroll / windowHeight * 100 * speed + (100 - 100 * speed ) / 2;
  if(image.dataset.invert) calculatedPosition = 100 - calculatedPosition;
  image.style.backgroundPositionY = `${calculatedPosition}%`;
}

images.forEach(image => {
  image.style.backgroundImage = `url('${image.dataset.image}')`;
  calculatePosition(image);
});

const handleScroll = () => images.forEach(image => calculatePosition(image));

window.addEventListener('scroll', handleScroll)