module.exports.showAll = function (req, res) {
	// Get Cats from DB
	// Return Results
	res.render('result', {
		'page-title' : "All"
	});
};

module.exports.sortColor = function (req, res) {
	// Get Color in URI
	// Get Cats from DB & Sort
	// Return Results
	res.render('result', {
		'page-title' : "Sort by Color"
	});
};

module.exports.create = function (req, res) {
	// Create new DB entry
	// Render result with DB data
	res.render('result', {
		'page-title' : "Create",
		'alert' : "Kitten created."
	});
};

module.exports.remove = function (req, res) {
	// Find oldest DB record and delete
	// Render result with DB data
	res.render('result', {
		'page-title' : "Delete",
		'alert' : "Oldest cat sent to the country farm."
	});
};