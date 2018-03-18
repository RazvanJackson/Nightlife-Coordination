const axios = require("axios");
const passport = require("passport");
const passport_twitter = require("../passports/passport-index");

const LocationsDB = require("../models/locations");

module.exports = app => {
  app.get("/", function(req, res) {
    res.send(req.user);
  });

  app.get("/redirect", function(req, res) {
    res.redirect("http://localhost:8080/");
  });

  app.post("/going", function(req, res) {
    if (!req.user) {
      res.send({ error: true, message: "User not logged in" });
    }
  });

  app.post("/get_data", function(req, res) {
    const location_data = req.body.location;

    axios
      .create({
        baseURL: `https://api.yelp.com/v3/businesses/search?location=`,
        headers: {
          Authorization:
            "Bearer d-VlaOJyoCfdvazv9h4n6T6kCkDgtmmXyz292fu-Op4_82pCPdLie9jMtUV94CdaipbPweR4-SG0TuGCKmaf5hCFcWyWn-5Fnmv1KxKaj8ofjxqgMS0QKhIYyeOkWnYx"
        }
      })
      .get(location_data)
      .then(data => {
        if (data.data.businesses.length == 0) res.send(null);
        else {
          data.data.businesses.map(function(business, index) {
            LocationsDB.findOne(
              {
                name: business.name
              },
              function(err, business_found) {
                if (!business_found) {
                  let newBusiness = new LocationsDB({
                    location: location_data,
                    name: business.name,
                    image_url: business.image_url,
                    rating: business.rating,
                    going: []
                  });
                  newBusiness.save(function() {
                    if (index == data.data.businesses.length - 1) {
                      LocationsDB.find(
                        {
                          location: location_data
                        },
                        function(err, business_array) {
                          if (business_array.length > 0)
                            res.send(business_array);
                          else res.send(null);
                        }
                      );
                    }
                  });
                } else if (index == data.data.businesses.length - 1) {
                  LocationsDB.find(
                    {
                      location: location_data
                    },
                    function(err, business_array) {
                      if (business_array.length > 0) res.send(business_array);
                      else res.send(null);
                    }
                  );
                }
              }
            );
          });
        }
      })
      .catch(error => {
        res.send(null);
      });
  });

  app.get("/auth/twitter", passport.authenticate("twitter"));

  app.get("/auth/twitter/callback", passport.authenticate("twitter"), function(
    req,
    res
  ) {
    res.redirect("/redirect");
  });
};
