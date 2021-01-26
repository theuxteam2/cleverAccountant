(function(){
    //MOVE TITLE PRICING
   document.addEventListener("DOMContentLoaded", function(event) {
        if(localStorage.getItem('package')){
            location.href='#service-1'; 
            var package = localStorage.getItem('package')
            localStorage.removeItem('package');
            var cards = document.querySelector('.Service-cards');
            if(package === 'service-4'){
                location.href='#service-4'
                // cards.scrollTop = 1200
            }
            if(package === 'service-3'){
                // cards.scrollTop = 800
                location.href='#service-3' 

            }
            if(package === 'service-6'){
                location.href='#service-6'
                // cards.scrollTop = 2400
            }
          

        }

        if ( document.URL.includes("service.html") ) {
            localStorage.setItem('location', 'service')

        }else if ( document.URL.includes("pricing.html") ) {
            localStorage.setItem('location', 'pricing')


        }else if ( document.URL.includes("aboutus.html") ) {
            localStorage.setItem('location', 'aboutus')

        }else if ( document.URL.includes("contactus.html") ) {
            localStorage.setItem('location', 'contactus')


        } else {
            localStorage.setItem('location', 'home')
        }

        
        
       var package = document.querySelector('#packages')
       if(package){
           package.value = localStorage.getItem('services')
       }

       
        
      

       function isScrolledIntoView(elem)
        {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();

            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();

            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }

       var serviceCards = document.querySelectorAll('.Service-card');
       if(serviceCards){
           let circles = document.querySelectorAll('.Service-card-circle');
          [...serviceCards].forEach( function(card,i){
               card.addEventListener('mouseover', function(){
               toggleFill(circles,i)
           })
           card.addEventListener('mouseout', function(){
               toggleFill(circles,i);
           })
          })
       }

        var cards = document.querySelector('.Service-cards')
       if(cards){
       cards.addEventListener('scroll', check);
    
        
     
       }

        //Contact page validation
       var name = document.querySelector('#Name')
       if(name){
        name.addEventListener('invalid', validate);

       }
       var email = document.querySelector('#Email')
       if(email){
         email.addEventListener('invalid', validate);


       }
       var modalButton = document.querySelector('.Contact-modal-button')
       if(modalButton){
         modalButton.addEventListener('click', toggleModal);


       }
        var seeLessButton = document.querySelector('.Service-see-less');
        if(seeLessButton){
            seeLessButton.addEventListener('click', toggleLess)
        }

       var closeButton = document.querySelector('.Contact-modal-close');
       if(closeButton){
           closeButton.addEventListener('click', toggleModal)
       }
       

        var learnMoreButtons = document.querySelectorAll('.read-more')
        if(learnMoreButtons){
            [...learnMoreButtons].forEach( function(e) {
                e.addEventListener('click', function (){
                    if(this.innerHTML === 'Read More') {
                        this.innerHTML = 'View Less'
                    } else {
                        this.innerHTML = 'Read More'
                    }
                    this.nextElementSibling.classList.toggle('read-more-show')
                })
            })
        }

       
        var bookingButtons = document.querySelectorAll('.Service-card-button-large');
        if(bookingButtons){
            [...bookingButtons].forEach(function(elem) {
                elem.addEventListener('click', function(e){
                    localStorage.setItem('services', (this.getAttribute('data-service')))
                    window.location.assign('/contactus.html')
                })
            })
        }
        var bookingButtons = document.querySelectorAll('.Service-card-button');
        if(bookingButtons){
            [...bookingButtons].forEach(function(elem) {
                elem.addEventListener('click', function(e){
                    localStorage.setItem('services', (this.getAttribute('data-service')))
                    window.location.assign('/contactus.html')
                })
            })
        }

        var pricingButtons = document.querySelectorAll('.Pricing-card-button');
        if(pricingButtons){
            [...pricingButtons].forEach(function(elem) {
                elem.addEventListener('click', function(e){
                    localStorage.setItem('services', (this.getAttribute('data-service')))
                    window.location.assign('/contactus.html')
                })
            })
        }

        var linkToServicePageLgBtn = document.querySelectorAll('.learn-more-small');
        if(linkToServicePageLgBtn){
            [...linkToServicePageLgBtn].forEach( function(elem){
                elem.addEventListener('click', function(e){
                    e.preventDefault();
                    localStorage.setItem('package', this.getAttribute('data-package'))
                    window.location.assign("/service.html")
                    })

            })
        }
        
       var form = document.querySelector('#Contact-form')
       if(form){
           form.addEventListener('submit', function(e){
               e.preventDefault();
              Email.send({
                    SecureToken : "798b09de-95ac-4f38-9cec-6f4bb9f2bc33",
                    To : 'info@thecleveraccountants.com',
                    From : 'info@thecleveraccountants.com',
                    Subject : "".concat(document.querySelector('#packages').value),
                    Body : "\n                    <div className=\"\">\n                        Name: ".concat(document.querySelector('#Name').value, " <br/>\n                        Email: ").concat(document.querySelector('#Email').value, " <br/>\n                        Business name : ").concat(document.querySelector('#Business').value, "  <br/>\n                        Industry : ").concat(document.querySelector('#Industry').value, " <br/>\n                        Phone Number : ").concat(document.querySelector('#phone').value, " <br/>\n                        Preferred Method of Communication : ").concat(document.querySelector('#communication').value, "\n                        <br/> <br/>\n                        ").concat(document.querySelector('#Message').value, "\n\n                    </div>\n                    ")
                }).then(
               toggleModal()
                );
           })
       }
        
            // The function actually applying the offset
            function offsetAnchor() {
            if (location.hash.length !== 0) {
                var titleService = document.querySelector('#service-1');

               

                
                window.scrollTo(window.scrollX, titleService.getBoundingClientRect().top);
            }
            }

            // Set the offset when entering page with hash present in the url
            window.setTimeout(offsetAnchor, 0);


        var serviceCards= document.querySelector('.Service-cards')
        if(serviceCards){ 
            serviceCards.addEventListener('scroll', function(){
              
                if(this.offsetHeight + this.scrollTop >= this.scrollHeight || this.scrollTop === 0){
                    document.querySelector('.Service').focus();
                    document.querySelector('.Service-quote').focus();
                    window.focus();
                }
            })
           
        }
    //End of document loaded
    });

    var check = debounce(checkScroll(),100)

    var title;
    var currentCircle 
    function checkScroll (){
        var current = 0;
        title = document.querySelector('.Service-titles');

        circles = document.querySelectorAll('.Service-card-circle')
       
        return function(){
        if(this.scrollTop <= 32){
            
            title.classList.add('Service-title-month');
            title.classList.remove('Service-title-catch');
            title.classList.remove('Service-title-pay');
            title.classList.remove('Service-title-consult');
            title.classList.remove('Service-title-tax');
            toggleFill(circles,0)
        }
        else if (this.scrollTop > 32 && this.scrollTop <= 632){
            title.classList.remove('Service-title-month');
            title.classList.remove('Service-title-catch');
            title.classList.remove('Service-title-pay');
            title.classList.remove('Service-title-consult');
            title.classList.add('Service-title-tax');
            toggleFill(circles,1)

        } else if (this.scrollTop > 632 && this.scrollTop <= 1232){
           title.classList.remove('Service-title-month');
            title.classList.add('Service-title-catch');
            title.classList.remove('Service-title-pay');
            title.classList.remove('Service-title-consult');
            title.classList.remove('Service-title-tax');
            toggleFill(circles,2)
        } 
        else if (this.scrollTop > 1232 && this.scrollTop <=1832){
            title.classList.remove('Service-title-month');
            title.classList.remove('Service-title-catch');
            title.classList.add('Service-title-pay');
            title.classList.remove('Service-title-consult');
            title.classList.remove('Service-title-tax');
            toggleFill(circles,3)

            
        } 
         else {
            title.classList.remove('Service-title-month');
            title.classList.remove('Service-title-catch');
            title.classList.remove('Service-title-pay');
            title.classList.add('Service-title-consult');
            title.classList.remove('Service-title-tax');
            toggleFill(circles,4)

        }
        }


        
    }

    //UTILITY FUNCTION
    function sendEmail(){

    }
    var seeLess 
    function toggleLess(){
        document.querySelector('.Service-start-box-container').classList.toggle('Service-start-box-hide');
        seeLess = document.querySelector('.Service-see-less')
        if(seeLess.innerHTML === 'See less'){
            seeLess.innerHTML = 'See more'
        } else if(seeLess.innerHTML ==='See more') {
            seeLess.innerHTML = 'See less'
        }
        
    }

    function toggleFill(elements, num){
        for (var i = 0; i < elements.length; i++) {
            if(i === num){
                elements[i].style.backgroundColor = '#214475'
            } else {
                elements[i].style.backgroundColor = 'white'
            }
}
    }
   
    function validate(e){
        e.preventDefault();
        
        document.querySelector("label[for='Name']").style.color= 'red'
        document.querySelector("label[for='Email']").style.color= 'red'

        document.querySelector('.Contact-form-validation').style.display ='block';
        
    }
    function toggleModal(){
        document.querySelector('.Contact-modal').classList.toggle('Contact-modal-display');
        document.querySelector('.Contact-overlay').classList.toggle('Contact-modal-display');
        document.querySelector("label[for='Name']").style.color= 'white'
        document.querySelector("label[for='Email']").style.color= 'white'

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }
    function debounce(func, wait, immediate) {
	    var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
	    };
    };
})();