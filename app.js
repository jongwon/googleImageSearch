//<debug>
Ext.Loader.setPath({
    'Ext': '../../src'
});
//</debug>

var KEYWORD=[
	{K:'제시카 알바'}, 
	{K:'제시카 고메즈'}, 
	{K:'이효리'}, 
	{K:'추성훈'}, 
	{K:'정수정'}, 
	{K:'이은주'}, 
	{K:'부부의 날'}, 
	{K:'일식'}, 
	{K:'노무현'}, 
	{K:'성년의날'}, 
	{K:'정준하 결혼식'}, 
	{K:'나가수2'}, 
	{K:'신의탑'}, 
	{K:'황인영'}, 
	{K:'영화'}, 
	{K:'킹콩'}
];

function randRange(min, max) {
	return Math.max(Math.min(Math.round(Math.random() * max), max), min);
}
function randKeyword(){
	var word = KEYWORD[randRange(0, KEYWORD.length)];
	return word.K || '제시카 고메즈';
}
var DEFAULT_KEYWORD=randKeyword();


/**
 * google image search 
 * sencha touch app....
 * 501765b8609584482226894c539fdaf7
 */
Ext.application({
    name: 'gis',
	appFolder: "app",
    //sets up the icon and startup screens for when the app is added to a phone/tablet home screen
	fullscreen: true,
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
	
    stores:['ImageListStore', 'NaverKeywordStore'],
    models: ['Image', 'NaverKeyword'],
    controllers:[
    	'Main'
    ],
    
    
    launch:function(){
    	
    	Ext.Viewport.add(Ext.create('gis.view.Main'));
    	
    	// window.scrollTo(0,1);
    }
    
});
