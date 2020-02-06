import React  from 'react';
import { Text, StyleSheet } from 'react-native';

interface IProps {
    content: string;
}

export default ({content}: IProps) => {
    return (
        <Text style={styles.strong}>{content}</Text>
    );
}


const styles = StyleSheet.create({
    strong: {
        fontWeight: "bold"
    },
});