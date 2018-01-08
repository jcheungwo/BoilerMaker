const Student = db.define('Student', {
	firstName: {type: Sequelize.STRING, allowNull: false},
	lastName: {type: Sequelize.STRING, allowNull: false},
	email: {type: Sequelize.STRING, allowNull: false, validate: {
		isEmail: true, notEmpty: true
	}},
	gpa: {type: Sequelize.FLOAT},
	name: {type: Sequelize.VIRTUAL,
	get () {
		return this.getDataValue('firstName') + ' ' + this.getDataValue('lastName');
	}}
});