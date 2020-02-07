import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface IProps {
    content: string;
}

export const Italic = ({ content }: IProps) => {
    return (
        <Text style={styles.italic}>{content}</Text>
    );
}

export const Strike = ({ content }: IProps) => {
    return (
        <Text style={styles.strike}>{content}</Text>
    );
}

export const Code = ({ content }: IProps) => {
    return (
        <Text style={styles.code}>{content}</Text>
    );
}

export const Strong = ({ content }: IProps) => {
    return (
        <Text style={styles.strong}>{content}</Text>
    );
}

const styles = StyleSheet.create({
    italic: {
        color: 'gray'
    },
    strike: {
        fontWeight: 'bold'
    },
    code: {
        fontWeight: 'bold'
    },
    strong: {
        fontWeight: 'bold'
    },
});