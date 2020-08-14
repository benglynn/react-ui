import React from "react";
import "./Button.scss";

interface Props {
    disabled: boolean;
    label: string;
}

export const Button: React.FC<Props> = ({ disabled, label }) => (
    <button className=".Button" disabled={disabled}>{label}</button>
);