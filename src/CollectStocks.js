import React, { useState } from 'react';
import CollectStockButton from './CollectStockButton.js';
import DisplayCollectedStock from './DisplayCollectedStock.js';
import AddNewVariants from './AddNewVariants.js';
import SelectedProductVariantsAndQuantities from './SelectedProductVariantsAndQuantities.js';

export default function CollectStocks() {

    const [displayCollectedStock, setDisplayCollectedStock] = useState(false);
    const [selectedProductVariantsAndQuantities, setSelectedProductVariantsAndQuantities] = useState([]);

    function updateSelectedProductVariants(productVariantSelectedData) {
        const previousSelectedProductVariantId = productVariantSelectedData?.previousSelectedProductVariantId;

        if (previousSelectedProductVariantId) {
            setSelectedProductVariantsAndQuantities(prevSelectedProductVariantsAndQuantities =>
                prevSelectedProductVariantsAndQuantities.filter(pvq => pvq.productVariant.productVariantID !== previousSelectedProductVariantId)
            );
            return;
        }

        // remove any repetitive entry for the same product variant
        setSelectedProductVariantsAndQuantities(prevSelectedProductVariantsAndQuantities =>
            prevSelectedProductVariantsAndQuantities.filter(pvq => pvq.productVariant?.productVariantID !== productVariantSelectedData?.productVariant?.productVariantID)
        );
        console.log(selectedProductVariantsAndQuantities);


        if (productVariantSelectedData?.productVariant) {
            setSelectedProductVariantsAndQuantities(prevSelectedProductVariantsAndQuantities => {
                return [
                    ...prevSelectedProductVariantsAndQuantities
                        .filter(pv => pv.productVariantID !== productVariantSelectedData?.productVariant.productVariantID),
                    {
                        productVariant: productVariantSelectedData.productVariant,
                        quantity: productVariantSelectedData.quantity
                    }
                ];
            });
        }
    }

    return (
        <>  
            <SelectedProductVariantsAndQuantities
                selectedProductVariantsAndQuantities={selectedProductVariantsAndQuantities}
                updateSelectedProductVariants={updateSelectedProductVariants}
                displayCollectedStock={displayCollectedStock}
            />

            <AddNewVariants 
                selectedProductVariantsAndQuantities={selectedProductVariantsAndQuantities}
                updateSelectedProductVariants={updateSelectedProductVariants}
                displayCollectedStock={displayCollectedStock}
            />

            <CollectStockButton
                displayCollectedStock={displayCollectedStock}
                setDisplayCollectedStock={setDisplayCollectedStock}
            />

            {displayCollectedStock && 
                <DisplayCollectedStock 
                    selectedProductVariantsAndQuantities={selectedProductVariantsAndQuantities}
                />
            }
        </>
    );
}