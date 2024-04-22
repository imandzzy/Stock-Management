// assume we retrieved from database each variants of products with following units and its total units

const productVariant = {
  productVariantID: [1, 2, 6, 7],
  productID: [1, 1, 2, 2],
  Name: ['T-shirt Harry', 'T-shirt Harry', 'Pants Joggers', 'Pants Joggers'],
  Size: ['S', 'M', 'L', 'XL'],
  Units: [20, 30, 40, 50]
};


const productVariants = [
  {
    productVariantID: 1,
    productID: 1,
    name: 'T-shirt Harry',
    size: 'S',
    units: 20
  },
  {
    productVariantID: 2,
    productID: 1,
    name: 'T-shirt Harry',
    size: 'M',
    units: 30
  },
  {
    productVariantID: 6,
    productID: 1,
    name: 'Pants Joggers',
    size: 'L',
    units: 40
  },
  {
    productVariantID: 7,
    productID: 1,
    name: 'Pants Joggers',
    size: 'XL',
    units: 50
  },
];

export default productVariants;