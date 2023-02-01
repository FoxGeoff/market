var express = require("express");
var dbAbstractionLayer = require("../public/javascripts/dbAbstractionLayer");

var router = express.Router();

/* GET deals listing. */
router.get("/", function (req, res, next) {
  //   let jsonResponse = {
  //     handsetCards: [
  //       { imageName: "food1", title: "10% off with coupon", cols: 2, rows: 1 },
  //       { imageName: "food2", title: "Flash Sale on Food", cols: 2, rows: 1 },
  //       { imageName: "food3", title: "5% discount for delivery", cols: 2, rows: 1 },
  //       { imageName: "food4", title: "$5 Coupon use '5off' code", cols: 2, rows: 1 },
  //     ],
  //     webCards: [
  //       { imageName: "food1", title: "10% off with coupon", cols: 2, rows: 1 },
  //       { imageName: "food2", title: "Flash Sale on Food", cols: 1, rows: 1 },
  //       { imageName: "food3", title: "5% discount for delivery", cols: 1, rows: 2 },
  //       { imageName: "food4", title: "$5 Coupon use '5off' code", cols: 1, rows: 1 },
  //     ],
  //   };
  //   res.json(jsonResponse);
  // });

  /**
   * For Testing
   *
   * setTimeout(() => {
   * ...
   * ...
   * }, 100);
   *
   * //change 3000(in miliseconds, 1000ms == 1sec) for testing!
   *
   **/

  setTimeout(() => {

    dbAbstractionLayer
      .queryDealsCollection()
      .then((response) => {
        res.json(response);
      })
      .catch((error) => {
        res.status(500).json({});
      });

  }, 3000);
});

//create a database abstration layer (DAL)

module.exports = router;
