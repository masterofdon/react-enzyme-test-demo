import NodeCouchDb  from 'node-couchdb';

class DBModule {
    constructor(){
        this.couch = new NodeCouchDb();
    }

    createCouchDB(name,callback){
        if(callback == null || callback === 'undefined')
            return this.couch.createDatabase(name);

        this.couch.createDatabase(name).then(()=>{
            callback('success');
        }, err => {
            callback('error');
        });
    }

    dropCouchDB(name,callback){
        if(callback == null || callback === 'undefined')
            return this.couch.dropDatabase(name);

        this.couch.dropDatabase(name).then(()=>{
            callback('success');
        }, err => {
            callback('error');
        });
    }

    listAllCouchDBs(callback){
        this.couch.listDatabases().then(dbs => {
            if(dbs == null || dbs == 'undefined'){
                return;
            }
            callback(dbs);
        }, err => {
            callback("error"); 
        });
    }

    insertDocumentToCouchDB(dbName,documentId,data,callback){
        this.couch.insert(dbName, {
            _id: documentId,
            field: data
        }).then(({data, headers, status}) => {
            callback(status,data);
        }, err => {
            callback(err.code);
        });
    }

    updateDocument(dbName,documentId,p_data,callback){
        this.getDocumentById(dbName,documentId,function(status,data){
            var _rev = data._rev;
            if(callback == null || callback === 'undefined'){
                return this.couch.update(dbName, {
                    _id: documentId,
                    _rev: _rev,
                    field: p_data
                });
            }
            this.couch.update(dbName, {
                _id: documentId,
                _rev: _rev,
                field: p_data
            }).then(({data, headers, status}) => {
                callback(status,data);
            }, err => {
                callback(err.code);
                // either request error occured 
                // ...or err.code=EFIELDMISSING if either _id or _rev fields are missing 
            });
        }.bind(this));
        
    }

    getDocumentById(dbName,documentId,callback){
        if(callback == null || callback === 'undefined')
            return this.couch.get(dbName,documentId);
        this.couch.get(dbName, documentId).then(({data, headers, status}) => {
            console.log(data);
            console.log(status);
            callback(status,data);
        }, err => {
            console.error(err.code);
            callback('error');
        });
        
    }
}

var this_module = new DBModule();
export default this_module;