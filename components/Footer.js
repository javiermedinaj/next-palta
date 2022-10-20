import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    useColorModeValue
} from "@chakra-ui/react"
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import Avocado from './SVGIcons/Avocado'


const SocialButton = ({ children, label, href }) => {
    return (
        <chakra.button
            bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
            rounded={"full"}
            w={8}
            h={8}
            cursor={"pointer"}
            as={"a"}
            href={href}
            display={"inline-flex"}
            alignItems={"center"}
            justifyContent={"center"}
            transition={"background 0.3s ease"}
            _hover={{
                bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200")
            }}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
            {children}
        </Text>
    )
}

export default function LargeWithNewsletter() {
    return (
        <Box
            bg={useColorModeValue("gray.50", "gray.900")}
            color={useColorModeValue("gray.700", "gray.200")}
            mt={10}
        >
            <Container as={Stack} maxW={"2xl"} py={10}>
                <SimpleGrid
                    templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
                    spacing={20}
                >
                    <Stack spacing={10}>
                        <Box>
                            <Avocado />
                        </Box>
                        <Text fontSize={"sm"}>
                            Proyecto realizado en el curso de NextJs
                        </Text>
                        <Stack direction={"row"} spacing={6}>
                            <SocialButton label={"Twitter"} href={"#"}>
                                <FaTwitter />
                            </SocialButton>
                            <SocialButton label={"YouTube"} href={"#"}>
                                <FaLinkedinIn />
                            </SocialButton>
                            <SocialButton label={"Instagram"} href={"#"}>
                                <FaInstagram />
                            </SocialButton>
                        </Stack>
                    </Stack>
                    <Stack align={"flex-start"}>
                        <ListHeader>Proyect</ListHeader>
                        <Link href={"/about"}>About us</Link>
                        <Link href={"/product"}>Product</Link>
                        <Link href={"/contacto"}>Contact</Link>
                        <Link href={"/"}>Github</Link>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    )
}
