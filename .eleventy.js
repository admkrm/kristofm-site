const pluginRss = require("@11ty/eleventy-plugin-rss");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(config) {
			// Plugins
			config.addPlugin(pluginRss);
			config.addPlugin(eleventyNavigationPlugin);

			// Filters
			config.addFilter('head', require('./src/lib/filters/head.js'));
			config.addFilter('dateFilter', require('./src/lib/filters/date-filter.js'));

			// Collections
			config.addCollection("home", function(collection) {return collection.getFilteredByGlob(["./src/writing/*.md", ".src/gallery/*.md","./src/notes/*.md","./src/links/*.md"]);});
			config.addCollection("homeTags", require('./src/lib/collections/home/taglist.js'));
			config.addCollection("homeCategories", require('./src/lib/collections/home/categorylist.js'));
			config.addCollection("homeTagCollections", require('./src/lib/collections/home/tagitems.js'));
			config.addCollection("homeCategoryCollections", require('./src/lib/collections/home/categoryitems.js'));


			config.addCollection("notes", function(collection) {
				const coll = collection.getFilteredByGlob("./src/notes/*.md");
				for(let i = 0; i < coll.length ; i++) {
			    const prevPost = coll[i-1];
			    const nextPost = coll[i + 1];

			    coll[i].data["prevPost"] = prevPost;
			    coll[i].data["nextPost"] = nextPost;
			  }
			  return coll;
			});
			config.addCollection("noteTags", require('./src/lib/collections/notes/taglist.js'));
			config.addCollection("noteTagCollections", require('./src/lib/collections/notes/tagitems.js'));
			config.addCollection("noteCategories", require('./src/lib/collections/notes/categorylist.js'));
			config.addCollection("noteCategoryCollections", require('./src/lib/collections/notes/categoryitems.js'));
			config.addCollection("links", function(collection) {return collection.getFilteredByGlob("./src/links/*.md");});
			config.addCollection("linkTags", require('./src/lib/collections/links/taglist.js'));
			config.addCollection("linkTagCollections", require('./src/lib/collections/links/tagitems.js'));
			config.addCollection("linkCategories", require('./src/lib/collections/links/categorylist.js'));
			config.addCollection("linkCategoryCollections", require('./src/lib/collections/links/categoryitems.js'));
			config.addCollection("writing", function(collection) {return collection.getFilteredByGlob("./src/writing/*.md");});
			config.addCollection("writingTags", require('./src/lib/collections/writing/taglist.js'));
			config.addCollection("writingTagCollections", require('./src/lib/collections/writing/tagitems.js'));
			config.addCollection("writingCategories", require('./src/lib/collections/writing/categorylist.js'));
			config.addCollection("writingCategoryCollections", require('./src/lib/collections/writing/categoryitems.js'));
			//config.addCollection("teaching", function(collection) {return collection.getFilteredByGlob("./src/teaching/*.md");});
			//config.addCollection("teachingTags", require('./src/lib/collections/teaching/taglist.js'));
			//config.addCollection("teachingTagCollections", require('./src/lib/collections/teaching/tagitems.js'));
			//config.addCollection("teachingCategories", require('./src/lib/collections/teaching/categorylist.js'));
			//config.addCollection("teachingCategoryCollections", require('./src/lib/collections/teaching/categoryitems.js'));
			config.addCollection("gallery", function(collection) {return collection.getFilteredByGlob("./src/gallery/*.md");});
			config.addCollection("galleryTags", require('./src/lib/collections/gallery/taglist.js'));
			config.addCollection("galleryTagCollections", require('./src/lib/collections/gallery/tagitems.js'));
			config.addCollection("galleryCategories", require('./src/lib/collections/gallery/categorylist.js'));
			config.addCollection("galleryCategoryCollections", require('./src/lib/collections/gallery/categoryitems.js'));
			config.addCollection("library", function(collection) {return collection.getFilteredByGlob("./src/library/**/*.md");});
			config.addCollection("libraryTags", require('./src/lib/collections/library/taglist.js'));
			config.addCollection("libraryTagCollections", require('./src/lib/collections/library/tagitems.js'));
			config.addCollection("libraryCategories", require('./src/lib/collections/library/categorylist.js'));
			config.addCollection("libraryCategoryCollections", require('./src/lib/collections/library/categoryitems.js'));
			config.addCollection("yopList", require('./src/lib/collections/library/yoplist.js'));
			config.addCollection("yops", require('./src/lib/collections/library/yopbooks.js'));
			config.addCollection("photographerList", require('./src/lib/collections/library/photographerlist.js'));
			config.addCollection("photographerBooks", require('./src/lib/collections/library/photographerbooks.js'));
			config.addCollection("photographers", function(collection) {return collection.getFilteredByGlob("./src/photographers/*.md");});

			// Passthrough
			config.addPassthroughCopy("src/assets");
			config.setDataDeepMerge(true);

		  return {
		    templateFormats: [
		      "md",
		      "njk",
		      "html",
		      "liquid"
		    ],

		    pathPrefix: "/",

		    markdownTemplateEngine: "njk",
		    htmlTemplateEngine: "njk",
		    dataTemplateEngine: "njk",
		    passthroughFileCopy: true,
		    dir: {
		      input: "src",
		      includes: "_includes",
					layouts: "_includes/layouts",
		      data: "_data",
		      output: "dist"
		    }
		  };
};
