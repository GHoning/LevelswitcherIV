/* --------------------------
an level switch Entity
------------------------ */
game.LevelSwitchEntity = me.Entity.extend({
	init: function(x, y, settings) {
		this._super(me.Entity, 'init', [x, y , settings]);
	},
	
	onCollision: function (response, other) {
	
		if(game.data.levelIncrement < (game.data.levelList.length -1))
		{
			//add 1 to levelIncrement
			game.data.levelIncrement++;
			
			//Switch the level
			me.levelDirector.loadLevel(game.data.levelList[game.data.levelIncrement]);
		} else {
			console.log("congrats")
			//reset levelIncrement and go back to the title
			game.data.levelIncrement = 0;
			me.state.change(me.state.MENU);
		}
		
		
		return false;
	}
});