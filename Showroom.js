 
 
 export default class Showroom {
     constructor(id,city,district){
        this.id = id;
        this.city = city;
        this.district = district;
        this.inventory = [];
     }

     get id(){
         return this.id;
     }

     get city(){
         return this.city;
     }

     get district() {
         return this.district;
     }

     get inventory(){
         return this.inventory;
     }

     set inventory(inventory){
         this.inventory = inventory;
     }

     addToInventory(car){
         this.inventory.push(car);
     }

     
 }