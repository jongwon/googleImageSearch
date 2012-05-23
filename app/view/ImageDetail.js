

Ext.define('gis.view.ImageDetail', {
	
	extend:'Ext.Container',
	xtype:'ImageDetail',
	
	config:{
		scrollable:'vertical',
		title:'이미지 상세보기',
		layout:'vbox',
		scorllable:'vertical',
		scroll:'vertical'
		
	},
	
	
	updateData:function(image){
		
		var panel = ["<div class='desc'>"];
 		panel.push("<img class='detail' src='"+image.unescapedUrl+"' >");
 		
 		panel.push("<table class='image-meta-table'>");
		for(var a in image){
			panel.push("<tr><td class='name'>"+a+"</td><td class='value'>"+image[a]+"</td></tr>");
		}
 		panel.push("</table>");
		panel.push("</div>");
		
		var _h = panel.join('');
		this.setTitle(image.content);
		
		this.setHtml(_h);
	}
	
});
