

Ext.define('gis.view.ImageDetail', {
	extend:'Ext.Container',
	xtype:'ImageDetail',
	
	config:{
		
		title:'이미지 상세보기',
		layout:'vbox',
		scorllable:'vertical',
		scroll:'vertical'
		
		
	},
	
	
	updateData:function(image){
		
		
		// var panel = ["<div class='desc'>"];
// 			
		// for(var a in image){
			// panel.push("<div class='field'>"+a+":"+image[a]+"</div>");
		// }
// 		
		// panel.push("</div>");
// 		
		// var _h = panel.join('');
		// console.log(_h);
		// this.items.items[0].setUrl("<div class='detailImage'><img src='"+image.url+"'></div>");
		// this.items.items[1].setHtml(_h);
		
		this.setHtml("<div class='detailImage'><img src='"+image.url+"'></div>");
		
		
		// this.items.push({
			// xtype:'image',
			// src:image.url,
			// flex:1
		// });
	}
});
