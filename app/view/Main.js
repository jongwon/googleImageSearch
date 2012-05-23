Ext.define('gis.view.Main', {
    extend: 'Ext.navigation.View',
    xtype:'GisMain',
    
    id: 'GisMain',

    config: {
    	fullscreen: true,
        navigationBar:{
        	docked: 'top',
            items: [
                {
                    xtype: 'button',
                    iconCls: 'refresh',
                    id: 'refreshBtn',
                    align: 'left',
                    iconMask: true,
                }
                ,
                {
                    xtype: 'button',
                    iconCls: 'action',
                    id: 'krbtn',
                    align: 'right',
                    iconMask: true
                }
            ]
        },
        
        autoDestroy:false,
        items:[
        	{xtype:'GisList'}
        ]
    }
});