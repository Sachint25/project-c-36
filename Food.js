class Food {
  constructor(){
  this.foodStock=0;
  this.lastFed;
  this.image=loadImage('images/Milk.png');
  }

 updateFoodStock(foodStock){
  this.foodStock=foodStock;
 }

 getFedTime(lastFed){
   this.lastFed=lastFed;
 }

 deductFood(){
   if(this.foodStock>0){
    this.foodStock=this.foodStock-1;
   }
  }

  getFoodStock(){
    return this.foodStock;
  }

bedRoom(){
  background(bedroomIMG,550,500)
}
garden(){
  background(gardenIMG,550,500)
}
washroom(){
  background(bathroomIMG,550,500)
}

  display(){
    var x=80,y=100;
    
    imageMode(CENTER);   
    if(this.foodStock!=0){
      for(var i=0;i<this.foodStock;i++){
        if(i%10==0){
          x=350;
          y=y+50;
        }
        image(this.image,x,y,50,50);
        x=x+30;
      }
    }
  }
}