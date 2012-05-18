Ext.define('gis.model.Image', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
			'GsearchResultClass',
			'width',
			'height',
			'imageId',
			'tbWidth',
			'tbHeight',
			'unescapedUrl',
			'url',
			'visibleUrl',
			'title',
			'titleNoFormatting',
			'originalContextUrl',
			'content',
			'contentNoFormatting',
			'tbUrl'
        ]
    }
});

