import React from "react";
import styled from "styled-components";

export interface ButtonProps {
    disabled?: boolean;
    label: string;
    onClick: (fn: (e: Event) => {}) => void;
}

const StyledButton = styled.button`
    align-items: center;
    background: #5d5aa7;
    border-radius: .2em;
    border: none;
    color: white;
    display: inline-flex;
    font-size: 1em;
    font-weight: 600;
    justify-content: space-around;
    min-height: 2em;
    min-width: 5em;
    text-align: center;
    &:disabled {
        background: #ccc;
        color: #666;
    }
`;

export const Button: React.FC<ButtonProps> = ({
    label = 'Button',
    ...props
}) => (
    <StyledButton
        className=".Button"
        {...props}
        >{label}</StyledButton>
);