var mongoose = require('mongoose');

// Manuscript Schema
var manuscriptSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	mscollection:{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Collection',
		required: true
	},
	create_date:{
		type:Date,
		default: Date.now
	}
});

var Manuscript = module.exports = mongoose.model('Manuscript', manuscriptSchema);

// Get Manuscripts
module.exports.getManuscripts = function(callback, limit) {
	Manuscript.find(callback).limit(limit).populate('mscollection');
}

// Get a single manuscript by id
module.exports.getManuscriptById = function(id, callback) {
	Manuscript.findById(id, callback).populate('mscollection');
}

// Add a Manuscript
module.exports.addManuscript = function(manuscript, callback) {
	Manuscript.create(manuscript, callback);
}

// Update a manuscript
module.exports.updateManuscript = function(id, manuscript, options, callback) {
	var query = {_id: id};
	var update = {}
	if (manuscript.name) {
		update.name = manuscript.name;
	}
	if (manuscript.collection) {
		update.collection = manuscript.collection;
	}
	Manuscript.findOneAndUpdate(query, update, options, callback);
}

// Delete a manuscript
module.exports.deleteManuscript = function(id, callback) {
	var query = {_id: id};
	Manuscript.remove(query, callback);
}