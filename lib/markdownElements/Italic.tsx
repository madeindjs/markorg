import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

interface IState { }
interface IProps {
    content: string;
}


export default class Italic extends Component {

    public state: IState;
    public props: IProps;

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Text style={styles.italic}>{this.props.content}</Text>
        );
    }
}


const styles = StyleSheet.create({
    italic: {
        color: 'grey'
    },
});