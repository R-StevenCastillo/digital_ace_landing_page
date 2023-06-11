const swiper = new Swiper('.swiper', {
    // Optional parameters
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      initialSlide: 2,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      },
});

const phoneNumber = document.getElementById('phone-number');

phoneNumber.addEventListener('keydown', function() {
    let txt = this.value;
    console.log(txt)
    phoneNumber.setAttribute('maxlength', '9');
    if (txt.length == 4 && event.keyCode !== 8) {
        this.value = this.value + " ";
    }
});