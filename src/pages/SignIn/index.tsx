import React, { useState } from "react";

import Colors from '../../../constants/Colors';
const ColorTheme = Colors['Theme'];

import { Container, Logo, InputContainer, Input, Button, ButtonText } from './styles';

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin() {

        if (email === '' || password === '') {
            return;
        }

        console.log("Email digitado " + email)
    }

    return (
        <Container>
            <Logo
                source={require('../../assets/logo.jpeg')}
            />

            <InputContainer>
                <Input
                    placeholder="Digite seu email"
                    placeholderTextColor={ColorTheme.Preto}
                    value={email}
                    onChangeText={setEmail}
                />

                <Input
                    placeholder="Sua senha"
                    secureTextEntry={true}
                    placeholderTextColor={ColorTheme.Preto}
                    value={password}
                    onChangeText={setPassword}
                />

                <Button onPress={handleLogin}>
                    <ButtonText>Acessar</ButtonText>
                </Button>
            </InputContainer>
        </Container>
    )
}