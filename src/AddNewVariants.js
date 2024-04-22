import React, { useState } from 'react';
import Select from './Select.js';
import productVariants from './productVariants.js';

export default function AddNewVariants({ 
    selectedProductVariantsAndQuantities,
    updateSelectedProductVariants,
    displayCollectedStock
}) {

    const [selectedProductVariantAndQuantity, setSelectedProductVariantAndQuantity] = useState();
    const [disableButton, setDisableButton] = useState();
    const [quantity, setQuantity] = useState();
    const [selectedProductVariant, setSelectedProductVariant] = useState();

    function addProductVariantToSelected() {
        if (selectedProductVariantAndQuantity.productVariant.productVariantID) {
            updateSelectedProductVariants(selectedProductVariantAndQuantity);

            if (selectedProductVariantsAndQuantities.length === productVariants.length - 1) {
                setDisableButton(true);
                //return;
            }

            setSelectedProductVariantAndQuantity(null);
            setQuantity("");
            setSelectedProductVariant(null);
        }
    }

    return (
        <div className={displayCollectedStock ? "disabled" : ""}>
            <h2>Add new product variant</h2>
            <Select
                productVariants={productVariants.map((pv) => {
                    const isDisabled = selectedProductVariantsAndQuantities.length > 0 ?
                    selectedProductVariantsAndQuantities.find(pvq => pvq.productVariant?.productVariantID === pv.productVariantID) !== undefined
                        : false;
                    return {
                        productVariantID: pv.productVariantID,
                        productName: pv.productName,
                        size: pv.size,
                        disabled: isDisabled,
                        selected: `${pv.productName} - Size: ${pv.size}`
                    }
                })}
                key={`selectNameParent`}
                disabled={false}
                quantity={quantity}
                setQuantity={setQuantity}
                selectedProductVariant={selectedProductVariant}
                setSelectedProductVariant={setSelectedProductVariant}
                labelText={"Choose a product:"}
                onAddProductVariantToSelected={(data) => setSelectedProductVariantAndQuantity(data)}
            />

            <button
                onClick={addProductVariantToSelected}
                disabled={disableButton}
            >
                Add
            </button>
        </div>
    );
}