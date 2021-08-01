var count=0;
              var adds=document.getElementById("addBanana");
              var tomatoes=document.getElementById("addtomatoes");
              var Onion=document.getElementById("addOnion");
              var Parsley=document.getElementById("addParsley");
              var Coriander=document.getElementById("addCoriander");
              var Orange=document.getElementById("addOrange");
              var Apple=document.getElementById("addApple");
              var Grapes=document.getElementById("addGrapes");
              var KitKat=document.getElementById("addKitKat");
              var Bueno=document.getElementById("addBueno");
              var Flutes=document.getElementById("addFlutes");
              var Flake=document.getElementById("addFlake");


          
          var countCar=document.getElementById("count");
          countCar.innerText=count;
          adds.onclick=addCount;
          tomatoes.onclick=addCount;
          Onion.onclick=addCount;
          Parsley.onclick=addCount;
          Coriander.onclick=addCount;
          Orange.onclick=addCount;
          Apple.onclick=addCount;
          Grapes.onclick=addCount;
          KitKat.onclick=addCount;
          Bueno.onclick=addCount;
          Flake.onclick=addCount;
          Flutes.onclick=addCount;

        
          function addCount(){
              console.log(this.id);
            count+=parseInt(document.getElementById('cous').value);
            countCar.innerText=count

          }