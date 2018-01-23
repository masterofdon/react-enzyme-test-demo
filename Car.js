
export default class Car {
    
    constructor(id,brand,model,year){
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.year = year; 
    }

    get brand() {
        return this.brand;
    }
    
    set brand(brand) {
        this.brand = brand;
    }

    get model() {
        return this.model; 
    }

    set model(model){
        this.model = model;
    }

    get year() {
        return this.year;
    }

    set year(year){
        this.year = year;
    }

    get carObject(){
        return {
            id : this.id,
            brand : this.brand,
            model : this.model,
            year : this.year
        }
    }
    
}