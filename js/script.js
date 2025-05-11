const slides = [
    {
      image: 'aset/1.jpg',
      text: 'Teks gambar pertama'
    },
    {
      image: 'aset/2.jpg',
      text: 'Teks gambar kedua'
    },
  ];
  
  let index = 0;
  const slider = document.getElementById('slider');
  const caption = document.getElementById('caption');
  
  function updateSlide() {
    slider.style.backgroundImage = `url('${slides[index].image}')`;
    caption.textContent = slides[index].text;
    index = (index + 1) % slides.length;
  }
  
  // Jalankan saat halaman dimuat
  updateSlide();
  setInterval(updateSlide, 5000);
  