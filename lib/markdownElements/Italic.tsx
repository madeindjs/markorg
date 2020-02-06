import React  from 'react';
import { Text, StyleSheet } from 'react-native';

interface IProps {
    content: string;
}

export default ({content}: IProps) => {
    return (
        <Text style={styles.italic}>{content}</Text>
    );
}

const styles = StyleSheet.create({
    italic: {
        color: 'red'
    },
});