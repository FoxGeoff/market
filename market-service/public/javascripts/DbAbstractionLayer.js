var mongodb = require("mongodb");

var connected = false;
var db = null;

mongodb.MongoClient.connect("mongodb://localhost:27017", {
  useUnifiedTopology: true,
})
  .then((connection) => {
    connected = true;
    db = connection.db("market");
    console.log("DB Connection Successful");
  })
  .catch((error) => {
    console.log("Error in connecting to DB");
  });

async function queryDealsCollection() {
  if (connected) {
    let jsonResponse = {
      handsetCards: [],
      webCards: [],
    };

    const dealsCollectionArray = await db.collection("DEALS").find().toArray();

    dealsCollectionArray.forEach((elm) => {
      let handsetElement = {};
      handsetElement["imageName"] = elm["imageName"];
      handsetElement["title"] = elm["title"];
      handsetElement["rows"] = elm["handsetRows"];
      handsetElement["cols"] = elm["handsetCols"];
      jsonResponse.handsetCards.push(handsetElement);

      let webElement = {};
      webElement["imageName"] = elm["imageName"];
      webElement["title"] = elm["title"];
      webElement["rows"] = elm["webRows"];
      webElement["cols"] = elm["webCols"];
      jsonResponse.webCards.push(webElement);
    });

    return jsonResponse;
  } else {
    return null;
  }
}
module.exports = { queryDealsCollection };
