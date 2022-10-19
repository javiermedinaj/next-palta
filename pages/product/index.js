import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'

const index = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        window.fetch('/api/avo')
            .then((response) => response.json())
            .then(({ data, length }) => {
                setProduct(data)
            })
    }, [])

    return (
        <div>
            <Navbar />
            {
                product.map((product) => (
                    <div key={product.id}>
                        <h2>{product.name}</h2>
                        <img src={product.image} />
                        <Link href={`/product/${product.id}`}>
                            <a> ver mas</a>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default index