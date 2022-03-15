//---------- imports

// react
import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList
} from "react-native";
import CheckBox from '@react-native-community/checkbox';

// styles
import { Styles } from '../CommonStyles/Style'

// components
import InputField from '../Common/InputWithLabel'

//---------- compoents

const RegistrationFrom = (props) => {

    //---------- state and veriables

    //state
    const [data, setData] = React.useState({});
    const [selectedCategories, setSelectedCategories] = React.useState([]);
    const [isUpdate, setIsUpdate] = React.useState(false);

    //---------- helper: user's action

    // create bar and qr code
    const validateDataAndSubmitToFirebase = () => {

        // validate data
        if (!data.name) {

            alert('Please enter the name!')
            return;
        }

        if (!data.age) {

            alert('Please enter the age!')
            return;
        }

        if (!data.gender) {

            alert('Please enter the gender!')
            return;
        }

        props.call_back(
            'add_in_firebase',
            {
                ...data,
                id: getRandomUserId(),
                categories: selectedCategories
            }
        )
    }

    // handle click of checkbox
    const handleCheckbox = (item) => {

        let filterdata = []
        if (getCheckBoxStatus(item)) {

            filterdata = selectedCategories.filter(x => x !== item.id)
        } else {

            filterdata = selectedCategories
            filterdata.push(item.id)
        }

        setSelectedCategories(filterdata)
        setIsUpdate(!isUpdate)
    }

    // gerate userId for users
    const getRandomUserId = () => {

        return Math.floor(Math.random() * 100000) + 1;
    }

    // check status of checkbox
    const getCheckBoxStatus = (item) => {


        if (item) {

            return selectedCategories.includes(item.id)
        } else {

            return false
        }
    }

    // handle change in text field
    const handleChange = (text, id) => {

        // set change value in state
        setData({
            ...data,
            [id]: text
        })
    }

    //---------- helper's render

    const renderCheckboxes = ({ item, index }) => {

        return (
            <TouchableOpacity
                onPress={
                    () => {
                        handleCheckbox(item)
                    }
                }
                style={
                    Styles.checkBoxContainer
                }
            >
                <CheckBox
                    value={getCheckBoxStatus(item)}
                    style={Styles.checkbox}
                />
                <Text>
                    {
                        item.title
                    }
                </Text>
            </TouchableOpacity>
        )
    }

    //---------- main view

    return (

        <View>

            {
                //---------- form section
            }

            {/* name */}
            <InputField
                id={'name'}
                placeholder={'Please enter the name...'}
                lable={'Name'}
                value={data.name || ''}
                onChange={handleChange}
            />

            {/* age */}
            <InputField
                id={'age'}
                placeholder={'Please enter the age...'}
                lable={'Age'}
                value={data.age || ''}
                onChange={handleChange}
                keyboardType={'numeric'}
            />

            {/* gender */}
            <InputField
                id={'gender'}
                placeholder={'Please enter the gender...'}
                lable={'Gender'}
                value={data.gender || ''}
                onChange={handleChange}
            />

            {/* categories */}
            <React.Fragment>
                <Text
                    style={
                        Styles.lableStyle
                    }
                >
                    {
                        'Profile Category'
                    }
                </Text>
                <FlatList
                    data={category_data}
                    renderItem={(item) => renderCheckboxes(item)}
                    keyExtractor={item => item.id}
                />
            </React.Fragment>

            <View
                style={Styles.margin20}
            />

            {/* submit button */}
            <TouchableOpacity
                style={Styles.blackButton}
                onPress={() => {

                    validateDataAndSubmitToFirebase()
                }}
            >
                <Text
                    style={Styles.submitButtonText}>
                    Save
                </Text>
            </TouchableOpacity>
            <View
                style={Styles.margin20}
            />

            {/* cancel button */}
            <TouchableOpacity
                style={Styles.borderButton}
                onPress={() => {

                    props.call_back('cancel')
                }}
            >
                <Text
                    style={Styles.submitButtonTextWhite}
                >
                    Cancel
                </Text>
            </TouchableOpacity>

        </View>

    );
};

//---------- export component

export default RegistrationFrom;

//---------- static data

const category_data = [
    {
        title: 'Food',
        id: 'food',
    },
    {
        title: 'Sports',
        id: 'sport',
    },
    {
        title: 'Music',
        id: 'music',
    },
    {
        title: 'Travel',
        id: 'travel',
    }
]