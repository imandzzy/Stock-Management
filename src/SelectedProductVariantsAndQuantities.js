import productVariants from "./productVariants";
import Select from "./Select";

export default function SelectedProductVariantsAndQuantities({ 
    selectedProductVariantsAndQuantities,
    updateSelectedProductVariants,
    displayCollectedStock
 }) {

    return (
    <>  
        <div className={displayCollectedStock ? "disabled" : ""}>
                <h1>Selected product variants</h1>
                {
                    selectedProductVariantsAndQuantities.map((selectedProducts, index) => (
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
                                    selected: `${pv.productName} - Size: ${pv.size}`,
                                    isAlreadySelected: true
                                }
                            })}
                            key={`selectNameParent-${index}`}
                            disabledSelect={false}
                            quantity={selectedProducts.quantity}
                            selectedProductVariant={selectedProducts.productVariant}
                            onAddProductVariantToSelected={(data) => updateSelectedProductVariants(data)}
                        />
                    ))
                }
            </div>
    </>);
}