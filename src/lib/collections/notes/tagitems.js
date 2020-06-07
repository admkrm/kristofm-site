/* Notes: building a list of notes per tag to be displayed on the tags's page */

module.exports = collection => {
	let resultArrays = {};
	collection.getFilteredByGlob("./src/notes/*.md").forEach(function(item) {
		if(Array.isArray(item.data["tags"])) {
			for(let tag of item.data["tags"]) {
				if( !resultArrays[tag] ) {
					resultArrays[tag] = [];
				}
				resultArrays[tag].push(item);
			}
		}
	});
	return resultArrays;
};
