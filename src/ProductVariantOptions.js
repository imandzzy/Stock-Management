export default function ProductVariantOptions({ productVariants, selectName, selectedProductVariant, disabledSelect }) {
    return (  
        <>
            {productVariants.map((productVariant) => {
                const optionId = productVariant.productVariantID;
                const optionText = productVariant.selected;

                return (
                  <option
                    key={`${selectName}-optionId-${optionId}`}
                    value={optionId}
                    disabled={(productVariant.disabled && selectedProductVariant?.productVariantID !== optionId) || disabledSelect}
                  >
                    {optionText}
                  </option>
                );
            })}
        </>
    )
}