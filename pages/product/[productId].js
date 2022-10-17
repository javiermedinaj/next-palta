import React from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
    const router = useRouter();

    return (
        <div>
            Esta es la pagina del producto {router.query.productId}
        </div>
    )
}

export default ProductItem