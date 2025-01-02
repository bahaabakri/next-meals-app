const sql = require('better-sqlite3');
const db = sql('meals.db');

export async function getAllMeals() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    // const err = new Error('this is custom error')
    // err.statusCode = 500
    // throw err
    return db.prepare('SELECT * FROM meals').all()
}

export async function getMeal(slug) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}