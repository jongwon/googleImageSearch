
Ext.define('gis.store.ImageListStore', {
	extend:'Ext.data.Store',
	
	config:{
		model:'gis.model.Image',
		autoLoad:true,
		pageSize:8,
		proxy:{
			type:'jsonp',
			url:'https://ajax.googleapis.com/ajax/services/search/images',
			extraParams:{
				v:'1.0',
				q:'고메즈',
				rsz:8
			},
			reader:{
				type:'json',
				rootProperty:'responseData.results'
			}
		}
	},
	
	constructor:function(config){
		config = config || {};
		
		this.data = this._data = this.createDataCollection();
		this.keyword = '고메즈';
		
		this.data.setSortRoot('data');
		this.data.setFilterRoot('data');
		
		this.removed=[];
		
		if(config.id && !config.storeId){
			config.storeId = config.id;
			delete config.id;
		}
		this.initConfig(config);
	},
	
	nextPage:function(options){
		console.log(this.keyword);
		options.params={
			v:'1.0',
			q:this.keyword,
			rsz:8,
			start:8*(this.currentPage+1)-1
    	};
    	this.loadPage(this.currentPage+1, options);
	},
	
	previousPage:function(options){
		console.log(this.keyword);
		options.params={
			v:'1.0',
			q:this.keyword,
			rsz:8
		};
		this.loadPage(-1, options);
	}
});
