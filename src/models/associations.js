import { User } from './user.model.js';
import { Course } from './course.model.js';
import { Content } from './content.model.js';

User.hasMany(Course, { foreignKey: 'FK_user' });
Course.belongsTo(User, { foreignKey: 'FK_user' });


Course.hasMany(Content, { foreignKey: 'FK_course' });
Content.belongsTo(Course, { foreignKey: 'FK_course' });