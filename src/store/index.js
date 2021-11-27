import { createStore } from "vuex";

export default createStore({
  state: {
    //this is where all the added item will be stored
    totalprice: 0,
    cart: [],
    codes : [{"menu50":50 ,"menu20":20,"menu10":10, "menu200flat":-200}],
    items :[
      {id: 1, name: "Bacon",price:250,quantity:10, category: ["Meat"],desc:"A meat product traditionally produced from a cut of pork that is taken from the side (belly) or back of the hog. Bacon is processed by brining slabs of the meat, smoke curing it and then cuttting the slabs into strips for easier use for preparation. Strips of bacon can be cut and packaged as thin sliced, which yields up to 36 slices per pound, regular sliced, which yields about 16 to 20 slices per pound, or thick sliced, which yields about 12 to 16 slices per pound.", img:'https://healthyrecipesblogs.com/wp-content/uploads/2018/01/oven-bacon-featured.jpg'},
  
      {id: 2, name: "Fish",price:150,quantity:5, category: ["Seafood","Fresh"],desc:"The term fish is applied to a variety of vertebrates of several evolutionary lines. It describes a life-form rather than a taxonomic group. As members of the phylum Chordata, fish share certain features with other vertebrates. These features are gill slits at some point in the life cycle, a notochord, or skeletal supporting rod, a dorsal hollow nerve cord, and a tail.",img:'https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322522/fresh-fish-on-ice.jpg'},
  
      {id: 3, name: "Chicken",price:200,quantity:9, category: ["Poultry","Fresh"],desc:" One of the most widely domesticated poultry species (Gallus gallus), raised worldwide for its meat and eggs. Descended from the wild red jungle fowl of India, chickens have been domesticated for at least 4,000 years.",img:'https://www.seriouseats.com/thmb/t82X6N4ZwGkFZmWPuCjwT-osL3g=/1500x844/smart/filters:no_upscale()/20210714-potato-starch-fried-chicken-vicky-wasik-seriouseats-20-17e193a6bf274bba9091810a0b18ef89.jpg'},
  
      {id: 4, name: "Beef",price:300,quantity:11, category: ["Meat"],desc:"The best beef is obtained from early maturing, special beef breeds. High-quality beef has firm, velvety, fine-grained lean, bright red in colour and well-marbled. The fat is smooth, creamy white, and well distributed. In young beef the bones are soft, porous, and red; the less desirable mature beef has hard white bones. Beef tenderness and flavour are improved by aging",img:'https://post.healthline.com/wp-content/uploads/2020/08/beef-update-1200x628-facebook-1200x628.jpg'},
  
      {id: 5, name: "Soy Sauce",price:50,quantity:0, category: ["Sauce","Seasoning"],desc:"Soy sauce, a salty brown liquid, is produced from crushed soybeans and wheat that undergo yeast fermentation in salt water for six months to a year or more; it is a ubiquitous ingredient in Asian cooking.",img:'https://www.tasteofhome.com/wp-content/uploads/2020/01/GettyImages-461879075.jpg?fit=700,1024'},
  
      {id: 9, name: "Egg",price:10,quantity:72, category: ["Dairy"],desc:"The content of the hard-shelled reproductive body produced by a bird, considered as food.The whole egg is a source of high-quality protein. In addition, it is an excellent source of all vitamins and contains many essential minerals, including phosphorus and zinc.",img:'https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg'},
  
      {id: 11, name: "Pork",price:200,quantity:12, category: ["Meat"],desc:"Pork is one of the most versatile of meats and is consumed around the world.It is also a good source of vitamins and minerals like phosphorus, selenium, and thiamine. Pork is actually richer in thiamine, a B vitamin required for a range of bodily functions, than other red meats like beef and lamb",img:'https://www.seriouseats.com/thmb/yHg0KQZc928Iqbm8G-aOE91gJb0=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__02__20160208-sous-vide-pork-chop-guide-food-lab-37-9bfa2f9b8a464bccad99ea08423b9d8e.jpg'},
  ]

  },
  //synchronous
  mutations: {
    ADD_TO_CART(state, {cart_item}){

      let boolprod = state.cart.find(item =>{
        return item.item.id == cart_item.itemID;
      });

      if(boolprod){
        var newQuantity = boolprod.quantity + cart_item.quantity;
        if(newQuantity <= boolprod.item.quantity){
          boolprod.quantity += cart_item.quantity;
        }else{
          alert("Not Added. Insufficient Stock.");
        }
        return;
      }

      if(cart_item.quantity > 0){
        const cart = state.cart;
        cart.push(cart_item);
      }

    },
    DELETE_ITEM(state, {item}){
       
      state.cart.forEach(x =>{
        if(item.id == x.item.id){
          x.isDeleted = 1;
        }
      });

       state.cart = state.cart.filter(x =>{
         return item.id != x.item.id;
       });


    },
    // VERIFY_COUPON(state, code ){
    //   console.log(code);
        // let savings = 0;
        // let percent = 0;
    //     let total = state.totalprice;
    //     if(total != 0){
    //       if(code == "menu50"){
    //           percent = 50/100;
    //           savings = total * percent;
    //           state.totalprice -= savings;
    //         }else if(code == "menu20"){
    //           percent = 20/100;
    //           savings = total * percent;
    //           state.totalprice -= savings;
    //         }else if(code == "menu10"){
    //           percent = 20/100;
    //           savings = total * percent;
    //           state.totalprice -= savings;
    //       }else if(code == "menu200flat" && total > 1000){
    //           state.totalprice -= 200;
    //       }
    //     }
    // }
  },

  //asynchronous
  actions: {
  },
  modules: {},
  getters: {
      countItems: (state) => {
        return state.cart.length;
      },
      TotalPrice: (state) =>{
        let total = 0;
        state.cart.forEach(item =>{
          total += item.quantity * item.item.price;
        })

        state.totalprice = total;
        return total;
      },
    
  }

});

