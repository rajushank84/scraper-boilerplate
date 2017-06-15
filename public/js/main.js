require.config({
	paths: {
		jquery: 'lib/jquery-min',
		underscore: 'lib/underscore-min',
		backbone: 'lib/backbone-optamd3-min'
	}
});

require(['views/app','backbone'], function(AppView, Backbone){
	var appView =  new AppView;
	appView.render();
}); 

require([
	'../jsdust/landing',
	'views/landing',
	'../jsdust/about',
	'views/about',
	'jquery'
	], function(){
		// do nothing. just to pre-fetch and cache.
	}
);
