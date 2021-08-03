var count=0;
var order=[];
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
              let idButtoun=this.id;
            count+=parseInt(document.getElementById('cous6').value);
            countCar.innerText=count
            switch(idButtoun){
              case 'addBanana':
               let item=document.getElementById('item6').innerHTML;
               let priceFiled=document.getElementById("price6").innerHTML;
               let arrPric=priceFiled.split(':');
               let coun=parseInt(document.getElementById('cous6').value);
               let priceite=parseInt(arrPric[1]);
               //let total=coun*priceite;
               order.push(
                 {
                   itemName:item,
                   price:priceite,
                   count:coun,
                 }
               );
               localStorage.setItem('order',order);
               console.log(order);
              break;


              case 'addtomatoes':
                 alert("Ss")
                let item2=document.getElementById('item1').innerHTML;
                let priceFiled2=document.getElementById("price1").innerHTML;
                let arrPric2=priceFiled2.split(':');
                let coun2=parseInt(document.getElementById('count1').value);
                let priceite2=parseInt(arrPric2[1]);
                //let total=coun*priceite;
                order.push(
                  {
                    itemName:item2,
                    price:priceite2,
                    count:coun2,
                  }
                );
 
                console.log(order); 

              break;
              case'addOnion':
              let item3=document.getElementById('item3').innerHTML;
              let priceFiled3=document.getElementById("price3").innerHTML;
              let arrPric3=priceFiled3.split(':');
              let coun3=parseInt(document.getElementById('count3').value);
              let priceite3=parseInt(arrPric3[1]);
              //let total=coun*priceite;
              order.push(
                {
                  itemName:item3,
                  price:priceite3,
                  count:coun3,
                }
              );

              console.log(order); 

              break;
              case 'addParsley':
                let item4=document.getElementById('item4').innerHTML;
                let priceFiled4=document.getElementById("price4").innerHTML;
                let arrPric4=priceFiled4.split(':');
                let coun4=parseInt(document.getElementById('count4').value);
                let priceite4=parseInt(arrPric4[1]);
                //let total=coun*priceite;
                order.push(
                  {
                    itemName:item4,
                    price:priceite4,
                    count:coun4,
                  }
                );
 
                console.log(order); 

              break;
              case 'addCoriander':
                let item5=document.getElementById('item5').innerHTML;
                let priceFiled5=document.getElementById("price5").innerHTML;
                let arrPric5=priceFiled5.split(':');
                let coun5=parseInt(document.getElementById('count1').value);
                let priceite5=parseInt(arrPric5[1]);
                //let total=coun*priceite;
                order.push(
                  {
                    itemName:item5,
                    price:priceite5,
                    count:coun5,
                  }
                );
 
                console.log(order); 

                break;
                case 'addOrange':
                  let item7=document.getElementById('item7').innerHTML;
                  let priceFiled7=document.getElementById("price7").innerHTML;
                  let arrPric7=priceFiled7.split(':');
                  let coun7=parseInt(document.getElementById('count1').value);
                  let priceite7=parseInt(arrPric7[1]);
                  //let total=coun*priceite;
                  order.push(
                    {
                      itemName:item7,
                      price:priceite7,
                      count:coun7,
                    }
                  );
   
                  console.log(order); 
  
                  break;
                  case 'addApple':
                    let item8=document.getElementById('item8').innerHTML;
                    let priceFiled8=document.getElementById("price8").innerHTML;
                    let arrPric8=priceFiled8.split(':');
                    let coun8=parseInt(document.getElementById('count1').value);
                    let priceite8=parseInt(arrPric8[1]);
                    //let total=coun*priceite;
                    order.push(
                      {
                        itemName:item8,
                        price:priceite8,
                        count:coun8,
                      }
                    );
     
                    console.log(order); 
    
                    break;
                case 'addGrapes':
                  let item9=document.getElementById('item9').innerHTML;
                  let priceFiled9=document.getElementById("price9").innerHTML;
                  let arrPric9=priceFiled9.split(':');
                  let coun9=parseInt(document.getElementById('count1').value);
                  let priceite9=parseInt(arrPric9[1]);
                  //let total=coun*priceite;
                  order.push(
                    {
                      itemName:item9,
                      price:priceite9,
                      count:coun9,
                    }
                  );
   
                  console.log(order); 
  

                break;
                case 'addKitKat':
                  let item10=document.getElementById('item10').innerHTML;
                  let priceFiled10=document.getElementById("price10").innerHTML;
                  let arrPric10=priceFiled10.split(':');
                  let coun10=parseInt(document.getElementById('count10').value);
                  let priceite10=parseInt(arrPric10[1]);
                  //let total=coun*priceite;
                  order.push(
                    {
                      itemName:item10,
                      price:priceite10,
                      count:coun10,
                    }
                  );
   
                  console.log(order); 
  
                  break;
 
                  case 'addBueno':
                    let item11=document.getElementById('item11').innerHTML;
                    let priceFiled11=document.getElementById("price11").innerHTML;
                    let arrPric11=priceFiled11.split(':');
                    let coun11=parseInt(document.getElementById('count11').value);
                    let priceite11=parseInt(arrPric11[1]);
                    //let total=coun*priceite;
                    order.push(
                      {
                        itemName:item11,
                        price:priceite11,
                        count:coun11,
                      }
                    );
     
                    console.log(order); 
    
                  break;
                  case 'addFlutes':
                    break;
                    case 'addFlake':
                      break;
            }
              let orders=[]; 
            order.forEach(item=>{
              let c=JSON.stringify(item);
              let b=JSON.parse(c);
              console.log("ss "+b.price);
              orders.push(b.itemName+"-"+b.count+"-"+b.price);
            })
                 console.log(orders);
            localStorage.setItem("orders",JSON.stringify(orders));
           

          }

          