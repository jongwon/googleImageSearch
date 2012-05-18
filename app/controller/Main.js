
/**
 * 
 */

Ext.define('gis.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
       
        refs: {
            searchTxt: '#search_txt',
            searchBtn: '#search_btn',
            gisList:'GisList', //list
            gisMain:'GisMain'
        },

        control: {
            searchBtn: {
                tap: 'searchBtn'
            },
            searchTxt:{
            	keyup:'searchTxt'
            },
            gisList:{
            	itemtap:'viewImage'
            }
        }
    },
    
    viewImage:function(view, index, ele, item){
    	
    	if(!this.imageDetail){
    		this.imageDetail = Ext.widget('ImageDetail');
    	}
    	
    	this.imageDetail.updateData(item.data);
    	var gisMain = this.getGisMain();
    	gisMain.push(this.imageDetail);
    },
    
    searchTxt:function(thisField, e){
         if(e.event.keyCode == 13){
         	var keyword = this.getSearchTxt().getValue();
         	this.doSearch(keyword);
         }
         //this.getSearchTxt.focus();
    },
    
    searchBtn:function(){
    	var keyword = this.getSearchTxt().getValue();
    	this.doSearch(keyword);
    },
    
    doSearch:function(keyword){
    	var store = Ext.getStore('ImageListStore');
    	store.keyword=keyword;
    	store.currentPage=1;
    	store.load({
    		params:{
				v:'1.0',
				q:keyword,
				rsz:8
    		}
    	});
    }

    
});
