import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Section, { ISection, ISectionProps } from './Section';


export default () => {
    const [sections, setSections] = useState<ISectionProps[]>([]);

    const onSectionChange = (data: ISection) => {
        const i = sections.findIndex(s => s.id === data.id);
        sections[i] = { ...data, onChange: onSectionChange };
        setSections(sections);
        console.log(`Updated: ${JSON.stringify(data)}`);
    };

    const addSection = () => {
        const id = new Date().getTime();

        setSections([...sections, {
            id,
            collapsed: false,
            onChange: onSectionChange,
        }]);
    };


    return (
        <View style={styles.editor}>
            {sections.map((s, i) => <Section
                key={i}
                id={s.id}
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