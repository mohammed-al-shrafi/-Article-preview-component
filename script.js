const share = document.querySelector('.share__img');

share.addEventListener('click', () => {
  share.parentElement.classList.toggle('dark-grayish-bg');
  document.querySelector('.socail__media').classList.toggle('visible');
});
