import { User } from './user.model.js';
import { Course } from './course.model.js';

User.hasMany(Course, { foreignKey: 'FK_user' });
Course.belongsTo(User, { foreignKey: 'FK_user' });
