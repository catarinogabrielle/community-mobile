import styled from 'styled-components';
import Colors from '../../../constants/Colors';
const ColorTheme = Colors['Theme'];

export const Container = styled.View`                                    
flex: 1;
justify-content: center;
align-items: center;
background-color: ${ColorTheme.Branco};
`;

export const Logo = styled.Image`                                    
margin-bottom: 14px;
width: 80%;
height: 60px;
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
border-style: solid;
border-color: ${ColorTheme.Cinza};
border-bottom-width: 0.5px;
margin-bottom: 14px;
padding: 0 8px;
color: ${ColorTheme.Cinza} ;
`;

export const ContainerButton = styled.View`                                    
width: 95%;
height: 50px;
justify-content: space-between;
align-items: center;
flex-direction: row;
margin-top: 10px;
padding-left: 5px;
`;

export const Button = styled.TouchableOpacity`                                    
width: 50px;
height: 50px;
border-radius: 30px;
background-color: ${ColorTheme.Cinza};
justify-content: center;
align-items: center;
`;

export const ButtonText = styled.Text`                                    
color: ${ColorTheme.Cinza};
font-size: 17px;
font-weight: bold;
`;