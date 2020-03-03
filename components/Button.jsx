import React from 'react'
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Button = ({ children, bgColor, width, navigation, screenName }) => {
    return (
        <ButtonContainer bgColor={bgColor} width={width} >
            <ButtonInside onPress={() => navigation.navigate(screenName)}>
                <ButtonText>{children}</ButtonText>
            </ButtonInside>
        </ButtonContainer>
    )
}
Button.defaultProps = {
    bgColor: '#2A86FF',
    width: '100%'
}

const ButtonContainer = styled.View`
    background:${props => props.bgColor};
    height:45px;
    border-radius:30px;
    width:${props => props.width};
`;

const ButtonInside = styled.TouchableOpacity`
    flex:1;
    justify-content:center;
    align-items:center;
`;

const ButtonText = styled.Text`
    color:#fff;
    font-weight:500;
    font-size:16px;
`;

export default Button;
