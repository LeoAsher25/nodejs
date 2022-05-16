const Course = require("../models/Course");
const mongoose = require("mongoose");

class CoursesController {
  showList(req, res, next) {
    Course.find({}).then((courses) =>
      res.render("pages/courses", {
        title: "Course List",
        courses,
      })
    );
  }

  async showOne(req, res, next) {
    console.log("slug", req.params.slug);
    const course = await Course.findOne({ slug: req.params.slug });
    return res.render("pages/courseDetail", {
      title: "Course Detail",
      course,
    });
  }

  async createCourse(req, res, next) {
    return res.render("pages/createCourse", {
      title: "Create a new Course",
    });
  }

  async storeCourse(req, res, next) {
    try {
      console.log("test: ", req.body);
      // const newCourse = new Course();
      const response = await Course.create(req.body);

      // res.json(req.body);
      return res.send(`<a href="/courses">
    <button class="btn btn-outline-primary">Go to Course List</button>
  </a>`);
    } catch (error) {
      console.log("Error when create course", error);
    }
  }
}

module.exports = new CoursesController();
