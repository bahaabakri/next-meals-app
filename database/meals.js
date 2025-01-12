import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs'
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
export async function saveMeal(meal) {
    meal.slug = slugify(meal.title, {lower: true})
    meal.instructions = xss(meal.instructions)
    // handle image (save image file in public folder)
    const extention = meal.image.name.split('.').pop()
    const imageName = `${meal.slug}.${extention}`
    const writeImagePath = `public/images/${imageName}`
    // console.log(writeImagePath);
    
    const writeStream = fs.createWriteStream(writeImagePath)
    const bufferedImage = await meal.image.arrayBuffer()
    writeStream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            // console.log(error)
            throw new Error('Faild to save image')
        }
    })
    meal.image = `/images/${imageName}`

    // save in db
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve()
            db.prepare(`INSERT INTO meals (slug, title, summary, instructions, image, creator, creator_email)
                VALUES (@slug, @title, @summary, @instructions, @image, @name, @email)`)
                .run(meal)
        } , 5000)
    })


}