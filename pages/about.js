import React from 'react'
import { Text, Image, Container, Box } from '@chakra-ui/react'

export async function getServerSideProps() {
    const res = await fetch('https://api.github.com/users/javiermedinaj')
    const data = await res.json();
    console.log(data)
    return {
        props: {
            user: data
        }
    }
}

const about = ({ user }) => {
    return (
        <Container>
            <Box>
                <Text>{user.name}</Text>
                <Text>{user.bio}</Text>
                <Text>{user.blog}</Text>
                <Image src={user.avatar_url} />
                <a href={user.html_url} target="_blank"> Ver perfil</a>
            </Box>
        </Container>
    )

}
export default about