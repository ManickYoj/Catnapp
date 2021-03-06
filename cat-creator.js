var Cat = require('mongoose').model('Cat');

module.exports.newCat = function(){
	var name = names[Math.floor(Math.random()*names.length)];
	var numColors = Math.floor(Math.random()*3 + 1);
	var catColors = [];
	for (var i = 0; i < numColors; i++) {
		catColors[i] = colors[Math.floor(Math.random()*colors.length)];
	}
	
	var age = Math.floor(Math.random()*20);

	return new Cat({name: name, color: catColors, age: age});
};


// Data
var names = [
"Fluffy",
"Spot",
"Paco",
"Curly",
"Felix",
"Whiskers",
"Finnegan",
"Bubba",
"Fiona",
"Cleo",
"Charlie",
"Bear",
"Hideous Man-Ape",
"Willie",
"Gato Dos Manos",
"Ed",
"Edd",
"Eddie",
"Eddd",
"Edddddy",
"Marcus",
"Marcus II",
"Barbie",
"The Roche",
"Sammy",
"Rocco",
"Milton",
"Zapp",
"Ghostface",
"Kool Keith",
"Engelbert",
"Adolph",
"Jean-Charles",
"Jean-Pierre",
"Jean-Luc",
"Sulu",
"Honest Abe",
"RZA",
"Dogg",
"Professor Piddles",
"John-Boy",
"Ragged Dick",
"Cheech",
"Cicci",
"Marcus Aurelius Commodus Antonius Augustus",
"Turbocat",
"Spooock",
"Hot Houseboy",
"Ganymede",
"Woodhouse",
"Abbot",
"Costello",
"Catface",
"Tarquinus Superbus",
"Ged",
"Senhor Snuggles",
"Herr Doktor Katz"
];

var colors = [
"Indian Red",
"Light Coral",
"Salmon",
"Dark Salmon",
"Light Salmon",
"Crimson",
"Red",
"Fire Brick",
"Dark Red",
"Pink",
"Light Pink",
"Hot Pink",
"Deep Pink",
"Medium Violet Red",
"Pale Violet Red",
"Light Salmon",
"Coral",
"Tomato",
"Orange Red",
"Dark Orange",
"Orange",
"Gold",
"Yellow",
"Light Yellow",
"Lemon Chiffon",
"Light Goldenrod",
"Papaya Whip",
"Moccasin",
"Peach Puff",
"Pale Goldenrod",
"Khaki",
"Dark Khaki",
"Lavender",
"Thistle",
"Plum",
"Violet",
"Orchid",
"Fuschia",
"Magenta",
"Medium Orchid",
"Medium Purple",
"Blue Violet",
"Dark Violet",
"Dark Orchid",
"Dark Magenta",
"Purple",
"Indigo",
"Slate Blue",
"Dark Slate Blue",
"Medium Slate Blue",
"Green Yellow",
"Chartreuse",
"Lawn Green",
"Lime",
"Lime Green",
"Pale Green",
"Light Green",
"Medium Spring Green",
"Spring Green",
"Medium Sea Green",
"Sea Green",
"Forest Green",
"Green",
"Dark Green",
"Yellow Green",
"Olive Drab",
"Olive",
"Dark Olive Green",
"Medium Aquamarine",
"Dark Sea Green",
"Light Sea Green",
"Dark Cyan",
"Teal",
"Aqua",
"Cyan",
"Light Cyan",
"Pale Turquoise",
"Aquamarine",
"Turquoise",
"Medium Turquoise",
"Dark Turquoise",
"Cadet Blue",
"Steel Blue",
"Light Steel Blue",
"Powder Blue",
"Light Blue",
"Sky Blue",
"Light Sky Blue",
"Deep Sky Blue",
"Dodger Blue",
"Cornflower Blue",
"Medium Slate Blue",
"Royal Blue",
"Blue",
"Medium Blue",
"Dark Blue",
"Navy",
"Midnight Blue",
"Cornsilk",
"Blanched Almond",
"Bisque",
"Navajo White",
"Wheat",
"Burly Wood",
"Tan",
"Rosy Brown",
"Sandy Brown",
"Goldenrod",
"Dark Goldenrod",
"Peru",
"Chocolate",
"Saddle Brown",
"Sienna",
"Brown",
"Maroon",
"White",
"Snow",
"Honeydew",
"Mint Cream",
"Azure",
"Alice Blue",
"Ghost White",
"White Smoke",
"Seashell",
"Beige",
"Old Lace",
"Floral White",
"Ivory",
"Antique White",
"Linen",
"Lavender Blush",
"Misty Rose",
"Gainsboro",
"Light Grey",
"Silver",
"Dark Grey",
"Gray",
"Dim Grey",
"Light Slate Grey",
"Slate Gray",
"Dark Slate Grey",
"Black"
];