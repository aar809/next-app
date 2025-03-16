import React, { CSSProperties } from 'react'
import { Html, Body, Container, Text, Link, Preview, Tailwind } from '@react-email/components'

const WelcomeTemplate = ({ name }: { name: string }) => {
    return (
        <Html>
            <Preview>WelcomeTemplate</Preview>
            <Tailwind>
                <Body className="bg-white">
                    <Container>
                        <Text className="font-bold text-3xl"> Hello {name}</Text>
                        <Link href='https://codewithmosh.com'>Click me</Link>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
};

const body: CSSProperties = {
    background: "#fff"
}

const heading: CSSProperties = {
    fontSize: '32x'
}

export default WelcomeTemplate