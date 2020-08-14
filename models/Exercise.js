const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
	// creates type attribute
	type: {
		type: String,
		unique: false,
	},
	// creates name attribute
	name: {
		type: String,
		unique: false,
	},
	// creates duration attribute
	duration: {
		type: Number,
		unique: false,
	},
	// creates weight attribute
	weight: {
		type: Number,
		unique: false,
	},
	// creates reps attribute
	reps: {
		type: Number,
		unique: false,
	},
	// creates sets attribute
	sets: {
		type: Number,
		unique: false,
	},
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
