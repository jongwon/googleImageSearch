// You do not need to save a reference to HTMLPanel when you define your class
//var HTMLPanel = Ext.define('HTMLPanel', {
Ext.define('gis.view.HTMLPanel', {
    extend: 'Ext.Panel',

    // We are using Ext.Ajax, so we should require it
    requires: ['Ext.Ajax'],
	xtype:'HTMLPanel',
	
    config: {
        listeners: {
            activate: 'onActivate'
        },

        // Create a new configuration called `url` so we can specify the URL
        url: null
    },

    onActivate: function(me, container) {
    	var me = this;
    	console.log(me);
    	
        Ext.Ajax.request({
            // we should use the getter for our new `url` config
            url: this.getUrl(),
            method: "GET",
            success: function(response, request) {
                // We should use the setter for the HTML config for this
                me.setHtml(response.responseText);
            },
            failure: function(response, request) {
                me.setHtml("failed -- response: " + response.responseText);
            }
        });
    }
});