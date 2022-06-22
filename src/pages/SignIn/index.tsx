import React, { useState } from "react";

import Colors from '../../../constants/Colors';
const ColorTheme = Colors['Theme'];

import { Feather } from '@expo/vector-icons'

import { Container, Logo, InputContainer, Input, ContainerButton, Button, ButtonText, ContainerSignUp, ButtonSignUp, TextSignUp } from './styles';

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
                source={require('../../assets/logo.png')}
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
                <ContainerButton>
                    <ButtonText>Sign In</ButtonText>
                    <Button onPress={handleLogin}>
                        <Feather name="arrow-right" size={20} color={ColorTheme.Branco} />
                    </Button>
                </ContainerButton>

                <ContainerSignUp>
                    <ButtonSignUp>
                        <TextSignUp>Sign Up</TextSignUp>
                    </ButtonSignUp>
                </ContainerSignUp>
            </InputContainer>
        </Container>
    )
}