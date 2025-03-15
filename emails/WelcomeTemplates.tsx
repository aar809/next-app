import React from 'react'
import { Html, Body, Container, Text, Link, Preview } from '@react-email/components'

const WelcomeTemplates = ({ name }: { name: string }) => {
    return (
        <Html>
            <Preview>WelcomeTemplates</Preview>
            <Body>
                <Container>
                    <Text> Hello {name}</Text>
                    <Link href='https://codewithmosh.com'>Click me</Link>
                </Container>
            </Body>
        </Html>
    )
}

export default WelcomeTemplates