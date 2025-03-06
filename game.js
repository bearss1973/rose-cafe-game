var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('coffeeCup', 'assets/coffee-cup.png');  // 確保路徑正確
}

function create() {
    this.add.image(400, 300, 'coffeeCup');
}

function update() {
    // 遊戲邏輯
}
