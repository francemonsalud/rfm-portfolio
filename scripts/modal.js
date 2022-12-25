document.querySelectorAll('.cs-eblast-pop').forEach(image =>{
  image.onClick = () => {
    document.querySelectorAll('.popup-image').style.display = 'block';
    document.querySelectorAll('.popup-image img').src = image.getAttribute('src');
  }
});

document.querySelector('.cs-eblast-pop').onclick = () => {
  document.querySelector('.cs-eblast-pop').style.display = 'none';
}