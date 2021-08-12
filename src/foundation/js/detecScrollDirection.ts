


export default {
    lastScrollTop : pageYOffset || document.documentElement.scrollTop,
    returnValue : 0,
    checkScroll : function() {
        const currentScrollPos =  window.pageYOffset || document.documentElement.scrollTop; 
        
        if (currentScrollPos > this.lastScrollTop){
            this.returnValue = 0
        } else if (currentScrollPos < 100) {
            this.returnValue = 0
        } else {
            this.returnValue = 1
        }
        this.lastScrollTop = currentScrollPos <= 0 ? 0 : currentScrollPos; 
        return this.returnValue
    }
}

