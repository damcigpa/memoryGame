const sql = require('better-sqlite3');
const db = sql('images.db');

const images = [
    { url: './close-up.jpg' },
    { url: './flower.jpg' },
    { url: './landscape.jpg' }
];

db.prepare(`
    CREATE TABLE IF NOT EXISTS images (
        url TEXT NOT NULL
    )
`).run();

function initData() {
    const stmt = db.prepare(`
        INSERT INTO images (url) VALUES (@url)
    `);

    for (const image of images) {
        stmt.run(image);
    }
}

initData();