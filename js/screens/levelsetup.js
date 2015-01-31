game.LevelSetupScreen = me.ScreenObject.extend({
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
		
		//For Level Selection Buttons
		me.game.world.addChild(new game.Level1Button(me.game.viewport.width / 2, 110), 2);
		me.game.world.addChild(new game.Level2Button(me.game.viewport.width / 2, 220), 2);
		me.game.world.addChild(new game.Level3Button(me.game.viewport.width / 2, 330), 2);

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
