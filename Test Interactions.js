(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 980,
	height: 623,
	fps: 30,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/DMH_06_11_physical_hazards_broken_glass_cover.png", id:"DMH_06_11_physical_hazards_broken_glass_cover"},
		{src:"images/DMH_06_11_physical_hazards_broken_glass_sweeping.png", id:"DMH_06_11_physical_hazards_broken_glass_sweeping"},
		{src:"images/DMH_06_11_physical_hazards_plate.png", id:"DMH_06_11_physical_hazards_plate"},
		{src:"images/DMH_35_00_digital_display_numbers_SFS_165.png", id:"DMH_35_00_digital_display_numbers_SFS_165"},
		{src:"images/DMH_35_00_digital_display_numbers_SFS_180.png", id:"DMH_35_00_digital_display_numbers_SFS_180"},
		{src:"images/DMH_35_00_digital_display_numbers_SFS_dashes.png", id:"DMH_35_00_digital_display_numbers_SFS_dashes"},
		{src:"images/DMH_35_02_roasted_chicken.png", id:"DMH_35_02_roasted_chicken"},
		{src:"images/DMH_35_thermistor_alone.png", id:"DMH_35_thermistor_alone"},
		{src:"images/DMH_35_thermistor_buttons_.png", id:"DMH_35_thermistor_buttons_"},
		{src:"sounds/_062_incorrect1wav.mp3", id:"_062_incorrect1wav"},
		{src:"sounds/_063_incorrect2wav.mp3", id:"_063_incorrect2wav"},
		{src:"sounds/_064_incorrect3wav.mp3", id:"_064_incorrect3wav"},
		{src:"sounds/_065_scene1correctwav.mp3", id:"_065_scene1correctwav"},
		{src:"sounds/_35_3wav.mp3", id:"_35_3wav"},
		{src:"sounds/_35_4wav.mp3", id:"_35_4wav"},
		{src:"sounds/_35_4awav.mp3", id:"_35_4awav"},
		{src:"sounds/_35_5wav.mp3", id:"_35_5wav"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.DMH_06_11_physical_hazards_broken_glass_cover = function() {
	this.initialize(img.DMH_06_11_physical_hazards_broken_glass_cover);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3600,1920);


(lib.DMH_06_11_physical_hazards_broken_glass_sweeping = function() {
	this.initialize(img.DMH_06_11_physical_hazards_broken_glass_sweeping);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3600,1920);


(lib.DMH_06_11_physical_hazards_plate = function() {
	this.initialize(img.DMH_06_11_physical_hazards_plate);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3600,1920);


(lib.DMH_35_00_digital_display_numbers_SFS_165 = function() {
	this.initialize(img.DMH_35_00_digital_display_numbers_SFS_165);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,92);


(lib.DMH_35_00_digital_display_numbers_SFS_180 = function() {
	this.initialize(img.DMH_35_00_digital_display_numbers_SFS_180);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,92);


(lib.DMH_35_00_digital_display_numbers_SFS_dashes = function() {
	this.initialize(img.DMH_35_00_digital_display_numbers_SFS_dashes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,9);


(lib.DMH_35_02_roasted_chicken = function() {
	this.initialize(img.DMH_35_02_roasted_chicken);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3300,1694);


(lib.DMH_35_thermistor_alone = function() {
	this.initialize(img.DMH_35_thermistor_alone);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1104,1103);


(lib.DMH_35_thermistor_buttons_ = function() {
	this.initialize(img.DMH_35_thermistor_buttons_);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1308,1694);


(lib.wrongtext2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("This one's kind of tricky. The meat is thickest int the breast;\ntry taking the temerature there.", "15px 'Arial'");
	this.text.lineHeight = 19;
	this.text.lineWidth = 408;
	this.text.setTransform(-205.9,-23.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205.9,-23.2,412,46.6);


(lib.wrongtext1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Uh oh. Your temperature reading is off because you didn't\ninsert the thermometer in the thickest part. Try again.", "15px 'Arial'");
	this.text.lineHeight = 19;
	this.text.lineWidth = 408;
	this.text.setTransform(-205.9,-23.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205.9,-23.2,412,46.6);


(lib.transitionout = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhMiAwwMAAAhhfMCZFAAAMAAABhfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-489.9,-312,980,624);


(lib.Title2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006699").s().p("Ag2BAQgVgXAAgoQAAgoAWgXQAWgXAfAAQAiAAAVAWQAVAXAAAoIAAAGIh5AAQABAcAOAOQAOAPASAAQAQAAALgIQALgIAGgSIAeADQgHAagTAOQgTAOgdAAQgiAAgWgWgAgdgxQgNANgCAVIBaAAQgCgVgIgKQgOgQgVAAQgSAAgMANg");
	this.shape.setTransform(208,12.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006699").s().p("AgyBAQgVgXAAgpQAAgZAJgUQAJgUASgKQASgKAUAAQAbAAARANQARAOAFAZIgbAEQgEgQgKgJQgKgIgOAAQgTAAgOAPQgNAPAAAgQAAAhANAPQANAPASAAQARAAALgKQALgKADgWIAcAEQgFAdgSAQQgTAQgbAAQggAAgVgWg");
	this.shape_1.setTransform(191.7,12.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006699").s().p("AgMByIAAikIAaAAIAACkgAgMhRIAAggIAaAAIAAAgg");
	this.shape_2.setTransform(179.7,9.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006699").s().p("AgDBsQgJgFgDgIQgDgIAAgZIAAhdIgVAAIAAgXIAVAAIAAgoIAagRIAAA5IAcAAIAAAXIgcAAIAABfQAAALACAEQABAEADACQADABAHAAIAMgBIAEAZQgMACgJAAQgQAAgGgEg");
	this.shape_3.setTransform(171.8,9.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006699").s().p("AgyBAQgVgXAAgpQAAgZAJgUQAJgUASgKQASgKAUAAQAbAAARANQARAOAFAZIgbAEQgEgQgKgJQgKgIgOAAQgTAAgOAPQgNAPAAAgQAAAhANAPQANAPASAAQARAAALgKQALgKADgWIAcAEQgFAdgSAQQgTAQgbAAQggAAgVgWg");
	this.shape_4.setTransform(159.7,12.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006699").s().p("Ag8BJQgPgOAAgUQAAgNAFgKQAGgKAJgGQAJgEALgDIAagEQAfgEAQgGIAAgHQAAgSgIgHQgKgJgUAAQgTAAgJAHQgKAHgFARIgbgDQAEgSAIgLQAJgLAQgFQAQgGAUAAQAVAAANAFQANAFAHAHQAGAIACALQACAHAAATIAAAkQAAAnACAKQACALAFAJIgeAAQgEgIgBgMQgPANgPAGQgMAFgRAAQgcAAgOgNgAgGAKQgQACgIADQgHADgEAGQgEAGAAAIQAAALAJAHQAIAIARAAQAOAAANgHQAMgHAGgNQAFgJgBgTIAAgJQgPAFgdAFg");
	this.shape_5.setTransform(142.2,12.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006699").s().p("AgsBUIAAikIAZAAIAAAZQAKgRAIgGQAHgFAJAAQAPAAAOAJIgJAaQgLgGgKAAQgJAAgGAFQgHAGgDAKQgFAPAAARIAABVg");
	this.shape_6.setTransform(129.4,12.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006699").s().p("AhWByIAAjjIBWAAQAWAAAMACQAQADALAIQAMAHAHAPQAHAOAAARQAAAdgSATQgTAUgxAAIg4AAIAABdgAg3gEIA4AAQAeAAANgLQAMgLAAgUQAAgOgHgKQgIgKgMgEQgIgCgUAAIg4AAg");
	this.shape_7.setTransform(112.6,9.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006699").s().p("Ag1BAQgWgXAAgoQAAgoAWgXQAVgXAhAAQAhAAAVAWQAVAXAAAoIAAAGIh5AAQABAcAOAOQAOAPASAAQAQAAALgIQALgIAGgSIAdADQgGAagTAOQgTAOgdAAQgiAAgVgWgAgegxQgNANgBAVIBaAAQgBgVgJgKQgOgQgVAAQgSAAgNANg");
	this.shape_8.setTransform(83.5,12.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006699").s().p("AgrBUIAAikIAZAAIAAAZQAKgRAIgGQAFgFALAAQAOAAAPAJIgKAaQgKgGgLAAQgJAAgFAFQgIAGgDAKQgEAPgBARIAABVg");
	this.shape_9.setTransform(70.7,12.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006699").s().p("AgkBPQgNgGgGgIQgHgJgCgMQgCgJAAgRIAAhmIAcAAIAABbQAAAVACAJQADALAIAGQAJAGANAAQAKAAALgGQALgHAFgLQAFgMAAgVIAAhXIAcAAIAAClIgZAAIAAgZQgUAdgfgBQgPAAgMgFg");
	this.shape_10.setTransform(55,12.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006699").s().p("AgDBsQgJgFgDgIQgDgIAAgZIAAhdIgVAAIAAgXIAVAAIAAgoIAZgRIAAA5IAdAAIAAAXIgdAAIAABfQABALABAEQABAEAEACQADABAHAAIAMgBIAEAZQgMACgJAAQgPAAgHgEg");
	this.shape_11.setTransform(42,9.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006699").s().p("Ag8BJQgPgOAAgUQAAgNAFgKQAGgKAJgGQAJgEALgDIAagEQAfgEAQgGIAAgHQAAgSgIgHQgKgJgUAAQgTAAgJAHQgKAHgFARIgbgDQAEgSAIgLQAJgLAQgFQAQgGAUAAQAVAAANAFQANAFAHAHQAGAIACALQACAHAAATIAAAkQAAAnACAKQACALAFAJIgeAAQgEgIgBgMQgPANgPAGQgMAFgRAAQgcAAgOgNgAgGAKQgQACgIADQgHADgEAGQgEAGAAAIQAAALAJAHQAIAIARAAQAOAAANgHQAMgHAGgNQAFgJgBgTIAAgJQgPAFgdAFg");
	this.shape_12.setTransform(28.4,12.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006699").s().p("AgsBUIAAikIAZAAIAAAZQAKgRAJgGQAGgFAKAAQAOAAAOAJIgJAaQgLgGgKAAQgJAAgFAFQgIAGgDAKQgFAPAAARIAABVg");
	this.shape_13.setTransform(15.5,12.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006699").s().p("Ag1BAQgWgXAAgoQAAgoAWgXQAVgXAhAAQAhAAAVAWQAVAXAAAoIAAAGIh5AAQABAcAOAOQAOAPASAAQAQAAALgIQALgIAGgSIAdADQgHAagSAOQgTAOgdAAQgiAAgVgWgAgegxQgNANgBAVIBaAAQgBgVgJgKQgOgQgVAAQgSAAgNANg");
	this.shape_14.setTransform(-0.1,12.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006699").s().p("AhGB0IAAjkIAZAAIAAAWQAKgMALgHQALgGAPAAQAUAAARALQAQAKAJAVQAHAUABAXQgBAagIASQgJAVgSALQgSALgSgBQgMAAgMgFQgLgGgHgJIAABQgAgfhNQgOARAAAhQAAAdANAQQANAPASAAQARAAANgPQAOgRAAgfQAAgfgNgRQgNgPgRAAQgSAAgNAQg");
	this.shape_15.setTransform(-17.4,15.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006699").s().p("ABUBUIAAhmQAAgRgCgHQgEgIgGgFQgIgEgJAAQgSAAgMAMQgLALAAAaIAABeIgbAAIAAhqQAAgSgGgKQgHgJgPAAQgMAAgLAGQgJAGgFAMQgFANAAAWIAABUIgcAAIAAikIAaAAIAAAYQAHgNANgHQANgHAQAAQATAAAMAHQAJAIAGAOQATgdAfAAQAaAAANANQANAOAAAcIAABwg");
	this.shape_16.setTransform(-40,12.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006699").s().p("Ag2BAQgVgXAAgoQAAgoAWgXQAVgXAgAAQAiAAAVAWQAVAXAAAoIAAAGIh6AAQACAcAOAOQANAPAUAAQAPAAALgIQALgIAGgSIAeADQgHAagTAOQgTAOgcAAQgjAAgWgWgAgdgxQgNANgCAVIBaAAQgCgVgIgKQgOgQgVAAQgSAAgMANg");
	this.shape_17.setTransform(-62.3,12.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#006699").s().p("AgOByIAAjIIhLAAIAAgbICzAAIAAAbIhLAAIAADIg");
	this.shape_18.setTransform(-80.9,9.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#006699").s().p("AgwBpQgTgOABgbIAcAFQABAMAIAGQALAIARAAQASAAAKgIQALgIAEgOQACgJAAgbQgTAVgZABQgigBgTgYQgTgZAAghQAAgXAJgUQAIgVARgKQAQgLAWAAQAbAAAUAYIAAgVIAZAAIAACOQABAngIAQQgIAQgRAJQgRAKgYAAQgdAAgSgNgAgdhPQgOAPAAAeQAAAhANANQANAPARAAQAUAAANgOQAOgOAAggQAAgegOgQQgOgPgTAAQgQAAgNAPg");
	this.shape_19.setTransform(-109,15.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#006699").s().p("AAnBUIAAhjQAAgRgEgIQgCgJgJgFQgJgFgKAAQgRAAgNALQgNAMAAAgIAABYIgcAAIAAikIAZAAIAAAYQATgbAgAAQAPAAANAFQANAFAFAJQAHAJACAMQACAIAAATIAABkg");
	this.shape_20.setTransform(-126.3,12.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#006699").s().p("AgMByIAAikIAaAAIAACkgAgMhRIAAggIAaAAIAAAgg");
	this.shape_21.setTransform(-138.7,9.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#006699").s().p("AAhByIg1hVIgTATIAABCIgcAAIAAjjIAcAAIAACAIBAhBIAlAAIg+A8IBEBog");
	this.shape_22.setTransform(-149.3,9.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#006699").s().p("Ag3BAQgVgXAAgpQAAgtAagWQAVgSAdAAQAiAAAWAWQAVAWAAAoQAAAegJASQgKATgSAKQgTAKgVAAQghAAgWgWgAghguQgOAPAAAfQAAAfAOAQQAOAQATAAQAVAAAOgQQANgQAAgfQAAgegNgQQgPgQgUAAQgTAAgOAQg");
	this.shape_23.setTransform(-167.3,12.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#006699").s().p("Ag3BAQgVgXAAgpQAAgtAagWQAVgSAdAAQAiAAAWAWQAVAWAAAoQAAAegJASQgKATgSAKQgTAKgVAAQghAAgWgWgAghguQgOAPAAAfQAAAfAOAQQAOAQATAAQAVAAAOgQQANgQAAgfQAAgegNgQQgPgQgUAAQgTAAgOAQg");
	this.shape_24.setTransform(-185.1,12.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#006699").s().p("Ag0BnQgYgPgMgdQgMgdAAgeQAAgkAOgbQAOgbAZgNQAZgOAcAAQAjAAAXARQAYASAJAgIgeAHQgIgZgPgLQgPgMgXAAQgZAAgRANQgSANgHAUQgIAWAAAWQAAAcAJAVQAIAXASAKQASALATAAQAaAAARgPQASgPAGgdIAfAIQgKAlgZAVQgYATgkAAQgjAAgXgPg");
	this.shape_25.setTransform(-205.3,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-226.5,-10,453,39.8);


(lib.Title1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006699").s().p("AguBJQgRgOgEgaIAbgFQADARALAJQAKAJARAAQAUAAAJgIQAKgIAAgLQAAgJgJgGQgGgDgXgGQgcgIgMgEQgMgFgGgKQgHgKAAgNQAAgLAFgJQAFgKAJgGQAHgFALgDQALgDANAAQASAAAPAFQAOAGAHAKQAIAJACAQIgbAEQgCgNgJgHQgJgHgPAAQgTAAgIAGQgJAHAAAIQAAAGAEAEQADAEAIADQAEACATAGQAdAIAMAFQAMADAHAJQAGAKAAAPQAAAOgIAMQgIAMgPAHQgQAHgTAAQgfAAgRgNg");
	this.shape.setTransform(196.4,12.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006699").s().p("AgkBpQgQgLgKgUQgIgUgBgZQABgZAHgSQAJgUAQgLQARgLAUAAQANABAMAFQAMAHAHAKIAAhSIAcAAIAADjIgZAAIAAgVQgRAZgdAAQgTAAgRgLgAgdgRQgMAPAAAfQAAAgANAQQANAPARAAQASABANgQQANgOAAggQAAgfgOgQQgNgQgSgBQgSAAgMAQg");
	this.shape_1.setTransform(179.1,9.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006699").s().p("AgsBUIAAikIAZAAIAAAZQAKgRAJgGQAGgFAKAAQAOAAAOAJIgJAaQgLgGgKAAQgJAAgFAFQgIAGgDAKQgFAPAAARIAABVg");
	this.shape_2.setTransform(166.7,12.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006699").s().p("Ag8BJQgPgOAAgUQAAgNAGgKQAFgKAJgGQAJgEAMgDIAZgEQAfgEAQgGIAAgHQABgSgJgHQgKgJgUAAQgTAAgJAHQgKAHgFARIgbgDQAEgSAIgLQAJgLAQgFQAQgGAUAAQAVAAANAFQANAFAHAHQAGAIACALQACAHAAATIAAAkQAAAnACAKQABALAGAJIgeAAQgEgIgBgMQgPANgPAGQgNAFgQAAQgbAAgPgNgAgGAKQgRACgHADQgHADgEAGQgEAGAAAIQAAALAJAHQAIAIAQAAQAPAAANgHQAMgHAGgNQAFgJgBgTIAAgJQgPAFgdAFg");
	this.shape_3.setTransform(151.1,12.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006699").s().p("AhIBTIAAgYIBoh2IggABIhCAAIAAgYICGAAIAAATIhYBnIgRATIAjgBIBLAAIAAAZg");
	this.shape_4.setTransform(134.3,12.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006699").s().p("Ag8BJQgPgOAAgUQAAgNAFgKQAGgKAJgGQAJgEALgDIAZgEQAggEARgGIAAgHQgBgSgHgHQgLgJgUAAQgTAAgKAHQgJAHgFARIgbgDQADgSAKgLQAIgLAQgFQARgGATAAQAVAAAOAFQANAFAGAHQAGAIADALQABAHAAATIAAAkQAAAnACAKQACALAFAJIgdAAQgFgIgBgMQgQANgOAGQgNAFgQAAQgbAAgPgNgAgFAKQgSACgHADQgHADgEAGQgEAGAAAIQAAALAIAHQAJAIARAAQAOAAAMgHQANgHAGgNQAFgJAAgTIAAgJQgQAFgcAFg");
	this.shape_5.setTransform(117.3,12.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006699").s().p("AA7ByIAAhsIh1AAIAABsIgfAAIAAjjIAfAAIAABeIB1AAIAAheIAeAAIAADjg");
	this.shape_6.setTransform(97,9.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006699").s().p("AgMByIAAjjIAaAAIAADjg");
	this.shape_7.setTransform(72.9,9.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006699").s().p("Ag8BJQgPgOAAgUQAAgNAFgKQAGgKAJgGQAJgEALgDIAagEQAfgEAQgGIAAgHQAAgSgHgHQgLgJgUAAQgTAAgJAHQgKAHgFARIgbgDQADgSAKgLQAIgLAQgFQAQgGAUAAQAVAAANAFQAOAFAGAHQAGAIACALQACAHAAATIAAAkQAAAnACAKQACALAFAJIgeAAQgEgIgBgMQgPANgPAGQgMAFgRAAQgcAAgOgNgAgGAKQgQACgIADQgHADgEAGQgEAGAAAIQAAALAJAHQAIAIARAAQAOAAANgHQAMgHAGgNQAFgJgBgTIAAgJQgPAFgdAFg");
	this.shape_8.setTransform(60.4,12.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006699").s().p("AgyBAQgVgXAAgpQAAgZAJgUQAJgUASgKQASgKAUAAQAbAAARANQARAOAFAZIgbAEQgEgQgKgJQgKgIgOAAQgTAAgOAPQgNAPAAAgQAAAhANAPQANAPASAAQARAAALgKQALgKADgWIAcAEQgFAdgSAQQgTAQgbAAQggAAgVgWg");
	this.shape_9.setTransform(44.1,12.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006699").s().p("AgMByIAAikIAaAAIAACkgAgMhRIAAggIAaAAIAAAgg");
	this.shape_10.setTransform(32.1,9.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006699").s().p("AguBJQgRgOgEgaIAbgFQADARALAJQAKAJARAAQAUAAAJgIQAKgIAAgLQAAgJgJgGQgGgDgXgGQgcgIgMgEQgMgFgGgKQgHgKAAgNQAAgLAFgJQAFgKAJgGQAHgFALgDQALgDANAAQASAAAPAFQAOAGAHAKQAIAJACAQIgbAEQgCgNgJgHQgJgHgPAAQgTAAgIAGQgJAHAAAIQAAAGAEAEQADAEAIADQAEACATAGQAdAIAMAFQAMADAHAJQAGAKAAAPQAAAOgIAMQgIAMgPAHQgQAHgTAAQgfAAgRgNg");
	this.shape_11.setTransform(20.4,12.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006699").s().p("Ag8BxIgDgbQAJADAIAAQAIAAAGgDQAGgDADgGQADgEAGgRIADgHIg/ikIAeAAIAjBgIAJAkQAGgRAGgSIAjhhIAdAAIg/CnQgKAbgEAKQgHAOgKAHQgKAGgOAAQgHAAgLgDg");
	this.shape_12.setTransform(4.6,16);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006699").s().p("AAnByIAAhpQAAgTgJgKQgJgKgRAAQgLABgLAGQgLAHgEALQgFAJAAATIAABbIgcAAIAAjjIAcAAIAABSQAUgWAcgBQASABAOAGQANAIAGAMQAGANAAAXIAABpg");
	this.shape_13.setTransform(-12.4,9.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006699").s().p("AhWByIAAjjIBWAAQAVAAAMACQASADAKAIQAMAHAHAPQAHAOAAARQAAAdgTATQgSAUgwAAIg6AAIAABdgAg4gEIA6AAQAdAAAMgLQANgLAAgUQAAgOgIgKQgHgKgLgEQgJgCgUAAIg5AAg");
	this.shape_14.setTransform(-31.4,9.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006699").s().p("AgwBpQgTgOABgbIAcAFQABAMAIAGQALAIARAAQASAAAKgIQALgIAEgOQACgJAAgbQgTAVgZABQgigBgTgYQgTgZAAghQAAgXAJgUQAIgVARgKQAQgLAWAAQAcAAASAYIAAgVIAaAAIAACOQABAngIAQQgIAQgRAJQgRAKgYAAQgdAAgSgNgAgdhPQgOAPAAAeQAAAhANANQANAPARAAQAUAAANgOQANgOAAggQAAgegNgQQgOgPgTAAQgRAAgMAPg");
	this.shape_15.setTransform(-61,15.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006699").s().p("AAnBUIAAhjQAAgRgEgIQgCgJgJgFQgJgFgKAAQgRAAgNALQgNAMAAAgIAABYIgcAAIAAikIAZAAIAAAYQATgbAgAAQAPAAANAFQANAFAFAJQAHAJACAMQACAIAAATIAABkg");
	this.shape_16.setTransform(-78.3,12.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006699").s().p("AgMByIAAikIAaAAIAACkgAgMhRIAAggIAaAAIAAAgg");
	this.shape_17.setTransform(-90.7,9.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#006699").s().p("AgDBsQgJgFgDgIQgDgIAAgZIAAhdIgVAAIAAgXIAVAAIAAgoIAagRIAAA5IAcAAIAAAXIgcAAIAABfQAAALABAEQACAEADACQADABAHAAIAMgBIAEAZQgMACgJAAQgPAAgHgEg");
	this.shape_18.setTransform(-98.5,9.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#006699").s().p("AAnBUIAAhjQAAgRgEgIQgDgJgIgFQgIgFgMAAQgPAAgNALQgOAMAAAgIAABYIgcAAIAAikIAaAAIAAAYQASgbAgAAQAPAAANAFQAMAFAHAJQAGAJADAMQABAIAAATIAABkg");
	this.shape_19.setTransform(-112.1,12.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#006699").s().p("Ag2BAQgVgXAAgoQAAgoAWgXQAWgXAfAAQAiAAAVAWQAVAXAAAoIAAAGIh5AAQABAcAOAOQAOAPASAAQAQAAALgIQALgIAGgSIAeADQgHAagTAOQgTAOgdAAQgiAAgWgWgAgdgxQgNANgCAVIBaAAQgCgVgIgKQgOgQgVAAQgSAAgMANg");
	this.shape_20.setTransform(-129.9,12.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#006699").s().p("AgMBTIg/ilIAeAAIAkBiIAJAhIAKgfIAlhkIAdAAIg/Clg");
	this.shape_21.setTransform(-146.7,12.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#006699").s().p("Ag2BAQgVgXAAgoQAAgoAWgXQAWgXAgAAQAhAAAVAWQAVAXAAAoIAAAGIh6AAQACAcAOAOQANAPAUAAQAPAAALgIQALgIAGgSIAdADQgHAagSAOQgTAOgcAAQgjAAgWgWgAgegxQgNANgBAVIBbAAQgCgVgJgKQgNgQgWAAQgRAAgOANg");
	this.shape_22.setTransform(-163.7,12.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#006699").s().p("AgrBUIAAikIAZAAIAAAZQAJgRAJgGQAFgFALAAQAOAAAPAJIgKAaQgLgGgKAAQgJAAgFAFQgIAGgDAKQgEAPAAARIAABVg");
	this.shape_23.setTransform(-176.6,12.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#006699").s().p("AhWByIAAjjIBWAAQAWAAALACQASADALAIQALAHAHAPQAHAOAAARQAAAdgTATQgSAUgwAAIg6AAIAABdgAg4gEIA6AAQAdAAANgLQAMgLAAgUQAAgOgIgKQgGgKgNgEQgIgCgUAAIg5AAg");
	this.shape_24.setTransform(-193.3,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-226.5,-10,453,39.8);


(lib.theWrong = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("A9HVjMAAAgrFMA6PAAAMAAAArFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.4,-137.9,373,276);


(lib.Text22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("If an item breaks, such as a \ndish or glass, make sure you\nclean it up completely so  fragments don't get into food or\ninjure a coworker or yourself.", "18px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 252;
	this.text.setTransform(-2,-103.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.9,-103.1,256,206.3);


(lib.Text21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("You found it! Broken glass is \na common physical hazard, \nand it can cause serious injury. \nMake sure to cover all light \nbulbs in foodservice areas. \nThat way if a bulb shatters it\nwon’t sprinkle glass shards into\nyour food and equipment.", "18px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 251;
	this.text.setTransform(-2,-111.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.6,-111.5,255.3,223);


(lib.Text2bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AzQvlMAmhAAAQBkAAAABkIAAcDQAABkhkAAMgmhAAAQhkAAAAhkIAA8DQAAhkBkAAg");
	this.shape.setTransform(133.3,99.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.6)").s().p("AzQPmQhjgBgBhjIAA8DQABhjBjgBMAmgAAAQBlABgBBjIAAcDQABBjhlABg");
	this.shape_1.setTransform(133.3,99.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,268.6,201.6);


(lib.Text1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Click on the item in this scene that \nis a common physical hazard risk", "18px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 291;
	this.text.setTransform(155.5,5.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("A3GkoMAuNAAAQBkAAAABkIAAGJQAABkhkAAMguNAAAQhkAAAAhkIAAmJQAAhkBkAAg");
	this.shape.setTransform(158,29.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.588)").s().p("A3GEpQhkAAAAhkIAAmJQAAhkBkAAMAuNAAAQBkAAAABkIAAGJQAABkhkAAg");
	this.shape_1.setTransform(158,29.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,318,61.6);


(lib.Temperature180 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_92 = function() {
		this.stop();
		
		if(exportRoot.feedbackRect.visible == true){
			exportRoot.OptionsWrong2.visible = true;
			exportRoot.OptionsWrong2.gotoAndPlay(0);
		
		} else {
			exportRoot.OptionsWrong.visible = true;
			exportRoot.OptionsWrong.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(92).call(this.frame_92).wait(1));

	// Temperature
	this.instance = new lib.DMH_35_00_digital_display_numbers_SFS_180();
	this.instance.setTransform(23.1,-28.2,0.679,0.679);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(92).to({_off:false},0).wait(1));

	// Dashes
	this.instance_1 = new lib.DMH_35_00_digital_display_numbers_SFS_dashes();
	this.instance_1.setTransform(0,5.9,0.654,0.654,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},36).wait(7).to({_off:false,x:1},0).to({_off:true},7).wait(8).to({_off:false,x:0},0).to({_off:true},7).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109.9,5.9);


(lib.Temperature165 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_84 = function() {
		this.stop();
		exportRoot.OptionsRight.visible = true;
		exportRoot.OptionsRight.play(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(84).call(this.frame_84).wait(1));

	// Temperature
	this.instance = new lib.DMH_35_00_digital_display_numbers_SFS_165();
	this.instance.setTransform(23.1,-28.2,0.679,0.679);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(84).to({_off:false},0).wait(1));

	// Dashes
	this.instance_1 = new lib.DMH_35_00_digital_display_numbers_SFS_dashes();
	this.instance_1.setTransform(0,5.9,0.654,0.654,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},36).wait(7).to({_off:false,x:1},0).to({_off:true},7).wait(8).to({_off:false,x:0},0).to({_off:true},7).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109.9,5.9);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AsUl1IYpAAIAALrI4pAAg");
	this.shape.setTransform(79,37.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,161,78);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("You're right; this chicken has reached 165 degrees for 15 seconds.", "15px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 479;
	this.text.setTransform(-2.1,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-241.5,-15.5,483,31);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EgkZgDJMBIzAAAQAyAAAAAyIAAEvQAAAygyAAMhIzAAAQgyAAAAgyIAAkvQAAgyAyAAg");
	this.shape.setTransform(238,20.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("EgkYADKQgzAAAAgzIAAktQAAgzAzAAMBIxAAAQAzAAAAAzIAAEtQAAAzgzAAg");
	this.shape_1.setTransform(238,20.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,479,43.4);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("CHECK AGAIN", "bold 21px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 169;
	this.text.setTransform(107.5,15.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AwUkwMAgpAAAQAyAAAAAyIAAH9QAAAygyAAMggpAAAQgyAAAAgyIAAn9QAAgyAyAAg");
	this.shape.setTransform(109.5,30.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AwTExQgzAAAAgzIAAn7QAAgzAzAAMAgoAAAQAxAAAAAzIAAH7QAAAzgxAAg");
	this.shape_1.setTransform(109.5,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,222,64);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("NEEDS MORE TIME", "bold 21px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 205;
	this.text.setTransform(107.5,15.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AwUkwMAgpAAAQAyAAAAAyIAAH9QAAAygyAAMggpAAAQgyAAAAgyIAAn9QAAgyAyAAg");
	this.shape.setTransform(109.5,30.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AwTExQgzAAAAgzIAAn7QAAgzAzAAMAgoAAAQAxAAAAAzIAAH7QAAAzgxAAg");
	this.shape_1.setTransform(109.5,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,222,64);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("IT'S DONE!", "bold 21px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 169;
	this.text.setTransform(107.5,15.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AwUkwMAgpAAAQAyAAAAAyIAAH9QAAAygyAAMggpAAAQgyAAAAgyIAAn9QAAgyAyAAg");
	this.shape.setTransform(109.5,30.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AwTExQgzAAAAgzIAAn7QAAgzAzAAMAgoAAAQAxAAAAAzIAAH7QAAAzgxAAg");
	this.shape_1.setTransform(109.5,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,222,64);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(3,1,1).p("Ax4yBMAjxAAAQAyAAAAAyMAAAAifQAAAygyAAMgjxAAAQgyAAAAgyMAAAgifQAAgyAyAAg");
	this.shape.setTransform(119.5,115.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("Ax3SCQgzAAAAgyMAAAgifQAAgyAzAAMAjwAAAQAyAAAAAyMAAAAifQAAAygyAAg");
	this.shape_1.setTransform(119.5,115.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,242,234);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.text = new cjs.Text("Drag the thermometer over the food, and drop it with the TIP \nof the thermometer where you want to check the temperature.", "16px 'Arial'");
	this.text.lineHeight = 20;
	this.text.setTransform(148,446);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(15));

	// Layer 1
	this.instance = new lib.DMH_35_02_roasted_chicken();
	this.instance.setTransform(0,0,0.297,0.297);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,980,503.1);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DMH_35_thermistor_buttons_();
	this.instance.setTransform(0,0,0.169,0.169);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220.7,285.9);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DMH_35_thermistor_alone();
	this.instance.setTransform(0,0,0.179,0.179);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,198.2,198);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("EhMjAwqMAAAhhUMCZHAAAMAAABhUg");
	this.shape.setTransform(490,311.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,980,623);


(lib.StaticDashes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DMH_35_00_digital_display_numbers_SFS_dashes();
	this.instance.setTransform(-54.9,3,0.654,0.654,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.9,-2.9,109.9,5.9);


(lib.SceneBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AtlNmIAA7LIbKAAIAAbLg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.OutlineHint1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(7,1,1).p("A9NliMA6bAAAIAALFMg6bAAAg");
	this.shape.setTransform(222,35.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31.5,-3.5,381,78);


(lib.OutlineHint2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(7,1,1).p("AqdoGIU7AAIAAQNI07AAg");
	this.shape.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.5,-55,141,111);


(lib.Option_Btns = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66CC66").ss(3,1,1).p("AwUkwMAgpAAAQAyAAAAAyIAAH9QAAAygyAAMggpAAAQgyAAAAgyIAAn9QAAgyAyAAg");
	this.shape.setTransform(109.5,30.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66CC66").s().p("AwTExQgzAAAAgzIAAn7QAAgzAzAAMAgoAAAQAxAAAAAzIAAH7QAAAzgxAAg");
	this.shape_1.setTransform(109.5,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.hinttext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("INSERT\nHERE", "25px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 115;
	this.text.setTransform(-2,-31.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.5,-31.2,119,62.4);


(lib.GoodPlate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DMH_06_11_physical_hazards_broken_glass_sweeping();
	this.instance.setTransform(0,0,0.272,0.272);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,980,522.7);


(lib.GoodLight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DMH_06_11_physical_hazards_broken_glass_cover();
	this.instance.setTransform(0,0,0.272,0.272);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.DMH_06_11_physical_hazards_plate();
	this.instance_1.setTransform(0,0,0.272,0.272);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,980,522.7);


(lib.feedback2indicator = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AimCnIAAlNIFNAAIAAFNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.7,-16.7,33.5,33.5);


(lib.drag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("AhJBQIAAifICTAAIAACfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-8,15,16);


(lib.DoneWrongtxt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Actually, this chicken is done. Remember that poultry needs\nto be cooked to 165 degrees for at least 15 seconds.", "15px 'Arial'");
	this.text.lineHeight = 19;
	this.text.lineWidth = 403;
	this.text.setTransform(-203.4,-23.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203.4,-23.3,407,46.6);


(lib.CorrectBtns = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.976)").s().p("AqxKyIAA1jIVjAAIAAVjg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.correct = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("ApvFxIAArhITfAAIAALhg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.5,-36.9,125,74);


(lib.ClickArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AtlNmIAA7LIbKAAIAAbLg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.bgSymbol = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DMH_06_11_physical_hazards_plate();
	this.instance.setTransform(0,0,0.272,0.272);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,980,523);


(lib._2linefeedback = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EggcgD5MBA5AAAQAyAAAAAyIAAGPQAAAygyAAMhA5AAAQgyAAAAgyIAAmPQAAgyAyAAg");
	this.shape.setTransform(1.3,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("EggcAD6QgyAAAAgyIAAmPQAAgyAyAAMBA5AAAQAyAAAAAyIAAGPQAAAygyAAg");
	this.shape_1.setTransform(1.3,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212.9,-25.3,428.6,53.2);


(lib.Wrong2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		playSound("_35_4awav");
	}
	this.frame_184 = function() {
		//make dashes visible
			exportRoot.dashes.visible = true;
			//hide both tempRight and tempWrong
			exportRoot.TempGood.visible = false;
			exportRoot.TempGood.gotoAndStop(0);
			
			exportRoot.TempBad.visible = false;
			exportRoot.TempBad.gotoAndStop(0);
			//reset thermometer to default position
			exportRoot.thermometer.x = 800;
			exportRoot.thermometer.y = 455;
			exportRoot.thermometer.gotoAndStop(0);
			exportRoot.thermometer.mouseEnabled = true;
			//hide optionsgood and optionsbad
			exportRoot.OptionsRight.gotoAndStop(0);
			exportRoot.OptionsWrong.gotoAndStop(0);
			
			//Play the hint part
			if(exportRoot.scene2Hint.visible != true){
			exportRoot.scene2Hint.visible = true;
			exportRoot.scene2Hint.gotoAndPlay(0);
			}
		
			//hide this whole text thing
			this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(170).call(this.frame_184).wait(1));

	// Text
	this.instance = new lib.wrongtext2();
	this.instance.setTransform(2.5,1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(171));

	// Outline
	this.instance_1 = new lib._2linefeedback();
	this.instance_1.setTransform(0,-0.4);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:1.3,regY:1.3,x:1.3,y:0.9,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(171));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212.9,-25.7,428.6,53.2);


(lib.Wrong1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		playSound("_35_4wav");
	}
	this.frame_219 = function() {
		//make dashes visible
			exportRoot.dashes.visible = true;
			//hide both tempRight and tempWrong
			exportRoot.TempGood.visible = false;
			exportRoot.TempGood.gotoAndStop(0);
			
			exportRoot.TempBad.visible = false;
			exportRoot.TempBad.gotoAndStop(0);
			//reset thermometer to default position
			exportRoot.thermometer.x = 800;
			exportRoot.thermometer.y = 455;
			exportRoot.thermometer.gotoAndStop(0);
			exportRoot.thermometer.mouseEnabled = true;
			//hide optionsgood and optionsbad
			exportRoot.OptionsRight.gotoAndStop(0);
			exportRoot.OptionsWrong.gotoAndStop(0);
		
			exportRoot.feedbackRect.visible = true;
		
			//hide this whole text thing
			this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(205).call(this.frame_219).wait(1));

	// Text
	this.instance = new lib.wrongtext1();
	this.instance.setTransform(2.5,1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(206));

	// Outline
	this.instance_1 = new lib._2linefeedback();
	this.instance_1.setTransform(0,-0.4);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:1.3,regY:1.3,x:1.3,y:0.9,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(206));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212.9,-25.7,428.6,53.2);


(lib.transitionoutscene2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.transitionout();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-489.9,-312,980,624);


(lib.Thermometer = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30));

	// Hiding Shape (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AKpQ1QgOgOgMgPIhvBvI6m6mIJnpnIamamIhvBwQAPALAOAOQBSBSAAB0QAAB0hSBSQhSBSh0AAQh0AAhShSg");
	mask.setTransform(-2.6,-6.6);

	// Thermometer
	this.instance = new lib.Symbol2();
	this.instance.setTransform(0,0,1,1,0,0,0,99,99);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:99.1,x:4.8,y:4.8},0).wait(1).to({x:9.3,y:9.2},0).wait(1).to({x:13.5,y:13.4},0).wait(1).to({x:17.5,y:17.5},0).wait(1).to({x:21.3,y:21.2},0).wait(1).to({x:24.9,y:24.8},0).wait(1).to({x:28.3,y:28.2},0).wait(1).to({x:31.5,y:31.4},0).wait(1).to({x:34.5,y:34.4},0).wait(1).to({x:37.3,y:37.3},0).wait(1).to({x:40,y:40},0).wait(1).to({x:42.5,y:42.5},0).wait(1).to({x:44.9,y:44.9},0).wait(1).to({x:47.2,y:47.1},0).wait(1).to({x:49.3,y:49.2},0).wait(1).to({x:51.3,y:51.2},0).wait(1).to({x:53.1,y:53.1},0).wait(1).to({x:54.9,y:54.9},0).wait(1).to({x:56.6,y:56.5},0).wait(1).to({x:58.2,y:58.1},0).wait(1).to({x:59.7,y:59.7},0).wait(1).to({x:61.2,y:61.1},0).wait(1).to({x:62.5,y:62.5},0).wait(1).to({x:63.9,y:63.8},0).wait(1).to({x:65.2,y:65.1},0).wait(1).to({x:66.4,y:66.4},0).wait(1).to({x:67.7,y:67.6},0).wait(1).to({x:68.9,y:68.8},0).wait(1).to({x:70.1,y:70},0).wait(1));

	// drag
	this.drag = new lib.drag();
	this.drag.setTransform(93.1,92);
	this.drag.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.drag).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99,-99,199.6,199);


(lib.OptionsWrong2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
		
		
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.check.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			//make dashes visible
			exportRoot.dashes.visible = true;
			//hide both tempRight and tempWrong
			exportRoot.TempGood.visible = false;
			exportRoot.TempGood.gotoAndStop(0);
			
			exportRoot.TempBad.visible = false;
			exportRoot.TempBad.gotoAndStop(0);
			//reset thermometer to default position
			exportRoot.thermometer.x = 800;
			exportRoot.thermometer.y = 455;
			exportRoot.thermometer.gotoAndStop(0);
			exportRoot.thermometer.mouseEnabled = true;
			//hide optionsgood and optionsbad
			exportRoot.OptionsRight.gotoAndStop(0);
			exportRoot.OptionsWrong.gotoAndStop(0);
			exportRoot.OptionsWrong2.gotoAndStop(0);
			// End your custom code
		}
		
		this.done.addEventListener("click", wrong_MouseClickHandler.bind(this));
		
		this.more.addEventListener("click", wrong_MouseClickHandler.bind(this));
		
		function wrong_MouseClickHandler()
		{
			//is there a way to check to see if it's been checked before?
			//something like if(exportRoot.variable > 0)...
			exportRoot.OptionsWrong2.gotoAndStop(0);
			exportRoot.OptionsWrong2.visible = false;
			exportRoot.BadAttempt2.visible = true;
			exportRoot.BadAttempt2.gotoAndPlay(0);
			
			
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// Btn_Check
	this.check = new lib.Option_Btns();
	this.check.setTransform(119.5,188.5,1,1,0,0,0,109.5,30.5);
	this.check.alpha = 0.5;
	this.check._off = true;
	new cjs.ButtonHelper(this.check, 0, 1, 2, false, new lib.Option_Btns(), 3);

	this.timeline.addTween(cjs.Tween.get(this.check).wait(14).to({_off:false},0).wait(1));

	// ReCheck
	this.instance = new lib.Symbol8();
	this.instance.setTransform(119.5,188.5,1,1,0,0,0,109.5,30.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(1));

	// Btn_More
	this.more = new lib.Option_Btns();
	this.more.setTransform(119.5,116.5,1,1,0,0,0,109.5,30.5);
	this.more.alpha = 0.5;
	this.more._off = true;
	new cjs.ButtonHelper(this.more, 0, 1, 2, false, new lib.Option_Btns(), 3);

	this.timeline.addTween(cjs.Tween.get(this.more).wait(14).to({_off:false},0).wait(1));

	// More_Time
	this.instance_1 = new lib.Symbol7();
	this.instance_1.setTransform(119.5,116.5,1,1,0,0,0,109.5,30.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(1));

	// Btn_Done
	this.done = new lib.Option_Btns();
	this.done.setTransform(119.5,43.5,1,1,0,0,0,109.5,30.5);
	this.done.alpha = 0.5;
	this.done._off = true;
	new cjs.ButtonHelper(this.done, 0, 1, 2, false, new lib.Option_Btns(), 3);

	this.timeline.addTween(cjs.Tween.get(this.done).wait(14).to({_off:false},0).wait(1));

	// Done
	this.instance_2 = new lib.Symbol6();
	this.instance_2.setTransform(119.5,43.5,1,1,0,0,0,109.5,30.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(1));

	// Background
	this.instance_3 = new lib.Symbol5();
	this.instance_3.setTransform(118.5,114.5,1,1,0,0,0,119.5,115.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,242,234);


(lib.OptionsWrong = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
		
		
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.check.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			//make dashes visible
			exportRoot.dashes.visible = true;
			//hide both tempRight and tempWrong
			exportRoot.TempGood.visible = false;
			exportRoot.TempGood.gotoAndStop(0);
			
			exportRoot.TempBad.visible = false;
			exportRoot.TempBad.gotoAndStop(0);
			//reset thermometer to default position
			exportRoot.thermometer.x = 800;
			exportRoot.thermometer.y = 455;
			exportRoot.thermometer.gotoAndStop(0);
			exportRoot.thermometer.mouseEnabled = true;
			//hide optionsgood and optionsbad
			exportRoot.OptionsRight.gotoAndStop(0);
			exportRoot.OptionsWrong.gotoAndStop(0);
			// End your custom code
		}
		
		this.done.addEventListener("click", wrong_MouseClickHandler.bind(this));
		
		this.more.addEventListener("click", wrong_MouseClickHandler.bind(this));
		
		function wrong_MouseClickHandler()
		{
			//is there a way to check to see if it's been checked before?
			//something like if(exportRoot.variable > 0)...
			
			exportRoot.OptionsWrong.visible = false;
			exportRoot.BadAttempt1.visible = true;
			exportRoot.BadAttempt1.gotoAndPlay(0);
			
			
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// Btn_Check
	this.check = new lib.Option_Btns();
	this.check.setTransform(119.5,188.5,1,1,0,0,0,109.5,30.5);
	this.check.alpha = 0.5;
	this.check._off = true;
	new cjs.ButtonHelper(this.check, 0, 1, 2, false, new lib.Option_Btns(), 3);

	this.timeline.addTween(cjs.Tween.get(this.check).wait(14).to({_off:false},0).wait(1));

	// ReCheck
	this.instance = new lib.Symbol8();
	this.instance.setTransform(119.5,188.5,1,1,0,0,0,109.5,30.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(1));

	// Btn_More
	this.more = new lib.Option_Btns();
	this.more.setTransform(119.5,116.5,1,1,0,0,0,109.5,30.5);
	this.more.alpha = 0.5;
	this.more._off = true;
	new cjs.ButtonHelper(this.more, 0, 1, 2, false, new lib.Option_Btns(), 3);

	this.timeline.addTween(cjs.Tween.get(this.more).wait(14).to({_off:false},0).wait(1));

	// More_Time
	this.instance_1 = new lib.Symbol7();
	this.instance_1.setTransform(119.5,116.5,1,1,0,0,0,109.5,30.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(1));

	// Btn_Done
	this.done = new lib.Option_Btns();
	this.done.setTransform(119.5,43.5,1,1,0,0,0,109.5,30.5);
	this.done.alpha = 0.5;
	this.done._off = true;
	new cjs.ButtonHelper(this.done, 0, 1, 2, false, new lib.Option_Btns(), 3);

	this.timeline.addTween(cjs.Tween.get(this.done).wait(14).to({_off:false},0).wait(1));

	// Done
	this.instance_2 = new lib.Symbol6();
	this.instance_2.setTransform(119.5,43.5,1,1,0,0,0,109.5,30.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(1));

	// Background
	this.instance_3 = new lib.Symbol5();
	this.instance_3.setTransform(118.5,114.5,1,1,0,0,0,119.5,115.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,242,234);


(lib.OptionsRight = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
		
		
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.check.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			//make dashes visible
			exportRoot.dashes.visible = true;
			//hide both tempRight and tempWrong
			exportRoot.TempGood.visible = false;
			exportRoot.TempGood.gotoAndStop(0);
			
			exportRoot.TempBad.visible = false;
			exportRoot.TempBad.gotoAndStop(0);
			//reset thermometer to default position
			exportRoot.thermometer.x = 800;
			exportRoot.thermometer.y = 455;
			exportRoot.thermometer.gotoAndStop(0);
			exportRoot.thermometer.mouseEnabled = true;
			//hide optionsgood and optionsbad
			exportRoot.OptionsRight.gotoAndStop(0);
			exportRoot.OptionsWrong.gotoAndStop(0);
			// End your custom code
		}
		
		this.done.addEventListener("click", done_ClickHandler.bind(this));
		
		function done_ClickHandler(){
			exportRoot.GoodStuff.visible = true;
			exportRoot.OptionsRight.visible = false;
			exportRoot.GoodStuff.play();
		}
		
		this.more.addEventListener("click", more_ClickHandler.bind(this));
		
		function more_ClickHandler(){
			exportRoot.BadStuffDone.visible = true;
			exportRoot.OptionsRight.visible = false;
			exportRoot.BadStuffDone.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// Btn_Check
	this.check = new lib.Option_Btns();
	this.check.setTransform(119.5,188.5,1,1,0,0,0,109.5,30.5);
	this.check.alpha = 0.5;
	this.check._off = true;
	new cjs.ButtonHelper(this.check, 0, 1, 2, false, new lib.Option_Btns(), 3);

	this.timeline.addTween(cjs.Tween.get(this.check).wait(14).to({_off:false},0).wait(1));

	// ReCheck
	this.instance = new lib.Symbol8();
	this.instance.setTransform(119.5,188.5,1,1,0,0,0,109.5,30.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(1));

	// Btn_More
	this.more = new lib.Option_Btns();
	this.more.setTransform(119.5,116.5,1,1,0,0,0,109.5,30.5);
	this.more.alpha = 0.5;
	this.more._off = true;
	new cjs.ButtonHelper(this.more, 0, 1, 2, false, new lib.Option_Btns(), 3);

	this.timeline.addTween(cjs.Tween.get(this.more).wait(14).to({_off:false},0).wait(1));

	// More_Time
	this.instance_1 = new lib.Symbol7();
	this.instance_1.setTransform(119.5,116.5,1,1,0,0,0,109.5,30.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(1));

	// Btn_Done
	this.done = new lib.Option_Btns();
	this.done.setTransform(119.5,43.5,1,1,0,0,0,109.5,30.5);
	this.done.alpha = 0.5;
	this.done._off = true;
	new cjs.ButtonHelper(this.done, 0, 1, 2, false, new lib.Option_Btns(), 3);

	this.timeline.addTween(cjs.Tween.get(this.done).wait(14).to({_off:false},0).wait(1));

	// Done
	this.instance_2 = new lib.Symbol6();
	this.instance_2.setTransform(119.5,43.5,1,1,0,0,0,109.5,30.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(1));

	// Background
	this.instance_3 = new lib.Symbol5();
	this.instance_3.setTransform(118.5,114.5,1,1,0,0,0,119.5,115.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,242,234);


(lib.hinting = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// Layer 2
	this.instance = new lib.hinttext();
	this.instance.setTransform(1,-0.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol11();
	this.instance_1.setTransform(0.2,0.2,2.709,2.709,0,0,0,79,37.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:2.89,scaleY:2.89,alpha:0.125},0).wait(1).to({scaleX:3.06,scaleY:3.06,alpha:0.25},0).wait(1).to({scaleX:3.24,scaleY:3.24,alpha:0.375},0).wait(1).to({scaleX:3.41,scaleY:3.41,alpha:0.5},0).wait(1).to({scaleX:3.17,scaleY:3.17,alpha:0.55},0).wait(1).to({scaleX:2.93,scaleY:2.93,alpha:0.6},0).wait(1).to({scaleX:2.69,scaleY:2.69,alpha:0.65},0).wait(1).to({scaleX:2.45,scaleY:2.45,alpha:0.7},0).wait(1).to({scaleX:2.21,scaleY:2.21,y:0.1,alpha:0.75},0).wait(1).to({scaleX:1.97,scaleY:1.97,x:0.1,y:0.2,alpha:0.8},0).wait(1).to({scaleX:1.72,scaleY:1.72,y:0.1,alpha:0.85},0).wait(1).to({scaleX:1.48,scaleY:1.48,alpha:0.9},0).wait(1).to({scaleX:1.24,scaleY:1.24,alpha:0.95},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-217.9,-105.5,436,211.2);


(lib.DoneWrong = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"Start FadeOut":244});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		playSound("_35_3wav");
	}
	this.frame_244 = function() {
		exportRoot.fadeOut.visible = true;
		exportRoot.fadeOut.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(230).call(this.frame_244).wait(16));

	// Text
	this.instance = new lib.DoneWrongtxt();
	this.instance.setTransform(3,2.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(246));

	// Outline
	this.instance_1 = new lib._2linefeedback();
	this.instance_1.setTransform(0,-1.9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:1.3,regY:1.3,x:1.3,y:-0.6,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(246));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212.9,-27.2,428.6,53.2);


(lib.CorrectFeedback = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		playSound("_35_5wav");
	}
	this.frame_164 = function() {
		exportRoot.fadeOut.visible = true;
		exportRoot.fadeOut.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(150).call(this.frame_164).wait(11));

	// Text
	this.instance = new lib.Symbol10();
	this.instance.setTransform(-0.4,-1.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(161));

	// Outline
	this.instance_1 = new lib.Symbol9();
	this.instance_1.setTransform(0.1,-5,1,1,0,0,0,241,21);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:238,regY:20.2,x:-2.9,y:-5.8,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(161));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-242.4,-27.5,483.5,43.4);


// stage content:



(lib.TestInteractions = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"Scene 1":0,Wait1:14,Wait2:15,Wait3:16,"Wait-Hint":17,waitMore:61,Correct:309,End:991,Scene2:999,"Drag Functionality":1015,"Fades in, Holds, Fades out. couldn't get the looping stuff working.":62,"Fades in, Holds, Fades out. couldn't get the looping stuff working.":62,Incorrect1:63,Incorrect2:129,Incorrect3:197});

	// timeline functions:
	this.frame_0 = function() {
		/* 
		
		INSTRUCTIONS: Select all (ctrl/Command +A), copy (ctrl/Command +C), and then paste 
		into the actions panel in animate, when you’re on an “Actions” layer. MAKE SURE YOU’RE ON THE FIRST FRAME.
		
		Also, save as a code snippet so you don’t have to keep coming back here for this
		
		responsive scale code as expressed by @davegamez 
		
		*/
		
		
		var page_body = document.getElementsByTagName("body")[0];
		page_body.style.backgroundColor = "#ffffff";
		page_body.style.overflow = "hidden";
		page_body.style.position = "fixed";
		
		var page_canvas = document.getElementsByTagName("canvas")[0];
		stageWidth = page_canvas.width;
		stageHeight = page_canvas.height;
		
		var viewport = document.querySelector('meta[name=viewport]');
		var viewportContent = 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0';
		
		if (viewport === null) {
		 var head = document.getElementsByTagName('head')[0];
		 viewport = document.createElement('meta');
		 viewport.setAttribute('name', 'viewport');
		 head.appendChild(viewport);
		}
		
		viewport.setAttribute('content', viewportContent);
		
		function onResize() {
		 var widthToHeight = stageWidth / stageHeight;
		 var newWidth = window.innerWidth;
		 var newHeight = window.innerHeight;
		 var newWidthToHeight = newWidth / newHeight;
		 //
		 if (newWidthToHeight > widthToHeight) {
		 newWidth = newHeight * widthToHeight;
		 page_canvas.style.height = newHeight + "px";
		 page_canvas.style.width = newWidth + "px";
		 } else {
		 newHeight = newWidth / widthToHeight;
		 page_canvas.style.height = newHeight + "px";
		 page_canvas.style.width = newWidth + "px";
		 }
		 scale = newWidthToHeight / widthToHeight;
		 stage.width = newWidth;
		 stage.height = newHeight;
		 page_canvas.style.marginTop = ((window.innerHeight - newHeight) / 2) + "px";
		 page_canvas.style.marginLeft = ((window.innerWidth - newWidth) / 2) + "px";
		}
		
		window.onresize = function () {
		 onResize();
		}
		
		onResize();
		createjs.Touch.enable(stage);
		
		//Mute all Audio?
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.gotoScene2.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			// Start your custom code
			this.gotoAndPlay("Scene2");
			console.log("success to Scene2");
		}
	}
	this.frame_14 = function() {
		this.stop();
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.Light.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay("Correct");
		}
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.Plate.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay("Correct");
		}
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.WrongSpot1.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			// Start your custom code
		
			this.gotoAndPlay("Incorrect1"); //makes double sound on second play? 
			
			// End your custom code
		}
	}
	this.frame_15 = function() {
		this.stop();
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.WrongSpot2.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			// Start your custom code
		
			this.gotoAndPlay("Incorrect2");
		
			// End your custom code
		}
	}
	this.frame_16 = function() {
		this.stop();
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.WrongSpot3.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			// Start your custom code
		
			this.gotoAndPlay("Incorrect3");
		
			// End your custom code
		}
	}
	this.frame_17 = function() {
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.WrongSpot4.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			// Start your custom code
		
			this.gotoAndPlay("Incorrect1"); //makes double sound on second play? 
			
			// End your custom code
		}
	}
	this.frame_61 = function() {
		this.stop();
	}
	this.frame_63 = function() {
		playSound("_062_incorrect1wav");
	}
	this.frame_127 = function() {
		this.gotoAndStop("Wait2");
	}
	this.frame_129 = function() {
		playSound("_063_incorrect2wav");
	}
	this.frame_195 = function() {
		this.gotoAndStop("Wait3");
	}
	this.frame_197 = function() {
		playSound("_064_incorrect3wav");
	}
	this.frame_305 = function() {
		this.gotoAndPlay("Wait-Hint");
	}
	this.frame_309 = function() {
		playSound("_065_scene1correctwav");
	}
	this.frame_999 = function() {
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.gotoScene1.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			// Start your custom code
			this.gotoAndPlay("Scene 1");
		}
	}
	this.frame_1013 = function() {
		//put each in an if statement so it doesn't toggle?
		exportRoot.scene2Hint.visible = false;
		
		if(exportRoot.TempGood.visible == true){
			exportRoot.TempGood.visible = false;
			console.log("temp 165 invisible");
		}
		if(exportRoot.TempBad.visible == true){
			exportRoot.TempBad.visible = false;
			console.log("temp 180 invisible");
		}
		if(exportRoot.dashes.visible == true){
			exportRoot.dashes.visible = true;
			console.log("dashes are visible");
		}
		if(exportRoot.fadeOut.visible == true){
			exportRoot.fadeOut.visible = false;
			console.log("fadeout invisible");
		}
		if(exportRoot.GoodStuff.visible == true){
			exportRoot.GoodStuff.visible = false;
			console.log("goodStuff invisible");
		}
		if(exportRoot.BadStuffDone.visible == true){
			exportRoot.BadStuffDone.visible = false;
			console.log("bad done invisible");
		}
		if(exportRoot.BadAttempt1.visible == true){
			exportRoot.BadAttempt1.visible = false;
			console.log("bad attempt1 invisible");
		}
		if(exportRoot.BadAttempt2.visible == true){
			exportRoot.BadAttempt2.visible = false;
			console.log("bad attempt1 invisible");
		}
		if(exportRoot.feedbackRect.visible == true){
			exportRoot.feedbackRect.visible = false;
			console.log("feedbackRect invisible");
		}
	}
	this.frame_1015 = function() {
		/*This is a very custom one in that the drop has to be based on the 
		    thermometer tip and not just over a spot.*/
		
		//stop on dragging spot
		this.stop();
		
		var WrongCount = 0;
		
		stage.mouseMoveOutside = true;
		
		var dragger = this.thermometer; //change to "instance_name_here"
		
		//====== Set these to the instance names of the corresponding Drop Areas ======
		var right = this.theRight; //set this to correct spot
		var wrong = this.theWrong; //set this to incorrect spot
		
		//============= automatically from the vars, right and wrong ===============
		//--------------(x, y, w, h)------------------------------------------------
		right.setBounds(right.x, right.y, right.width, right.height);
		wrong.setBounds(wrong.x, wrong.y, wrong.width, wrong.height);
		//==========================================================================
		
		//Enables touch
		createjs.Touch.enable(stage);
		
		hitTestArray = [];
		
		//this drags with mouse, but not with fingers
		dragger.on("pressmove", function(evt){
			evt.currentTarget._goto(0);
		    evt.currentTarget.x = evt.stageX;
		    evt.currentTarget.y = evt.stageY;
		
		
		    if(intersect(evt.currentTarget.drag, right)){
		      evt.currentTarget.alpha=.5;
		
		      }else if(intersect(evt.currentTarget.drag, wrong)){
		       evt.currentTarget.alpha=.2;  
		
		     }else{
		      evt.currentTarget.alpha=1; 
		    }
		
		    stage.update(evt);
		  }, this);
		
		  this.thermometer.on("pressup", function(evt){  //this function will be very custom, always
		    //lock position of drag object and play animation if any
		    dragger.x = dragger.x;
		    dragger.y = dragger.y;
		
			  
		    if(hitTestArray.length > 1){
		      dragger.alpha = 1;
		      stage.update(evt);
		    }
		        if(intersect(evt.currentTarget.drag, right)){    //Intersection testing for good
		            
		          //Add Custom Code here (usually going to be "goToAndPlay("<frame>")")
					dragger.mouseEnabled = false;
					exportRoot.dashes.visible = false;
					exportRoot.TempGood.visible = true;
					dragger.play();
					exportRoot.TempGood.play(0);
		            evt.currentTarget.alpha=1; 
		
		        }else if(intersect(evt.currentTarget.drag, wrong)){  //intersection Testing for bad
		           
		          //Add Custom Code here (usually going to be "goToAndPlay("<frame>")")
					dragger.mouseEnabled = false;
					exportRoot.dashes.visible = false;
					exportRoot.TempBad.visible = true;
					dragger.play();
					exportRoot.TempBad.play(0);
					
		            evt.currentTarget.alpha=1; 
		        }
		
		
		      stage.update(evt);
		  }, this);
		
		//DO NOT CHANGE THIS UNDER ANY CIRCUMSTANCES
		//IT IS TO CHECK TO SEE IF AN INTERSECTION HAS OCCURED
		//returns true or false
		function intersect(obj1, obj2){
		  var objBounds1 = obj1.nominalBounds.clone();
		  var objBounds2 = obj2.nominalBounds.clone();
		
		  var pt = obj1.globalToLocal(obj2.x, obj2.y);
			
		  
		  var h1 = -(objBounds1.height / 2 + objBounds2.height);
		  var h2 = objBounds2.height / 8;
		  var w1 = -(objBounds1.width / 2 + objBounds2.width);
		  var w2 = objBounds2.width / 8;
		 
		  
		  if(pt.x > w2 || pt.x < w1){ //too left or too right
		    spliceThis(hitTestArray, obj2);
		    return false;
		  } 
		  if(pt.y > h2 || pt.y < h1){ //too high or too low
		    spliceThis(hitTestArray, obj2);
		    return false;
		  } 
		    if(hitTestArray.indexOf(obj2) < 0){ //Obj2 not found
		    hitTestArray.push(obj2);
		  }
		  return true;
		}
		
		//Array Function
		function spliceThis(array, obj){
		  if(array.indexOf(obj) > -1){
		   array.splice((array.indexOf(obj)), 1);
		  }
		}
		
		
		
		stage.update();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1).call(this.frame_15).wait(1).call(this.frame_16).wait(1).call(this.frame_17).wait(44).call(this.frame_61).wait(2).call(this.frame_63).wait(64).call(this.frame_127).wait(2).call(this.frame_129).wait(66).call(this.frame_195).wait(2).call(this.frame_197).wait(108).call(this.frame_305).wait(4).call(this.frame_309).wait(690).call(this.frame_999).wait(14).call(this.frame_1013).wait(2).call(this.frame_1015).wait(1));

	// sc 2 fade out
	this.fadeOut = new lib.transitionoutscene2();
	this.fadeOut.setTransform(490,311);
	this.fadeOut._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fadeOut).wait(1013).to({_off:false},0).wait(3));

	// Bloom Transition (b/c dragger moves on fadeout)
	this.instance = new lib.transitionout();
	this.instance.setTransform(490,311,1,0.84);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(976).to({_off:false},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(24));

	// feedback2 indicator
	this.feedbackRect = new lib.feedback2indicator();
	this.feedbackRect.setTransform(962.2,555.3);
	this.feedbackRect._off = true;

	this.timeline.addTween(cjs.Tween.get(this.feedbackRect).wait(1013).to({_off:false},0).wait(3));

	// Go To Scene 2
	this.gotoScene2 = new lib.SceneBtn();
	this.gotoScene2.setTransform(530,597,0.299,0.218);
	new cjs.ButtonHelper(this.gotoScene2, 0, 1, 2, false, new lib.SceneBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.gotoScene2).to({_off:true},999).wait(17));

	// GoTo Scene 1
	this.gotoScene1 = new lib.SceneBtn();
	this.gotoScene1.setTransform(465,597,0.299,0.218);
	this.gotoScene1._off = true;
	new cjs.ButtonHelper(this.gotoScene1, 0, 1, 2, false, new lib.SceneBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.gotoScene1).wait(999).to({_off:false},0).wait(17));

	// Scene Btn Txt
	this.text = new cjs.Text("2", "28px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 33;
	this.text.lineWidth = 48;
	this.text.setTransform(528,578);

	this.text_1 = new cjs.Text("1", "28px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 33;
	this.text_1.lineWidth = 48;
	this.text_1.setTransform(463,578);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1016));

	// Title
	this.instance_1 = new lib.Title1();
	this.instance_1.setTransform(490,26,1,1,0,0,0,0,9.8);
	this.instance_1.alpha = 0;

	this.instance_2 = new lib.Title2();
	this.instance_2.setTransform(490,26,1,1,0,0,0,0,9.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0.6,regY:12.9,x:490.6,y:29.1,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(963).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(999).to({_off:false},0).wait(1).to({regX:0.1,regY:12.7,x:490.1,y:28.9,alpha:0.063},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.938},0).wait(1).to({alpha:1},0).wait(1));

	// OptionsBad2
	this.OptionsWrong2 = new lib.OptionsWrong2();
	this.OptionsWrong2.setTransform(819,418.5,1,1,0,0,0,120,109.5);
	this.OptionsWrong2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.OptionsWrong2).wait(1013).to({_off:false},0).wait(3));

	// OptionsBad1
	this.OptionsWrong = new lib.OptionsWrong();
	this.OptionsWrong.setTransform(819,418.5,1,1,0,0,0,120,109.5);
	this.OptionsWrong._off = true;

	this.timeline.addTween(cjs.Tween.get(this.OptionsWrong).wait(1013).to({_off:false},0).wait(3));

	// OptionsGood
	this.OptionsRight = new lib.OptionsRight();
	this.OptionsRight.setTransform(819,418.5,1,1,0,0,0,120,109.5);
	this.OptionsRight._off = true;

	this.timeline.addTween(cjs.Tween.get(this.OptionsRight).wait(1013).to({_off:false},0).wait(3));

	// Not Done 2
	this.BadAttempt2 = new lib.Wrong2();
	this.BadAttempt2.setTransform(377.5,98.2,1,1,0,0,0,0,-0.5);
	this.BadAttempt2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.BadAttempt2).wait(1013).to({_off:false},0).wait(3));

	// Not Done 1
	this.BadAttempt1 = new lib.Wrong1();
	this.BadAttempt1.setTransform(377.5,98.2,1,1,0,0,0,0,-0.5);
	this.BadAttempt1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.BadAttempt1).wait(1013).to({_off:false},0).wait(3));

	// Bad Sprite Done
	this.BadStuffDone = new lib.DoneWrong();
	this.BadStuffDone.setTransform(377.5,101.4,1,1,0,0,0,0,-0.8);
	this.BadStuffDone._off = true;

	this.timeline.addTween(cjs.Tween.get(this.BadStuffDone).wait(1013).to({_off:false},0).wait(3));

	// Good Sprite
	this.GoodStuff = new lib.CorrectFeedback();
	this.GoodStuff.setTransform(378.5,102.5);
	this.GoodStuff._off = true;

	this.timeline.addTween(cjs.Tween.get(this.GoodStuff).wait(1013).to({_off:false},0).wait(3));

	// Thermometer
	this.thermometer = new lib.Thermometer();
	this.thermometer.setTransform(740,392,1,1,0,0,0,-60,-63);
	this.thermometer.alpha = 0;
	this.thermometer._off = true;

	this.timeline.addTween(cjs.Tween.get(this.thermometer).wait(999).to({_off:false},0).wait(1).to({regX:7.1,regY:5.2,x:807.1,y:460.2,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(3));

	// hint
	this.scene2Hint = new lib.hinting();
	this.scene2Hint.setTransform(285,268.5);
	this.scene2Hint._off = true;

	this.timeline.addTween(cjs.Tween.get(this.scene2Hint).wait(1013).to({_off:false},0).wait(3));

	// Right Drop Zone
	this.theRight = new lib.correct();
	this.theRight.setTransform(216,241.1,1,1,0,0,0,-52.5,-26.9);
	this.theRight.alpha = 0;
	this.theRight._off = true;

	this.timeline.addTween(cjs.Tween.get(this.theRight).wait(1015).to({_off:false},0).wait(1));

	// Wrong Drop Zone
	this.theWrong = new lib.theWrong();
	this.theWrong.setTransform(200,164,1,1,0,0,0,-166.5,-127);
	this.theWrong.alpha = 0;
	this.theWrong._off = true;

	this.timeline.addTween(cjs.Tween.get(this.theWrong).wait(1015).to({_off:false},0).wait(1));

	// Temperature180
	this.TempBad = new lib.Temperature180();
	this.TempBad.setTransform(818,165,1,1,0,0,0,55,3);
	this.TempBad._off = true;

	this.timeline.addTween(cjs.Tween.get(this.TempBad).wait(1014).to({_off:false},0).wait(2));

	// Temperature 165
	this.TempGood = new lib.Temperature165();
	this.TempGood.setTransform(818,165,1,1,0,0,0,55,3);
	this.TempGood._off = true;

	this.timeline.addTween(cjs.Tween.get(this.TempGood).wait(1014).to({_off:false},0).wait(2));

	// Dashes
	this.dashes = new lib.StaticDashes();
	this.dashes.setTransform(818,165);
	this.dashes._off = true;

	this.timeline.addTween(cjs.Tween.get(this.dashes).wait(1013).to({_off:false},0).wait(3));

	// Thermometer Display
	this.instance_3 = new lib.Symbol3();
	this.instance_3.setTransform(819.7,202.9,1,1,0,0,0,110.4,142.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(999).to({_off:false},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.938},0).wait(1).to({alpha:1},0).wait(1));

	// Background
	this.instance_4 = new lib.Symbol4();
	this.instance_4.setTransform(490,301.5,1,1,0,0,0,490,251.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(999).to({_off:false},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.938},0).wait(1).to({alpha:1},0).wait(1));

	// btnCorrect Light
	this.Light = new lib.CorrectBtns();
	this.Light.setTransform(714.6,107.5,2.622,0.469);
	this.Light._off = true;
	new cjs.ButtonHelper(this.Light, 0, 1, 2, false, new lib.CorrectBtns(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Light).wait(14).to({_off:false},0).to({_off:true},48).wait(954));

	// btnCorrect Plate
	this.Plate = new lib.CorrectBtns();
	this.Plate.setTransform(561.2,403.3,0.989,0.722);
	this.Plate._off = true;
	new cjs.ButtonHelper(this.Plate, 0, 1, 2, false, new lib.CorrectBtns(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Plate).wait(14).to({_off:false},0).to({_off:true},48).wait(954));

	// Incorrect Area Btn 4
	this.WrongSpot4 = new lib.ClickArea();
	this.WrongSpot4.setTransform(490,311.5,5.632,3.002);
	this.WrongSpot4._off = true;
	new cjs.ButtonHelper(this.WrongSpot4, 0, 1, 2, false, new lib.ClickArea(), 3);

	this.timeline.addTween(cjs.Tween.get(this.WrongSpot4).wait(17).to({_off:false},0).to({_off:true},45).wait(954));

	// Incorrect Area Btn 3
	this.WrongSpot3 = new lib.ClickArea();
	this.WrongSpot3.setTransform(490,311.5,5.632,3.002);
	this.WrongSpot3._off = true;
	new cjs.ButtonHelper(this.WrongSpot3, 0, 1, 2, false, new lib.ClickArea(), 3);

	this.timeline.addTween(cjs.Tween.get(this.WrongSpot3).wait(16).to({_off:false},0).to({_off:true},46).wait(954));

	// Incorrect Area Btn 2
	this.WrongSpot2 = new lib.ClickArea();
	this.WrongSpot2.setTransform(490,311.5,5.632,3.002);
	this.WrongSpot2._off = true;
	new cjs.ButtonHelper(this.WrongSpot2, 0, 1, 2, false, new lib.ClickArea(), 3);

	this.timeline.addTween(cjs.Tween.get(this.WrongSpot2).wait(15).to({_off:false},0).to({_off:true},47).wait(954));

	// Incorrect Area Btn 1
	this.WrongSpot1 = new lib.ClickArea();
	this.WrongSpot1.setTransform(490,311.5,5.632,3.002);
	this.WrongSpot1._off = true;
	new cjs.ButtonHelper(this.WrongSpot1, 0, 1, 2, false, new lib.ClickArea(), 3);

	this.timeline.addTween(cjs.Tween.get(this.WrongSpot1).wait(14).to({_off:false},0).to({_off:true},48).wait(954));

	// Hints copy
	this.instance_5 = new lib.OutlineHint2();
	this.instance_5.setTransform(764.5,594.5,1,1,0,0,0,204.5,189.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(17).to({_off:false},0).wait(1).to({regX:0,regY:0.5,x:560,y:405.5,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(15).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(247).to({_off:false,regX:204.5,regY:189.5,x:764.5,y:594.5},0).wait(1).to({regX:0,regY:0.5,x:560,y:405.5,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(491).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(186));

	// Hints
	this.instance_6 = new lib.OutlineHint1();
	this.instance_6.setTransform(698.5,263.5,1,1,0,0,0,204.5,189.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(17).to({_off:false},0).wait(1).to({regX:222,regY:35.5,x:716,y:109.5,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(15).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(247).to({_off:false,regX:204.5,regY:189.5,x:698.5,y:263.5},0).wait(1).to({regX:222,regY:35.5,x:716,y:109.5,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(151).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(526));

	// text2.2
	this.instance_7 = new lib.Text22();
	this.instance_7.setTransform(830,303.7);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(704).to({_off:false},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(272).to({_off:true},1).wait(24));

	// text2.1
	this.instance_8 = new lib.Text21();
	this.instance_8.setTransform(831,312.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(309).to({_off:false},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(381).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(296));

	// txt 2 bg
	this.instance_9 = new lib.Text2bg();
	this.instance_9.setTransform(831.3,293.6,1,1,0,0,0,133.3,99.8);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(309).to({_off:false},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(667).to({_off:true},1).wait(24));

	// Correct Action 2
	this.instance_10 = new lib.GoodPlate();
	this.instance_10.setTransform(490,311.5,1,1,0,0,0,490,261.3);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(814).to({_off:false},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(162).to({_off:true},1).wait(24));

	// Correct Action 1
	this.instance_11 = new lib.GoodLight();
	this.instance_11.setTransform(490,311.5,1,1,0,0,0,490,261.3);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(474).to({_off:false},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(502).to({_off:true},1).wait(24));

	// First Text
	this.instance_12 = new lib.Text1();
	this.instance_12.setTransform(168.8,82.5,1,1,0,0,0,158,29.8);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(296).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).wait(3).to({_off:true},1).wait(688));

	// Background
	this.instance_13 = new lib.bgSymbol();
	this.instance_13.setTransform(490,311.5,1,1,0,0,0,490,261.5);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(977).to({_off:true},1).wait(24));

	// White Base
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhMjAo3MAAAhRsMCZHAAAMAAABRsg");
	this.shape.setTransform(490,311.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(976).to({_off:false},0).wait(40));

	// Base
	this.instance_14 = new lib.Symbol1();
	this.instance_14.setTransform(490,24.9,1,1,0,0,0,490,24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1016));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(490,311.5,980,623);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;