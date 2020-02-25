
import React, { Fragment, useState } from 'react';
import { StyleSheet, Button, TextInput, View } from 'react-native';

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
            {/* <TouchableOpacity onPress={toggle}> */}
            <Button onPress={incrementLevel} title={"#".repeat(level) } />
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <TextInput style={styles.title} multiline={true}>
                    Pretty title
                </TextInput>
                {/* </TouchableOpacity> */}
                <TextInput style={expand ? styles.hidden : {}} multiline={true} >
                    Fugiat laborum anim anim deserunt tempor ex adipisicing quis laboris nulla. Anim in ut aliqua ex. Irure cupidatat voluptate nisi irure cillum nulla ullamco consequat deserunt non. Incididunt id in id duis. Et est fugiat ea deserunt pariatur reprehenderit culpa eiusmod cupidatat ullamco dolor non elit aute. Qui dolor ullamco aliquip nisi aliquip irure sint laboris ad aliqua ut sunt sunt ad.
            </TextInput>
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