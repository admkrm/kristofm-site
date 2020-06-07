/* Writing: building a list of tags to be displayed on the search page */

const sortAphabetical = (x, y) => {
	if(x.toLowerCase() !== y.toLowerCase()) {
		x = x.toLowerCase();
		y = y.toLowerCase();
	}
	return x > y ? 1 : (x < y ? -1 : 0);
}

module.exports = collection => {
	let tagSet = new Set();
	collection.getFilteredByGlob("./src/writing/*.md").forEach(function(item) {
		if( "tags" in item.data ) {
			let tags = item.data.tags;
			tags = tags.filter(function(item) {
				switch(item) {
					case "all":
					case "nav":
					case "post":
					case "posts":
						return false;
				}
				return true;
			});
			for (const tag of tags) {
				tagSet.add(tag);
			}
		}
	});
	return [...tagSet].sort(sortAphabetical);
};
