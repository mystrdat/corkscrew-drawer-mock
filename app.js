function doTheThing() {
  console.log('wee!');

  const body = document.body,
        drawer = document.querySelector('.drawer');
  
  drawer.addEventListener('click', () => {
    body.classList.toggle('active');
  })
}

document.addEventListener('DOMContentLoaded', doTheThing, false);
