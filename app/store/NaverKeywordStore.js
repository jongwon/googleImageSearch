Ext.define('gis.store.NaverKeywordStore', {
	extend: 'Ext.data.Store',
	xtype: 'naverKeywordStore',

	config: {
		model: 'gis.model.NaverKeyword',
		autoLoad: true,
		
		proxy: {
			type: 'jsonp',
			//url: 'http://openapi.naver.com/search?key=501765b8609584482226894c539fdaf7&target=rank&query=nexearch',
			url: 'http://soreply.com:9018',
			startParam:false,
			pageParam:false,
			limitParam:false,
			reader:{
				type:'json',
				rootProperty:''
			}
        }
	},
	listeners: {
		'load': function(store,records,successful){alert('load');}
	}
})