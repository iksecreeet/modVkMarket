modVkMarket.page.Home = function (config) {
	config = config || {};
	Ext.applyIf(config, {
		components: [{
			xtype: 'modvkmarket-panel-home', renderTo: 'modvkmarket-panel-home-div'
		}]
	});
	modVkMarket.page.Home.superclass.constructor.call(this, config);
};
Ext.extend(modVkMarket.page.Home, MODx.Component);
Ext.reg('modvkmarket-page-home', modVkMarket.page.Home);