import { User } from './user.model.js';
import { Course } from './course.model.js';
import { Material } from './material.model.js';
import {Test} from './test.model.js';
import { Question } from './question.model.js';



User.hasMany(Course, { foreignKey: 'FK_user' });
Course.belongsTo(User, { foreignKey: 'FK_user' });


Course.hasMany(Material, { foreignKey: 'FK_course' });
Material.belongsTo(Course, { foreignKey: 'FK_course' });

Course.hasMany(Test, {foreignKey: 'FK_course'})
Test.belongsTo(Course, {foreignKey: 'FK_course'})


Test.hasMany(Question, { foreignKey: 'FK_test' });
Question.belongsTo(Test, { foreignKey: 'FK_test' });