(function(){
    //MOVE TITLE PRICING
   document.addEventListener("DOMContentLoaded", function(event) {
    
       var card = document.querySelector('.Service-cards')
       if(card){
       card.addEventListener('scroll', check);
       }
    toggleModal();
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
        console.log('see')
        if(seeLess.innerHTML === 'See less'){
            seeLess.innerHTML = 'See more'
        } else if(seeLess.innerHTML ==='See more') {
            seeLess.innerHTML = 'See less'
        }
        
    }

    function toggleFill(elements, num){
        console.log(num)
        for (var i = 0; i < elements.length; i++) {
            console.log(i)
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