const { ObjectId } = require('mongodb');
const conn = require('./conn');
const DATABASE = 'sample_analytics';
const CUSTOMERS = 'customers';

async function getAllCustomers(pageSize, page){
    const connectiondb = await conn.getConnection();
    const customers = await connectiondb
                        .db(DATABASE)
                        .collection(CUSTOMERS)
                        .find({}).limit(pageSize).skip(pageSize * page)
                        .toArray();    
    return customers;
}

async function getCustomerById(id){
    const connectiondb = await conn.getConnection();
    const customer = await connectiondb
                        .db(DATABASE)
                        .collection(CUSTOMERS)
                        .findOne({_id:new ObjectId(id)});    
    return customer;
}

async function getCustomerByEmail(email){
    const connectiondb = await conn.getConnection();
    const customer = await connectiondb.findOne
                        .db(DATABASE)
                        .collection(CUSTOMERS)
                        .findOne({email: email});    
    return customer;
}


async function getCustomersFourAccounts(){
    const connectiondb = await conn.getConnection();
    const customers = await connectiondb
                        .db(DATABASE)
                        .collection(CUSTOMERS)
                        .toArray()
                            
                        
    return customers;
}

module.exports = {getAllCustomers, getCustomerById, getCustomerByEmail, getCustomersFourAccounts};