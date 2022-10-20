import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Box, Badge, Image, Container } from '@chakra-ui/react'

const index = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        window.fetch('/api/avo')
            .then((response) => response.json())
            .then(({ data }) => {
                setProduct(data)
            })
    }, [])

    return (
        <Container>

            {
                product.map((product) => (
                    <div key={product.id}>
                        <Box maxW="sm" borderRadius="lg" overflow="hidden"
                            mt={10}
                        >
                            <Image src={product.image} objectFit='cover' borderRadius='full'
                            />
                            <Box p="6">
                                <Box display="flex" alignItems="baseline">
                                    <Badge borderRadius="full" px="2" colorScheme="teal">
                                        <Link href={`/product/${product.id}`}>
                                            <a> ver mas</a>
                                        </Link>
                                    </Badge>
                                    <Box
                                        color="gray.500"
                                        fontWeight="semibold"
                                        letterSpacing="wide"
                                        fontSize="xs"
                                        textTransform="uppercase"
                                        ml="2"
                                    >
                                        {product.name}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </div>
                ))
            }
        </Container>
    )
}

export default index