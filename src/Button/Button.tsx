import React from "react";
import styled from "styled-components";

interface Props {
    disabled: boolean;
    label: string;
}

const StyledButton = styled.button`
    border-radius: .2em;
    border: 1px solid #333;
    display: inline-flex;
    justify-items: center;
    min-height: 2em;
    min-width: 5em;
    text-align: center;
`;

export const Button: React.FC<Props> = ({ disabled, label }) => (
    <StyledButton className=".Button" disabled={disabled}>{label}</StyledButton>
);