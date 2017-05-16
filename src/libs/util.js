let util = {

};
util.title = function(title) {
	title = title ? title + ' - Home' : '酷云EYE EP';
	window.document.title = title;
};

export default util;