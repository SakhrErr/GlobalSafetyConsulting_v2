// scroll animation
$('.navbar a').on('click', function(e) {
    if(this.hash !== ''){
        // e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
    }
})

$('#nosServices a').on('click', function(e) {
    if(this.hash !== ''){
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
    }
})

// nosSecteurs swiper
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  // chiffres counter 
  const counters = document.querySelectorAll('.counterUp');
  const speed = 200;
  const chiffre = document.getElementById('chiffresCles');

  $(window).scroll(function() {
    counters.forEach(counter => {
        const updateCount = () =>{
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const inc = target / speed;

            if( $(window).scrollTop() > chiffre.getBoundingClientRect().y + $(document).height()/2 ){
                if(count < target){
                    counter.innerText = Math.ceil(count + inc);
                    if(target < 50){
                        setTimeout(updateCount, 30);
                    } else{
                        setTimeout(updateCount, 1);
                    }
                }
                else{
                    count.innerText = target;
                }
    
            }
        }
        
        updateCount();
        
    });
})