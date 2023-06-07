import { Course } from "../models/course.model.js";

export class CourseFactory {
    createCourse(courseData) {
        const {
            var_name,
            var_grado_academico
        } = courseData;

        const newCourse = new Course({
            var_name,
            var_grado_academico
        });

        return newCourse;
    }
}