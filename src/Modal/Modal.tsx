import React from "react";
import styled from "styled-components";
import { Button } from "../Button/Button";

export interface ModalProps {
    hidden: boolean;
    closeLabel: string;
    onClose: () => void;
}

const StyledDiv = styled.div`
    position: absolute;
    background: white;
    border-radius: .2em;
    border: 1px solid #ccc;
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, .2));
    padding: 2em;
`;

const Text = styled.div`
    color: #333;
    font-family: sans-serif;
    margin-bottom: 1em;
`;

export const Modal: React.FC<ModalProps> = ({
    hidden = false,
    closeLabel = "Close",
    onClose,
    children
}) => (
    <StyledDiv hidden={hidden}>
        <Text>{children}</Text>
        <Button label={closeLabel} onClick={onClose}/>
    </StyledDiv>
);