import {request as Request} from 'd3-request';

const DATA_CAR = '/api/v1/cars';
const DATA_SHOWROOM = '/api/v1/showrooms';

export default class DataAdapter{

    constructor(token){
       this.token =  token;
    }

    getAllCarData(callback){
        Request(DATA_CAR, (error,response) => {
            if(error){
                throw new Error('Error during Car Data Retrieval');
            }
            var outer_obj = JSON.parse(response.response);
            callback(outer_obj);
        });
    }

    getAllShowroomData(callback){
        Request(DATA_SHOWROOM, (error,response) => {
            if(error){
                throw new Error('Error during Showroom Data Retrieval');
            }
            var outer_obj = JSON.parse(response.response);
            callback(outer_obj);
        });
    }   
}