const db=require('../util/database');
const Cart = require('./cart');


module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
  return  db.execute('INSERT INTO databace1.prodects(title,image url,description) VALUES(?,?,?) ',[ this.title, this.imageUrl ,this.description ])
    
   }

  static deleteById(id) {
   
  }

  static fetchAll(cb) {
  return db.execute('SELECT * FROM databace1.prodects')
  }

  static findById(id,) {
  
}
}