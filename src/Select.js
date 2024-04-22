import React, { useState } from 'react';
import ProductVariantOptions from './ProductVariantOptions.js'

export default function Select({
  productVariants,
  disabledSelect,
  onAddProductVariantToSelected,
  quantity,
  setQuantity,
  selectedProductVariant,
  setSelectedProductVariant,
  labelText
}) {

  const [quantityErrorMessage, setQuantityErrorMessage] = useState();
  const selectName = `selectName-${selectedProductVariant?.productVariantID ?? "new"}`;

  function handleQuantityChange(quantityValue) {
    const parsedQuantity = parseInt(quantityValue);

    if (parsedQuantity < 1) {
      setQuantityErrorMessage("Quantity must be greater than 0!");
      return;
    }

    setQuantityErrorMessage(false);
    setQuantity(parsedQuantity);

    onAddProductVariantToSelected({ productVariant: selectedProductVariant, quantity: parsedQuantity });
  }

  function handleProductVariantChange(selectedProductVariantId) {
    const selected = parseInt(selectedProductVariantId);
    const previousSelectedProductVariantId = parseInt(selectedProductVariant?.productVariantID);

    if (previousSelectedProductVariantId) {
      onAddProductVariantToSelected({ previousSelectedProductVariantId: previousSelectedProductVariantId });
    }

    if (selected === "") {
      setSelectedProductVariant(null);
      onAddProductVariantToSelected({ productVariant: null, quantity: quantity });
      return;
    }

    const productVariant = productVariants.find((pv) => pv.productVariantID === selected);
    setSelectedProductVariant(productVariant);
    if (quantity > 0) {
      onAddProductVariantToSelected({ productVariant: productVariant, quantity: quantity });
    }
  }

  return (
    <div>

      <label htmlFor={`variants-${selectName}`}>{labelText}</label>

      <select
        id={`variants-${selectName}`}
        name={`variants-${selectName}`}
        onChange={(e) => {
          const selectedProductVariantId = e.target.value;
          handleProductVariantChange(selectedProductVariantId);
        }}
        value={selectedProductVariant?.productVariantID ?? ""}
      >
        <option value="">--Please choose a product variant --</option>

        <ProductVariantOptions
          productVariants={productVariants}
          selectName={selectName}
          selectedProductVariant={selectedProductVariant}
          disabledSelect={disabledSelect}
        />
      </select>

      <input
        className='quantity'
        type='number'
        placeholder='Quantity'
        onChange={e => handleQuantityChange(e.target.value)}
        value={quantity ?? ""}
        name={`quantity-${selectName}`}
      />
      
      {quantityErrorMessage &&
        <div className='forbidden'>
          {quantityErrorMessage}
        </div>
      }
      
    </div>
  );
}