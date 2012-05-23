
Ext.define('gis.view.GisList', {
	extend:'Ext.List',
	xtype:'GisList',
	requires:[
		'Ext.plugin.PullRefresh',
		'Ext.plugin.ListPaging'
	],
	config:{
		title:'Google Image Search',
		
		items:[
        	{
				xtype:'toolbar',
				docked:'top',
				items:[
					{
						xtype:'searchfield',
						id:'search_txt',
						flex:1,
						placeHolder:DEFAULT_KEYWORD
					},{
						xtype:'button',
						id:'search_btn',
						text:'검색'
					}
				]
			}
        ],
		disableSelection:true,
		store:'ImageListStore',
		loadingText:'불러오는 중...',
		
		plugins:[
			{
				type:'listpaging',
				autoPaging: true
			}
		],
		
        
		itemTpl:[
			"<div class='item'>",
				"<div class='image'><img src='{tbUrl}'></div>",
				"<div class='board'>",
					"<span>{title}</span>",
				"</div>",
			"</div>"
		]
	}
	
});
