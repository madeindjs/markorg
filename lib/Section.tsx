
import React, { Fragment, useState } from 'react';
import { Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { H1 } from './InlineElements';

interface IProps {
    content: string;
}

export default () => {
    const [expand, setExpand] = useState(true);

    const toggle = () => {
        setExpand(!expand);
    }

    return (
        <Fragment>
            <TouchableOpacity onPress={toggle}>
                <H1 content="# Hello"/>
            </TouchableOpacity>
            {"\n"}
            <Text style={expand ? styles.hidden : {}}>
                Fugiat laborum anim anim deserunt tempor ex adipisicing quis laboris nulla. Anim in ut aliqua ex. Irure cupidatat voluptate nisi irure cillum nulla ullamco consequat deserunt non. Incididunt id in id duis. Et est fugiat ea deserunt pariatur reprehenderit culpa eiusmod cupidatat ullamco dolor non elit aute. Qui dolor ullamco aliquip nisi aliquip irure sint laboris ad aliqua ut sunt sunt ad.
            </Text>
        </Fragment>
    );
};

const styles = StyleSheet.create({
    hidden: {
        width: 0,
        height: 0,
    },
});