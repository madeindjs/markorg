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

export const H1 = ({ content }: IProps) => {
    return (
        <Text style={styles.h1}>{content}</Text>
    );
}

const styles = StyleSheet.create({
    italic: {
        color: 'gray',
        fontStyle: 'italic'
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
    h1: {
        fontWeight: 'bold',
        color: 'red'
    },
});