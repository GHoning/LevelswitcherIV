/* --------------------------
 A start button GUI Object
------------------------ */
game.StartButton = me.GUI_Object.extend(
{
	init:function (x, y)
	{
		var settings = {}
		settings.image = "button_start";
		// super constructor
		this._super(me.GUI_Object, "init", [x, y, settings]);
	},
	
	// output something in the console
	// when the object is clicked
	onClick:function (event)
	{
		console.log("clicked Play");
		
		me.state.change(me.state.PLAY);
		// don't propagate the event
		return false;
	}
});

/* --------------------------
 A Level Select button GUI Object
------------------------ */

game.LevelSelectButton = me.GUI_Object.extend(
{
	init:function (x, y)
	{
		var settings = {}
		settings.image = "button_levelselect";
		// super constructor
		this._super(me.GUI_Object, "init", [x, y, settings]);
	},
	
	// output something in the console
	// when the object is clicked
	onClick:function (event)
	{
		console.log("clicked Option");
		
		me.state.change(me.state.SETTINGS);
		// don't propagate the event
		return false;
	}
});

/* --------------------------
 A back button GUI Object
------------------------ */

game.BackButton = me.GUI_Object.extend(
{
	init:function (x, y)
	{
		var settings = {}
		settings.image = "button_back";
		// super constructor
		this._super(me.GUI_Object, "init", [x, y, settings]);
	},
	
	// output something in the console
	// when the object is clicked
	onClick:function (event)
	{
		console.log("clicked Back");
		
		me.state.change(me.state.MENU);
		// don't propagate the event
		return false;
	}
});

/* --------------------------
 A addLevel button GUI Object
------------------------ */

game.AddButton = me.GUI_Object.extend(
{
	init:function (x, y)
	{
		var settings = {}
		settings.image = "button_add";
		// super constructor
		this._super(me.GUI_Object, "init", [x, y, settings]);
	},
	
	// output something in the console
	// when the object is clicked
	onClick:function (event)
	{
		console.log("clicked Level");
		
		//game.data.levelList[game.data.levelList.length = "Level1"];
		game.data.selectedLevel = game.data.levelList.length;
		
		me.state.change(me.state.USER);
		// don't propagate the event
		return false;
	}
});

/* --------------------------
 A removeLevel button GUI Object
------------------------ */

game.RemoveButton = me.GUI_Object.extend(
{
	init:function (x, y)
	{
		var settings = {}
		settings.image = "button_remove";
		// super constructor
		this._super(me.GUI_Object, "init", [x, y, settings]);
	},
	
	// output something in the console
	// when the object is clicked
	onClick:function (event)
	{
		//game.data.levelList[game.data.levelList.length = "Level1"];
		if(game.data.levelList.length > 1)
		{
			game.data.levelList.splice(game.data.levelList.length -1, game.data.levelList.length);
			me.state.change(me.state.SETTINGS);
		}
		
		// don't propagate the event
		return false;
	}
});


/* --------------------------
 A Level button GUI Object
------------------------ */

game.LevelButton = me.GUI_Object.extend(
{
	init:function (x, y, levelname, levelPos)
	{
		var settings = {}
		settings.image = "button_" + levelname;
		this.selectedLevel = levelPos;
		// super constructor
		this._super(me.GUI_Object, "init", [x, y, settings]);
	},
	
	// output something in the console
	// when the object is clicked
	onClick:function (event)
	{
		console.log("clicked Level");
		
		game.data.selectedLevel = this.selectedLevel;
		
		me.state.change(me.state.USER);
		// don't propagate the event
		return false;
	}
});

/* --------------------------
 A Level1 button GUI Object
------------------------ */

game.Level1Button = me.GUI_Object.extend(
{
	init:function (x, y)
	{
		var settings = {}
		settings.image = "button_level1";
		// super constructor
		this._super(me.GUI_Object, "init", [x, y, settings]);
	},
	
	// output something in the console
	// when the object is clicked
	onClick:function (event)
	{
		console.log("clicked Level1");
		game.data.levelList[game.data.selectedLevel] = "level1";
		//set current int to level
		//me.state.change(me.state.USER);
		me.state.change(me.state.SETTINGS);
		// don't propagate the event
		return false;
	}
});

/* --------------------------
 A Level2 button GUI Object
------------------------ */

game.Level2Button = me.GUI_Object.extend(
{
	init:function (x, y)
	{
		var settings = {}
		settings.image = "button_level2";
		// super constructor
		this._super(me.GUI_Object, "init", [x, y, settings]);
	},
	
	// output something in the console
	// when the object is clicked
	onClick:function (event)
	{
		console.log("clicked Level2");
		game.data.levelList[game.data.selectedLevel] = "level2";
		//set current int to level
		//me.state.change(me.state.USER);
		me.state.change(me.state.SETTINGS);
		// don't propagate the event
		return false;
	}
});

/* --------------------------
 A Level3 button GUI Object
------------------------ */

game.Level3Button = me.GUI_Object.extend(
{
	init:function (x, y)
	{
		var settings = {}
		settings.image = "button_level3";
		
		// super constructor
		this._super(me.GUI_Object, "init", [x, y, settings]);
	},
	
	// output something in the console
	// when the object is clicked
	onClick:function (event)
	{
		console.log("clicked Level3");
		game.data.levelList[game.data.selectedLevel] = "level3";
		//set current int to level
		//me.state.change(me.state.USER);
		me.state.change(me.state.SETTINGS);
		// don't propagate the event
		return false;
	}
});