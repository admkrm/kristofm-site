/* Library: building a list of books per photographer to be displayed on the photographer's page */

module.exports = collection => {
	let photographers = {}
	collection.getFilteredByGlob("./src/library/**/*.md").forEach(item => {
		let photographer = item.data.photographer
		if (typeof photographer !== "string")
			return
		if (Array.isArray(photographers[photographer]))
			photographers[photographer].push(item)
		else
			photographers[photographer] = [item]
		})
	 return photographers
};
