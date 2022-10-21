import React from 'react'
import Link from 'next/link'
import {
    Box,
    Flex,
    Button,
    Menu,
    MenuButton,
    useColorModeValue,
    Stack,
    useColorMode,
} from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import Avocado from './SVGIcons/Avocado'

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <>
            <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    <Box mr={1}>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </Box>
                    <Box>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </Box>
                    <Box p={1}>
                        <Link href="/product">
                            <a>Products</a>
                        </Link>
                    </Box>
                    <Flex alignItems={"center"}>
                        <Stack direction={"row"} spacing={4}>
                            <Button ml={2} onClick={toggleColorMode}>
                                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                            </Button>
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={"full"}
                                    variant={"link"}
                                    cursor={"pointer"}
                                    minW={0}
                                >
                                    <Avocado />
                                </MenuButton>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>

    )
}

