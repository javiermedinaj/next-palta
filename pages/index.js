import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
} from "@chakra-ui/react"
import Link from 'next/link'

export default function index() {
    return (
        <>


            <Container maxW={"3xl"}>
                <Stack
                    as={Box}
                    textAlign={"center"}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 20, md: 36 }}
                >
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
                        lineHeight={"110%"}
                    >
                        Tipos de <br />
                        <Text as={"span"} color={"green.400"}>
                            Paltas/Avocados
                        </Text>
                    </Heading>
                    <Text color={"gray.500"}>
                        lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur
                    </Text>
                    <Stack
                        direction={"column"}
                        spacing={3}
                        align={"center"}
                        alignSelf={"center"}
                        position={"relative"}
                    >
                        <Button
                            colorScheme={"green"}
                            bg={"green.400"}
                            rounded={"full"}
                            px={6}

                            _hover={{
                                bg: "green.500"
                            }}
                        >
                            <Link href="/product">
                                Ver productos
                            </Link>
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </>
    )
}

