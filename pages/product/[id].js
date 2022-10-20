import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Box, Container, Button, Stack, Image, Text } from '@chakra-ui/react'

export default function avos1() {
    const { query: { id } } = useRouter()
    const [avos, setAvos] = useState()

    const peticion = async () => {
        const res = await fetch(`/api/avo/${id}`)
        const avis = await res.json()
        setAvos(avis)
    }
    useEffect(() => {
        peticion()
    }, [id])
    console.log(avos)

    return (
        <Container>
            <Box maxW="sm" borderRadius="lg" overflow="hidden"
                mt={10}>
                <Text p={5}>{avos?.name}</Text>
                <Image src={avos?.image} borderRadius='full'
                    objectFit='cover'
                    mb={2} />
                <Text p='2' m='1' bg='green.400'> Price : {avos?.price}</Text>
                <Stack>
                    <Link href="/product">
                        <Button colorScheme='teal' variant='outline'>
                            Volver atras
                        </Button>
                    </Link>
                    <Link href="/carrito">
                        <Button colorScheme='teal'>
                            Agregar al carro
                        </Button>
                    </Link>
                </Stack>
            </Box>
        </Container>
    )
}