var Tanks = Tanks || {};

Tanks.game= new Phaser.Game(800,600,Phaser.AUTO);

Tanks.game.state.add('Boot', Tanks.Boot);
Tanks.game.state.add('Preload', Tanks.Preload);
Tanks.game.state.add('Menu', Tanks.Menu);
Tanks.game.state.add('Lobby', Tanks.Lobby);
Tanks.game.state.add('Game', Tanks.Game);


Tanks.game.state.start('Boot');