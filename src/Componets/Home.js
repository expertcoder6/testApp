//---------- imports

// react
import React from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Modal
} from "react-native";

// styles
import { Styles } from '../CommonStyles/Style'

// components
import RegistrationFrom from "./RegistrationFrom";

// helpers
import { addDataToFirebase, getAllUserDataFromFirebase } from '../Common/Firebase'

import database from '@react-native-firebase/database';

// create ref of the database
const usersReference = database().ref('/users');

//---------- compoents

const Home = (props) => {

    //---------- state and veriables

    //state
    const [usersList, setUsersList] = React.useState([]);
    const [selectedFilter, setSelectedFilter] = React.useState('');
    const [filterList, setFilterList] = React.useState([]);
    const [isShowForm, setIsShowForm] = React.useState(false);
    const [isShowFilter, setIsShowFilter] = React.useState(false);
    const [update, setUpdate] = React.useState(false);

    //---------- life cyles

    React.useEffect(() => {
        const onValueChange = usersReference.on('value', snapshot => {
            const propertyNames = (snapshot.val() && Object.values(snapshot.val())) || []

            console.log('-------------------------------=---------=-----')
            console.log('propertyNames :', propertyNames)
            console.log('selectedFilterselectedFilter : ', selectedFilter)
            console.log('-------------------------------=---------=-----')

            setUsersList(propertyNames)
            handleFilter(propertyNames)
            handleClicks('cancel')
        });

        // Stop listening for updates when no longer required
        return () => usersReference.off('value', onValueChange);
    }, []);

    // update of filter
    React.useEffect(() => {

        console.log('<><><><><><><><><><><><><><><><><<><> ')
        console.log('selectedFilterselectedFilter : ', selectedFilter)
        console.log('<><><><><><><><><><><><><><><><><<><> ')

        handleFilter(usersList)
    }, [selectedFilter]);

    //---------- helper: user's action

    // handle all clicks in sigle function 
    const handleClicks = (key, value) => {

        switch (key) {

            case 'register':
                setIsShowForm(true);
                break;

            case 'add_in_firebase':
                saveProfileToFirebase(value);
                break;

            case 'cancel':
                setIsShowForm(false);
                break;

            case 'drop_down':
                setIsShowFilter(true);
                break;

            case 'select_filter':
                if (value.id === 'clear') {

                    setSelectedFilter('');
                    setFilterList([])
                } else {

                    setSelectedFilter(value.id);
                }
                setIsShowFilter(false);
                break;

            default:
                break;
        }
    }

    // create bar and qr code
    const saveProfileToFirebase = (data) => {

        addDataToFirebase(data)
    }

    // get selected filter
    const getSelectedFilter = () => {

        return selectedFilter || 'Category Filter'
    }

    // set filter lists
    const handleFilter = (data) => {


        console.log('================================')
        console.log('getSelectedFilter() : ', getSelectedFilter())
        console.log('================================')
        if (selectedFilter) {

            let filter_list = data.filter(x => (x.categories && x.categories.includes(getSelectedFilter())))
            setFilterList(filter_list)
        }
        setUpdate(!update)
    }

    //---------- helper's : render

    // all filters
    const renderFiltersList = () => {

        return category_data.map((item, index) => {
            return (
                <TouchableOpacity
                    key={index}
                    style={selectedFilter === item.id ? Styles.filterBlack : Styles.filter}
                    onPress={() => {

                        handleClicks('select_filter', item)
                    }}
                >
                    <Text
                        style={selectedFilter === item.id ? Styles.filterTextWhite : Styles.filterText}
                    >
                        {
                            item.title
                        }
                    </Text>
                </TouchableOpacity>
            )
        })
    }

    // all profiles view
    const renderProfiles = ({ item, index }) => {

        return (
            <View
                style={Styles.profileContainer}
            >
                {/* name */}
                <Text
                    style={Styles.name}
                >
                    {
                        item.name
                    }
                </Text>

                {/* age */}
                <Text>
                    {
                        `Age : ${item.age}`
                    }
                </Text>

                {/* gender */}
                <Text>
                    {
                        `Gender : ${item.gender}`
                    }
                </Text>

                {/* categories */}
                <FlatList
                    horizontal
                    data={item.categories}
                    renderItem={(item) => renderCategories(item)}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }

    // catecories
    const renderCategories = ({ item, index }) => {

        return (
            <Text
                style={Styles.categories}
            >
                {
                    item
                }
            </Text>
        )
    }

    //---------- main view

    return (

        <View style={Styles.paddingContainer}>

            {
                isShowForm ?

                    <React.Fragment>

                        {
                            //---------- add new profile form section 
                        }

                        <RegistrationFrom
                            call_back={handleClicks}
                        />

                    </React.Fragment>
                    :
                    <React.Fragment>

                        {
                            //---------- filter section 
                        }

                        {/* filter selection button */}
                        <TouchableOpacity
                            style={Styles.borderButton}
                            onPress={() => {

                                handleClicks('drop_down')
                            }}
                        >
                            <Text
                                style={Styles.submitButtonTextWhite}
                            >
                                {
                                    getSelectedFilter()
                                }
                            </Text>
                        </TouchableOpacity>

                        {/* filter modal */}
                        <Modal
                            visible={isShowFilter}
                            transparent
                            animationType="slid"
                            onRequestClose={() => {
                                setIsShowFilter(false);
                            }}
                        >
                            <View
                                style={Styles.modalContainer}>
                                <View
                                    style={Styles.modalStyle}
                                >
                                    {
                                        renderFiltersList()
                                    }
                                </View>
                            </View>
                        </Modal>


                        {
                            //---------- all profiles section
                        }

                        <FlatList
                            data={(filterList.length > 0 || selectedFilter) ? filterList : usersList}
                            renderItem={(item) => renderProfiles(item)}
                            keyExtractor={item => item.id}
                            ListEmptyComponent={() => {
                                return (
                                    <View
                                        style={Styles.empty}
                                    >
                                        <Text>No profiles found ...</Text>
                                    </View>
                                )
                            }}
                        />

                        {/* register new profile button */}
                        <View
                            style={Styles.floatBottom}
                        >
                            <TouchableOpacity
                                style={Styles.blackButton}
                                onPress={() => {

                                    handleClicks('register')
                                }}
                            >
                                <Text
                                    style={Styles.submitButtonText}>
                                    Register new profile
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </React.Fragment>
            }
        </View>
    );
};

//---------- styles


//---------- export component

export default Home;

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
    },
    {
        title: 'Clear All',
        id: 'clear',
    },
]