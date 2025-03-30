"use client"
import { Button as ChakraButton } from "@chakra-ui/react";
import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    loading?: any;
    disabled?: boolean;
    colorScheme?: string;
    variant?: "ghost" | "link" | "solid" | "outline";
    size?: "xs" | "sm" | "md" | "lg";
};

const Button = (props: ButtonProps): React.ReactElement => {
    return <ChakraButton {...props}>{props.children}</ChakraButton>
};

export default Button;
