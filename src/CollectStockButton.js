import React, { useState } from 'react';

export default function CollectStockButton({  displayCollectedStock, setDisplayCollectedStock }) {
    const [stockButtonLabel, setStockButtonLabel] = useState("Collect Stock");
    
    function handleDisplayStock() {
        setDisplayCollectedStock(true);
        setStockButtonLabel("Stock Collected");
    }

    return (
        <button
            onClick={handleDisplayStock}
            disabled={displayCollectedStock}
        >
            {stockButtonLabel}
        </button>
    );
}