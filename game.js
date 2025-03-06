const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
    this.load.image('background', 'background.png'); // 背景圖
}

function create() {
    this.add.image(400, 300, 'background');
    this.add.text(250, 50, '歡迎來到玫瑰咖啡館', { fontSize: '32px', fill: '#ffffff' });
}

function update() {
}
