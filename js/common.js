/*Equalize Heights of Divs Start Here*/
    $.fn.equalizeHeights = function(){
      return this.height( Math.max.apply(this, $(this).map(function(i,e){ return $(e).height() }).get() ) )
    }
/*Equalize Heights of Divs End Here*/
$(document).ready(function() { 
    $('.equalize-height').equalizeHeights(); /*equalize heights function called here*/
    $('.set-max-height').equalizeHeights(); /*equalize heights function called here*/

    
    //<![CDATA[ 
        function resize()
        {
            var heights = window.innerHeight;
            document.getElementById("page-maxheight").style.height = heights + "px";
        }
        resize();
        window.onresize = function() {
            resize();
        };
    //]]>  
});