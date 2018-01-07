import Car from './Car';

export function CarBuilder(brand,model,year){
    return new Car(brand,model,year);
}