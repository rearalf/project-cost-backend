const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProjectSchema = new Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	idUser: {type: String, require: true},
	date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Project', ProjectSchema);
