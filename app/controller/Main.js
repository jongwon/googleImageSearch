
Ext.define('gis.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
       
        refs: {
            searchTxt: '#search_txt',
            searchBtn: '#search_btn',
            gisList:'GisList', //list
            gisMain:'GisMain',
            refreshBtn:'#refreshBtn',
            krbtn:'#krbtn'
        },

        control: {
        	gisMain:{
        		push: 'onDetailPush',
				pop: 'onDetailPop'
        	},
            searchBtn: {
                tap: 'searchBtn'
            },
            searchTxt:{
            	keyup:'searchTxt'
            },
            gisList:{
            	itemtap:'viewImage'
            },
            refreshBtn:{
            	tap:'refreshMain'
            },
            krbtn:{
            	tap:'refreshKeyword'
            }
        }
    },
    onDetailPush:function(view, item){
    	this.hideButton();
    },
    onDetailPop:function(view, item){
    	this.showButton();
    },
    hideButton:function(){
    	this.getRefreshBtn().hide();
    	this.getKrbtn().hide();
    },
    showButton:function(){
    	this.getRefreshBtn().show();
    	this.getKrbtn().show();
    },
    refreshKeyword:function(button){
    	
		var isPhone = Ext.os.deviceType == 'Phone',
			overlays;
		var me = this;
		
        overlay = Ext.Viewport.add({
            xtype: 'panel',
            layout: 'fit',	// 오버레이에서 리스트가 정상적으로 나오도록 한다. 

            left: 0,
            top: 0,
            modal: true,
            hideOnMaskTap: true,
            hidden: true,
            width: isPhone ? 260 : 300,
            height: isPhone ? '70%' : 300,
            scrollable: true,

            items: [
                {
                    docked: 'top',
                    xtype: 'toolbar',
                    title: '네이버 급상승 검색어'
                },
                {
					xtype: 'list',
                    ui: 'keywordlist',
                    iconMask: true,
					flex: 1,
					store: 'NaverKeywordStore',
					itemTpl: '{K}',
		            listeners: {
		            	'itemtap': function(record, item, index, e) {
				                var keyword = e.getData().K;
						    	me.getSearchTxt().setValue(keyword);
						    	me.doSearch(keyword);
				                overlay.hide();
				         }
				    }
                }
            ]
        });

        overlay.showBy(button);
	
    },
    refreshMain:function(){
    	var keyword = randKeyword();
    	this.getSearchTxt().setValue(keyword);
    	this.doSearch(keyword);
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
