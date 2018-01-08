import DBModule from '../DBModule';

describe('Test DB Operations ' ,() => {

    test('Should return no DBs',(done) => {
        var x = DBModule.listAllCouchDBs(function(e){
            console.log(e);
            expect(e.length).toBe(0);
            done();
        });
    });

    describe("Should CouchDB Create DB, List the created and Drop successfully", () => {
        test('Should successfully create CouchDB' , (done) => {
            DBModule.createCouchDB('test_db',function(e){
                expect(e).toBe('success');
                done();
            });
        });
        test('Should successfully list lastly created CouchDB' , (done) => {
            DBModule.listAllCouchDBs(function(e){
                expect(e.length).toBe(1);
                expect(e[0]).toBe('test_db');
                console.log(e);
                done();
            });
        });
        test('Should successfully drop lastly created CouchDB' , (done) => {
            DBModule.dropCouchDB('test_db',function(e){
                expect(e).toBe('success');
                done();
            });
        });
    });

    describe("Should CouchDB insert documents", () => {
        beforeAll(() => {
            return DBModule.createCouchDB('cars_db').then(()=> {
                console.log("Successfully Created cars_db");
            }, err => {
                console(err);
            });
            
        });
        test('Should successfully insert document to db' , (done) => {
            DBModule.insertDocumentToCouchDB('cars_db','carlist',{brand : 'tesla' , model : 'model-s'},function(status,data){
                expect(data.ok).toBe(true);
                DBModule.getDocumentById('cars_db','carlist',function(status,data){
                    expect(data.field.model).toBe('model-s');
                    done();
                });
            });
        });
        test('Should successfully get document from db' , (done) => {
            DBModule.getDocumentById('cars_db','carlist',function(status,data){
                expect(status).toBe(200);
                done();
            });
        });
        test('Should return error insert another document to db' , (done) => {
            DBModule.insertDocumentToCouchDB('cars_db','carlist',{ brand : 'tesla' , model : 'model-x'},function(e){
                expect(e).toBe('EDOCCONFLICT');
                done();
            });
        });
        test('Should return success update document to db' , (done) => {
            DBModule.updateDocument('cars_db','carlist',{ brand : 'tesla' , model : 'model-x'},function(status,data){
                expect(data.ok).toBe(true);
                DBModule.getDocumentById('cars_db','carlist',function(status,data){
                    expect(data.field.model).toBe('model-x');
                    done();
                });
            });
        });
        afterAll(() => {
            DBModule.dropCouchDB('cars_db').then(()=>{
                console.log("Successfully Dropped cars_db");
            }, err => {
                console.error(err);
            })
        });
    });

});