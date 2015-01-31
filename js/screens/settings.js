game.SettingsScreen = me.ScreenObject.extend({
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
		
		//place buttons to the levels in Level list
		for ( i = 0; i < game.data.levelList.length; i++)
		{
			me.game.world.addChild(new game.LevelButton(me.game.viewport.width / 4 + (110*i),me.game.viewport.height/ 2 -100, game.data.levelList[i], i), 2);
		}
		
		//back button
		me.game.world.addChild(new game.BackButton(me.game.viewport.width/ 2 ,me.game.viewport.height/ 2),2);
		
		//add button
		me.game.world.addChild(new game.AddButton(me.game.viewport.width/ 2 + 110 ,me.game.viewport.height/ 2),2);
		
		//remove button
		me.game.world.addChild(new game.RemoveButton(me.game.viewport.width/ 2 - 110 ,me.game.viewport.height/ 2),2);

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
