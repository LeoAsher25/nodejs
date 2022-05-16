const Course = require("../models/Course");

class MeController {
  async show(req, res, next) {
    try {
      const courses = await Course.find({});
      res.render("me/main", {
        title: "Course List",
        courses,
      });
    } catch (error) {
      next(error);
    }
  }

  async editCourse(req, res, next) {
    const course = await Course.findOne({ slug: req.params.slug });
    return res.render("pages/createCourse", {
      title: "Edit a new Course",
      course,
    });
  }

  async deleteCourse(req, res, next) {}
}

module.exports = new MeController();
