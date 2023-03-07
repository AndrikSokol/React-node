import React from 'react'

export const usePaginations = (totalPages) =>{
    const pagesArray = React.useMemo(()=>{
        for (let i = 0; i < totalPages; i++) {
          pagesArray.push(i+1);
        }
    },[totalPages])
    return pagesArray;
    
}