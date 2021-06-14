var polyslideIndex = 1;
            polyshowSlides(polyslideIndex);
            
            function polySlides(p) {
              polyshowSlides(polyslideIndex += p);
            }
            
            function currentPolySlide(p) {
              polyshowSlides(polyslideIndex = p);
            }
            
            function polyshowSlides(p) {
              var i;
              var polyslides = document.getElementsByClassName("mypolyslide");
              var slide_button = document.getElementsByClassName("slide_button");
              if (p > polyslides.length) {polyslideIndex = 1}    
              if (p < 1) {polyslideIndex = polyslides.length}
              for (i = 0; i < polyslides.length; i++) {
                  polyslides[i].style.display = "none";  
              }
              for (i = 0; i < slide_button.length; i++) {
                  slide_button[i].className = slide_button[i].className.replace(" active", "");
              }
              polyslides[polyslideIndex-1].style.display = "block";  
              slide_button[polyslideIndex-1].className += " active";
            }