// Dom7
// var $ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
	theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
	id: 'gq.sizu.app',
	root: '#app',
	theme: theme,
	data: function () {
		return {
			user: {
				firstName: 'John',
				lastName: 'Doe',
			},
		};
	},
	methods: {
		helloWorld: function () {
			app.dialog.alert('Hello World!');
		},
	},
	routes: routes,
	popup: {
		closeOnEscape: true,
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	},
	vi: {
		placementId: 'pltd4o7ibb9rc653x14',
	},
	dialog: {
		// set default title for all dialog shortcuts
		title: 'My App',
		// change default "OK" button text
		buttonOk: 'Done'
	},
});

window.onload = function () {
	WebPullToRefresh.init({
		loadingFunction: exampleLoadingFunction
	});
};

// Just an example loading function that returns a
// promise that WebPullToRefresh can use.
var exampleLoadingFunction = function () {
	location.reload();
};




 









