const Course = require("../models/Course");

class SiteController {
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        // res.json(courses);
        res.render("pages/home", {
          title: "Homepage",
          courses,
        });
      })
      .catch((error) => {
        // res.status(400).json({ error });
        next(error);
      });
  }
}

module.exports = new SiteController();
