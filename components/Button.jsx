import React from 'react'
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Button = ({ children, bgColor, width }) => {
    return (
        <ButtonContainer bgColor={bgColor} width={width}>
            <TouchableOpacity>
                <ButtonText>{children}</ButtonText>
            </TouchableOpacity>
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
    justify-content:center;
    align-items:center;
    width:${props => props.width};
`;
const ButtonText = styled.Text`
    color:#fff;
    font-weight:500;
    font-size:16px;
`;

export default Button;
