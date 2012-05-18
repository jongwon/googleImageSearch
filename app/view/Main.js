Ext.define('gis.view.Main', {
    extend: 'Ext.navigation.View',
    xtype:'GisMain',
    
    id: 'GisMain',

    config: {
        navigationBar:{},
        autoDestroy:false,
        items:[
        	{xtype:'GisList'}
        ]
    }
});