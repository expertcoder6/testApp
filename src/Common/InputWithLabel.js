//---------- imports
// react
import React from "react";
import { Text, StyleSheet, TextInput } from "react-native";

// styles
import { Styles } from '../CommonStyles/Style'

//---------- compoents

const TextInputField = (props) => {

    //---------- state and veriables
    // state
    const [text, onChangeText] = React.useState('');

    //---------- main view

    return (
        <React.Fragment>
            {
                //---------- lable
            }
            {
                props.lable &&
                <Text
                    style={
                        props.lableStyle || Styles.lableStyle
                    }
                >
                    {
                        props.lable
                    }
                </Text>
            }
            {
                //---------- text input 
            }
            <TextInput
                style={
                    props.inputStyle || Styles.inputStyle
                }
                placeholderTextColor={props.placeholderTextColor || ''} 
                onChangeText={(text) => {
                    props.onChange(text, props.id) || onChangeText(text)
                }}
                value={
                    props.value || text
                }
                placeholder={
                    props.placeholder || 'Enter the value...'
                }
                keyboardType={
                    props.keyboardType || 'default'
                }
            />
        </React.Fragment>
    );
};

//---------- export component

export default TextInputField;