(function(){
   document.addEventListener("DOMContentLoaded", function(event) {
       
       let cards = document.querySelector('.Service-cards');
      
       let title = document.querySelector('.Service-titles');
       
       cards.addEventListener('scroll', check)
        

    });

    let check = debounce(checkScroll(),200)

    function checkScroll (){
        let current = 0;
         let title = document.querySelector('.Service-titles');
        
        return function(){
        if(this.scrollTop <= 32){
            
            title.classList.add('Service-title-month');
            title.classList.remove('Service-title-catch');
            title.classList.remove('Service-title-pay');
            title.classList.remove('Service-title-consult');
            title.classList.remove('Service-title-tax');
        }
        else if (this.scrollTop > 32 && this.scrollTop <= 632){
            title.classList.remove('Service-title-month');
            title.classList.remove('Service-title-catch');
            title.classList.remove('Service-title-pay');
            title.classList.remove('Service-title-consult');
            title.classList.add('Service-title-tax');

        } else if (this.scrollTop > 632 && this.scrollTop <= 1232){
           title.classList.remove('Service-title-month');
            title.classList.add('Service-title-catch');
            title.classList.remove('Service-title-pay');
            title.classList.remove('Service-title-consult');
            title.classList.remove('Service-title-tax');
        } 
        else if (this.scrollTop > 1232 && this.scrollTop <=1832){
            title.classList.remove('Service-title-month');
            title.classList.remove('Service-title-catch');
            title.classList.add('Service-title-pay');
            title.classList.remove('Service-title-consult');
            title.classList.remove('Service-title-tax');
        } 
         else {
            title.classList.remove('Service-title-month');
            title.classList.remove('Service-title-catch');
            title.classList.remove('Service-title-pay');
            title.classList.add('Service-title-consult');
            title.classList.remove('Service-title-tax');
        }
        }
        
    }
    function debounce(func, wait, immediate) {
	    let timeout;
        return function() {
            let context = this, args = arguments;
            let later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            let callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
	    };
    };
})();