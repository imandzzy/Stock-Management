export default function DisplayCollectedStock({ selectedProductVariantsAndQuantities }) {
    return (
         <>
             <h2>Collected Product Variants</h2>
             <div>
                 {selectedProductVariantsAndQuantities &&
                     selectedProductVariantsAndQuantities.map((pvq, index) => {
                         const optionText = `${pvq.productVariant?.productName}, Size: ${pvq.productVariant?.size}, Quantity:${pvq.quantity}`;
                         return (
                             <span key={index}>
                                 {optionText}
                                 <br/>
                             </span>
                         );
                     })
                 }
             </div>
         </>
    );
            
}