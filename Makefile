all: flan.js

flan.js: effects.js events.js util.js
	cat effects.js events.js util.js > flan.js