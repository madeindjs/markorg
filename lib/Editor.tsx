import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Section, { ISection } from './Section';


export default () => {
    const [sections, setSections] = useState<ISection[]>([]);

    const addSection = () => {
        setSections([...sections, {
            level: 1,
            title: "Hello",
            content: 'azaz',
            collapsed: false,
        }]);
    };

    const onSectionChange = (data: ISection) => console.log(`TODO: do some stuff ${data}`)

    console.log(sections)

    // const lines = content.split('\n');

    // const sections = [];

    // for (let i; i> )

    return (
        <View style={styles.editor}>
            {sections.map((s, i) => <Section
                key={i}
                title={s.title}
                level={s.level}
                content={s.content}
                collapsed={s.collapsed}
                onChange={onSectionChange}
            />)}
            <Button title="add section" onPress={() => addSection()} />
        </View>
    );
}

const styles = StyleSheet.create({
    editor: {
        height: '100%',
        // backgroundColor: 'lightgray',
        padding: 5,
        // flex: 1,
        // flexDirection: 'column',
    },
});