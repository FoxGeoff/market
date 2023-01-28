var mongodb = require("mongodb");

var connected = false;

mongodb.MongoClient.connect("mongodb://localhost:27017", {
  useUnifiedTopology: true,
})
  .then((connetion) => {
    connected = true;
    db = connection.db("market");
    console.log("DB Connection Successful");
  })
  .catch((error) => {
    console.log("Error in connecting to DB");
  });

  function queryDealsCollection(){
    // code here
  }
