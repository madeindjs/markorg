
import React, { Fragment, useState } from 'react';
import { StyleSheet, Button, TextInput, View } from 'react-native';
import MarkdownBlock from './MarkdownBlock';

interface IProps {
    content: string;
}

export default () => {
    const [expand, setExpand] = useState(true);
    const [level, setLevel] = useState(1);

    const toggle = () => {
        setExpand(!expand);
    }

    const incrementLevel = () => {
        let newLevel = level > 6 ? 1 : level + 1;
        setLevel(newLevel);
    }

    return (
        <View style={styles.section}>
            <Button onPress={incrementLevel} title={"#".repeat(level) } />
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <TextInput style={styles.title} multiline={true}>
                    Pretty title
                </TextInput>
                <View style={expand ? styles.hidden : {}}>
                    <MarkdownBlock />
                </View>
            </View>
            <Button onPress={toggle} title={expand ? "[+]" : "[-]"} />
        </View>
    );
};

const styles = StyleSheet.create({
    // TODO: apply to button
    expandButton: {
        fontFamily: 'monospace'
    },
    title: {
        paddingTop: 10,
        fontWeight: 'bold',
        color: 'red'
    },
    section: {
        flex: 1,
        flexDirection: 'row',
        //height: 200
    },
    hidden: {
        width: 0,
        height: 0,
    },
});