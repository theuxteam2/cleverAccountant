(function(){
   document.addEventListener("DOMContentLoaded", (event) => {
       
       let cards = document.querySelector('.Service-cards')
      
       let title = document.querySelector('.Service-titles')
       cards.addEventListener('scroll', check)
        

    });

    let check = debounce(checkScroll(),200)

    function checkScroll (){
        let current = 0;
         let title = document.querySelector('.Service-titles');
         let compute = window.getComputedStyle(title)
        let computeWidth = compute.width;
        let marginRight = compute.marginRight;
        let section = (+computeWidth.slice(0,computeWidth-2))/5;
        let curMR = +computeWidth.slice(0,marginRight-2);
        console.log(section)
        console.log(compute)
        console.log(computeWidth)
        console.log(curMR)
        console.log(marginRight)
        
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
            current === 4 ? null : current=4;
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