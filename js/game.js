
/* Game namespace */
var game = {

    // an object where to store game information
    data : {
        // game
		levelList : ["level1", "level2", "level3"],
		levelIncrement : 0,
        score : 0,
		// menu
		selectedLevel : 0,
    },


    // Run on page load.
    "onload" : function () {
    // Initialize the video.
    if (!me.video.init("screen",  me.video.CANVAS, 640, 480,true, 'auto')) {
        alert("Your browser does not support HTML5 canvas.");
        return;
    }

    // add "#debug" to the URL to enable the debug Panel
    if (document.location.hash === "#debug") {
        window.onReady(function () {
            me.plugin.register.defer(this, me.debug.Panel, "debug", me.input.KEY.V);
        });
    }

    // Set a callback to run when loading is complete.
    me.loader.onload = this.loaded.bind(this);

    // Load the resources.
    me.loader.preload(game.resources);

    // Initialize melonJS and display a loading screen.
    me.state.change(me.state.LOADING);
},

    // Run on game resources loaded.
    "loaded" : function () {
        me.state.set(me.state.MENU, new game.TitleScreen());
        me.state.set(me.state.SETTINGS, new game.SettingsScreen());
        me.state.set(me.state.USER, new game.LevelSetupScreen());
        me.state.set(me.state.PLAY, new game.PlayScreen());

        // add our player entity in the entity pool
        me.pool.register("mainPlayer", game.PlayerEntity);
        me.pool.register("CoinEntity", game.CoinEntity);
		me.pool.register("EnemyEntity", game.EnemyEntity);
		me.pool.register("LevelSwitchEntity", game.LevelSwitchEntity);

		// enable the keyboard
		me.input.bindKey(me.input.KEY.LEFT, "left");
		me.input.bindKey(me.input.KEY.A, "left");
		me.input.bindKey(me.input.KEY.RIGHT, "right");
		me.input.bindKey(me.input.KEY.D, "right");
		me.input.bindKey(me.input.KEY.X, "jump", true);
		me.input.bindKey(me.input.KEY.SPACE, "jump", true);
		me.input.bindKey(me.input.KEY.W, "jump", true);
		
        // Start the game.
        me.state.change(me.state.MENU);
    }
};
