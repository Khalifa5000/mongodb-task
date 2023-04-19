const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;
const connectionUrl = 'mongodb://127.0.0.1:27017';
const dbName = "project-1";
mongoClient.connect(connectionUrl , (error , res1)=>{
    if (error){
        return console.log("Error has occured")
    }
    console.log("Data is perfect");

    const db = res1.db(dbName);
    db.collection('users').insertOne({
        name: "Ahmed",
        age: 24
    },(error , data)=>{
        if(error){
            console.log("Unable to insert data")
        }
        console.log(data.insertedId)
    })
///////////////////////////////////////////////////////////////////
    db.collection('users').insertOne({
        name: "Mohamed",
        age: 36
    },(error , data)=>{
        if(error){
            console.log("Unable to insert data")
        }
        console.log(data.insertedId)
    })
///////////////////////////////////////////////////////////////
db.collection('users').insertMany(
   [{
        name: "Islam",
        age: 26
    },
    {
        name: "Kareem",
        age: 27
    },
    {
        name: "Reem",
        age: 34
    },
    {
        name: "Ali",
        age: 27
    },
    {
        name: "Mona",
        age: 28
    },
    {
        name: "Rawan",
        age: 27
    },
    {
        name: "Khalifa",
        age: 27
    },
    {
        name: "Gamal",
        age: 28
    },
    {
        name: "Amr",
        age: 27
    },
    {
        name: "Shaimaa",
        age: 28
    }], (error , data)=>{
        if(error){
            console.log("Error has been occurd")
        }
        console.log(data.insertedCount)
    })
    ////////////////////////////////////////////////////////////

    db.collection('users').find({age:27}).toArray((error,users)=>{
        if(error){
           return console.log("Unable to find data")
        }
        console.log(users)
    } )
    ////////////////////////////////////////////////////////

    db.collection('users').find({age:27}).limit(3).toArray((error,users)=>{
        if(error){
            console.log("Unable to find data")
        }
        console.log(users)
    })

///////////////////////////////////////////////////////////////////////
    db.collection('users').updateOne({_id:mongodb.ObjectId("643e855b429799965bfc2a17")}, {
        $set:{name: "hoda"},
        $inc:{age: 4}
    })
    .then((data1)=>{console.log(data1.modifiedCount)})
    .catch((error)=>{console.log(error)})

/////////////////////////////////////////////////////////////////////////
    db.collection('users').updateOne({_id:mongodb.ObjectId("643ed55323771916027316c3")}, {
        $set:{name: "Hassan"},
        $inc:{age:4}
    })
    .then((data1)=>{console.log(data1.modifiedCount)})
    .catch((error)=>{console.log(error)})
    ////////////////////////////////////////////////////////////////
    db.collection('users').updateOne({_id:mongodb.ObjectId("643ed55323771916027316c4")}, {
        $set:{name: "Kenzy"},
        $inc:{age:4}
    })
    .then((data1)=>{console.log(data1.modifiedCount)})
    .catch((error)=>{console.log(error)})
    ////////////////////////////////////////////////////////////////
    db.collection('users').updateOne({_id:mongodb.ObjectId("643ed55323771916027316c5")}, {
        $set:{name: "Hoda"},
        $inc:{age:4}
    })
    .then((data1)=>{console.log(data1.modifiedCount)})
    .catch((error)=>{console.log(error)})
    // ////////////////////////////////////////////////////////////////


    db.collection('users').find({}).limit(4).toArray()
.then((docs) => {
  const ids = docs.map((doc) => doc._id);
  return db.collection('users').updateMany({_id: {$in: ids}}, {
    $set: {name: "Sama"},
    $inc: {age: 4}
});
})
.then((data1) => {
  console.log(data1.modifiedCount);
})
.catch((error) => {
  console.log(error);
});
    //////////////////////////////////////////////////////////////
    db.collection('users').find({age: 27}).limit(4).toArray()
.then((docs) => {
  const ids = docs.map((doc) => doc._id);
  return db.collection('users').updateMany({_id: {$in: ids}}, {$inc: {age: 4}});
})
.then((data1) => {
  console.log(data1.modifiedCount);
})
.catch((error) => {
  console.log(error);
});
//////////////////////////////////////////////////////////////////////
db.collection('users').updateMany({} , {
    $inc:{age:10}
})
.then((data1)=>{console.log(data1.modifiedCount)})
.catch((error)=>{console.log(error)})

////////////////////////////////////////////////////////////////////////

db.collection('users').deleteMany({age:41})
.then((data1)=>{console.log(data1.deletedCount)})
.catch((error)=>{console.log(error)})

})
