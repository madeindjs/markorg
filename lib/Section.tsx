
import React, { Fragment, useState } from 'react';
import { StyleSheet, Button, TextInput, View } from 'react-native';
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

    const toggle = () => setCollapsed(!collapsed);

    const incrementLevel = () => {
        let newLevel = level > 6 ? 1 : level + 1;
        setLevel(newLevel);
    }

    const data: ISection = { id: props.id, level, title, collapsed, content };

    return (
        <View style={styles.section}>
            <Button onPress={incrementLevel} title={"#".repeat(level)} />
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <TextInput style={styles.title} multiline={true} onChange={() => props.onChange(data)}>
                    {title}
                </TextInput>
                <View style={collapsed ? {} : styles.hidden}>
                    <BlockElement content={content} />
                </View>
            </View>
            <Button onPress={toggle} title={collapsed ? "[+]" : "[-]"} />
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
        // flex: 1,
        flexDirection: 'row',
        //height: 200
    },
    hidden: {
        width: 0,
        height: 0,
    },
});