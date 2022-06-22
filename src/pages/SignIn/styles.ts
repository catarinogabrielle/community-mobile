import styled from 'styled-components';
import Colors from '../../../constants/Colors';
const ColorTheme = Colors['Theme'];

export const Container = styled.View`                                    
flex: 1;
justify-content: center;
align-items: center;
background-color: ${ColorTheme.AzulEscuro};
`;

export const Logo = styled.Image`                                    
margin-bottom: 18px;
`;

export const InputContainer = styled.View`                                    
width: 95%;
align-items: center;
justify-content: center;
padding: 32px 14px;
`;

export const Input = styled.TextInput`                                    
width: 95%;
height: 40px;
background-color: ${ColorTheme.Branco};
margin-bottom: 14px;
border-radius: 4px;
padding: 0 8px;
color: ${ColorTheme.Preto} ;
`;

export const Button = styled.TouchableOpacity`                                    
width: 95%;
height: 40px;
background-color: ${ColorTheme.Roxo};
border-radius: 4px;
justify-content: center;
align-items: center;
top: 5px;
`;

export const ButtonText = styled.Text`                                    
color: ${ColorTheme.Branco};
font-size: 18px;
font-weight: bold;
`;