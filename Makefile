all: flan.js

flan.js: effects.js events.js util.js
	rm flan.js
	cat util.js events.js effects.js > flan.js