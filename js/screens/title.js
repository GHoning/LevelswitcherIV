game.TitleScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
        // title screen
		// replace this stuff with a cool background and buttons and dropdown menu's
		me.game.world.addChild(
		new me.Sprite (
			0,0,
			me.loader.getImage('title_screen')
		),
		1
		);
		
		me.game.world.addChild(new game.StartButton(me.game.viewport.width/ 4 ,me.game.viewport.height/ 2), 2);
		me.game.world.addChild(new game.LevelSelectButton(me.game.viewport.width/ 2 ,me.game.viewport.height/ 2), 3);

    },

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent : function() {
		/*me.input.unbindKey(me.input.KEY.ENTER);
		me.input.unbindPointer(me.input.mouse.LEFT);
		me.event.unsubscribe(this.handler);*/
	},
});
