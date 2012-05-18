//<debug>
Ext.Loader.setPath({
    'Ext': '../../src'
});
//</debug>

/**
 * google image search 
 * sencha touch app....
 * 
 */
Ext.application({
    name: 'gis',

    //sets up the icon and startup screens for when the app is added to a phone/tablet home screen

    glossOnIcon: false,
    icon: {
        57: 'resources/icons/icon.png',
        72: 'resources/icons/icon@72.png',
        114: 'resources/icons/icon@2x.png',
        144: 'resources/icons/icon@114.png'
    },

    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

    //loads the views used by the app from the app/view folder
    views: [
        'Main',
        'GisList',
        'ImageDetail',
        'HTMLPanel'
    ],
	
    stores:['ImageListStore'],
    models: ['Image'],
    controllers:[
    	'Main'
    ],
    
    launch:function(){
    	Ext.Viewport.add(Ext.create('gis.view.Main'));
    }
    
});
