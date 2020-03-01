const mongoose = require('mongoose');
const { Schema } = mongoose;

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	date: { type: Date, default: Date.now },
});

UserSchema.methods.encryptPassword = async password => {
	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(password, salt);
	return hash;
};

UserSchema.methods.matchPassword = async function(password){
	return await bcrypt.compare(password, this.password);
};

UserSchema.methods.generateAuthToken = async user => {
	const token = jwt.sign({ email: user }, process.env.JWT_KEY);
	return token;
};

module.exports = mongoose.model('User', UserSchema);
