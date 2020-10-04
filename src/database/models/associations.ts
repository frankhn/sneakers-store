import Brand from "./brand";
import Quantity from "./quantity";
import Size from "./size";
import Sneakers from "./sneakers";


Sneakers.hasMany(Quantity, {
  foreignKey: 'sneaker_id',
  as: 'details'
})

Quantity.belongsTo(Size, {
  foreignKey: 'size_id'
})

Sneakers.belongsTo(Brand, {
  foreignKey: 'brand_id',
  as: 'brand'
})

export { };
