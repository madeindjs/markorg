
import React, { useState } from 'react';
import { StyleSheet, Button, Text, TextInput, View, NativeSyntheticEvent, TextInputKeyPressEventData, TouchableHighlight } from 'react-native';
import BlockElement from './blockElement';

export interface ISection {
    id: number;
    level: number;
    title: string;
    content: string;
    collapsed: boolean;
}

export interface ISectionProps {
    id: number;
    level?: number;
    maxLevel?: number;
    title?: string;
    content?: string;
    collapsed?: boolean;
    onChange: (data: ISection) => void;
}

export default (props: ISectionProps) => {
    const [collapsed, setCollapsed] = useState(props.collapsed ?? false);
    const [level, setLevel] = useState(props.level ?? 1);
    const [title, setTitle] = useState(props.title ?? "TODO: add a title");
    const [content, setContent] = useState(props.content ?? "*Lorem* __Ipsum__ sir dolor amet.");

    const data: ISection = { id: props.id, level, title, collapsed, content };

    const maxLevel = props.maxLevel || 6;

    const toggleCollapse = () => {
        data.collapsed = !collapsed;
        props.onChange(data);
        setCollapsed(!collapsed);
    };

    const incrementLevel = () => {
        let newLevel = level > maxLevel ? 1 : level + 1;
        data.level = newLevel;
        props.onChange(data);
        setLevel(newLevel);
    }

    const onTitleChanged = (newTitle) => {
        data.title = newTitle
        props.onChange(data);
        setTitle(newTitle);
    };

    const onContentChanged = (newContent) => {
        data.content = newContent;
        props.onChange(data);
        setContent(newContent);
    };

    const onTitleKeyPress = (event: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
        console.log('key pressed')
        if (event.nativeEvent.key !== "Enter") return;

        console.log('enter pressed')
    };

    return (
        <View style={styles.section}>
            <TouchableHighlight
                onPress={incrementLevel}
                style={styles.beforeTitle}
            >
                <Text style={styles.beforeTitleText}>
                    {'#'.repeat(level)}
                </Text>
            </TouchableHighlight>
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <TextInput
                    style={styles.title}
                    multiline={false}
                    onChangeText={newTitle => onTitleChanged(newTitle)}
                    onKeyPress={e => onTitleKeyPress(e)}
                >
                    {title}
                </TextInput>
                <View style={collapsed ? {} : styles.hidden}>
                    <BlockElement
                        content={content}
                        onChange={newContent => onContentChanged(newContent)} />
                </View>
            </View>
            <TouchableHighlight
                onPress={toggleCollapse}
                style={styles.beforeTitle}
            >
                <Text style={styles.beforeTitleText}>
                    {collapsed ? "[-]" : "[+]"}
                </Text>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    // TODO: apply to button
    expandButton: {
        fontFamily: 'monospace'
    },
    beforeTitle: {
        padding: 10,
        alignSelf: 'baseline'
    },
    beforeTitleText: {
        color: 'red',
        fontFamily: 'monospace'
    },
    title: {
        paddingTop: 10,
        marginBottom: 10,
        fontWeight: 'bold',
        color: 'red'
    },
    section: {
        // flex: 1,
        flexDirection: 'row',
        //height: 200
    },
    hidden: {
        width: 0,
        height: 0,
    },
});