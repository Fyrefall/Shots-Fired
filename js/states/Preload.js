var Tanks = Tanks || {};

Tanks.Preload = {
    preload: function () {
        //display loading bar here, centre screen and fairly visible

        var IMG_DIR = "assets/images/";
        var BTN_DIR = IMG_DIR + "buttons/";
        var AUD_DIR = "assets/audio/";
        var DAT_DIR = "assets/data/";
        var FNT_DIR = "assets/fonts/";

        //images and sprites
        /*

        smoke
        explosion
        cloud
        tree
        bullet

         */
        this.load.image('turret',IMG_DIR + 'sprites/tank_turret.png');
        this.load.image('tank',IMG_DIR + 'sprites/tank_body.png');
        this.load.image('game_background',IMG_DIR + 'sprites/temp_background.png');
        this.load.image('bullet',IMG_DIR + 'sprites/bullet.png');

        //buttons

        //audio

        //data
    },
    create: function () {
        this.state.start('Game',true,false);//change to menu
    }
};
