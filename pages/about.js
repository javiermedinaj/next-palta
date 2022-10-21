import React from 'react'
import {
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useColorModeValue
} from '@chakra-ui/react'
import Link from 'next/link'

export async function getServerSideProps() {
    const res = await fetch('https://api.github.com/users/javiermedinaj')
    const data = await res.json();

    return {
        props: {
            user: data
        }
    }
}

const about = ({ user }) => {
    return (
        <Center py={6}>
            <Stack
                borderWidth="1px"
                borderRadius="lg"
                w={{ sm: "100%", md: "540px" }}
                height={{ sm: "476px", md: "20rem" }}
                direction={{ base: "column", md: "row" }}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                padding={4}
            >
                <Flex flex={1} bg="blue.200">
                    <Image
                        objectFit="cover"
                        boxSize="100%"
                        src={user.avatar_url}
                    />
                </Flex>
                <Stack
                    flex={1}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    p={1}
                    pt={2}
                >
                    <Heading fontSize={"2xl"} fontFamily={"body"}>
                        {user.name}
                    </Heading>
                    <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
                        @medinajavierj
                    </Text>
                    <Text
                        textAlign={"center"}
                        color={useColorModeValue("gray.700", "gray.400")}
                        px={3}
                    >
                        {user.bio}
                        <br />
                        <Link href={user.blog} color={"blue.400"}>
                            Ver mi perfil
                        </Link>

                    </Text>


                    <Stack
                        width={"100%"}
                        mt={"2rem"}
                        direction={"row"}
                        padding={2}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Button
                            flex={1}
                            fontSize={"sm"}
                            rounded={"full"}
                            bg={"blue.400"}
                            color={"white"}
                            boxShadow={
                                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                            }
                            _hover={{
                                bg: "blue.500"
                            }}
                            _focus={{
                                bg: "blue.500"
                            }}

                        >
                            <a href={user.html_url} target="_blank">
                                Follow
                            </a>
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Center>

        // <Container>
        //     <Box>
        //         <Text>{user.name}</Text>
        //         <Text>{user.bio}</Text>
        //         <Text>{user.blog}</Text>
        //         <Image src={user.avatar_url} />
        //         <Link href={user.html_url} target="_blank" display="flex-end"> Ver perfil</Link>
        //     </Box>
        // </Container>

    )

}
export default about