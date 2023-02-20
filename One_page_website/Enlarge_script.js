      // script for enlarging images by click
	  function imgEnlarge(e){

            if(e.style.width=="300px" || e.style.width=="" ){
                e.style.width="400px";
            }
            else{
                e.style.width="300px";
            }

            var imgLength = document.getElementsByTagName('img').length;

            for(var i = 0; i<imgLength; i++){
                if(document.getElementsByTagName('img')[i].id==  e.id){
                    continue;
                }
                document.getElementsByTagName('img')[i].style.width="300px";

            }
        }