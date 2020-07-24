const services = document.querySelectorAll('.navs a');
const titels   = document.querySelectorAll('.panel-title');
const pannels  = document.querySelectorAll('.panel-collapse');

services.forEach((service, id) => {
    service.addEventListener('click', function(e){
        titels.forEach((title, i) =>{
            if(id === i){
                title.setAttribute('aria-expanded', 'true');
                pannels[i].classList.add('in');
                pannels[i].style.height = '';

            } else {
                title.setAttribute('aria-expanded', 'false');
                pannels[i].classList.remove('in');
                pannels[i].style.height = '0';
            }
        })

        if(this.hash !== ''){
            e.preventDefault();
    
            const hash = this.hash;
    
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700);
        }

        // setTimeout(function(){
        //     window.location = service.href;
        // }, 1)
        
    });
});