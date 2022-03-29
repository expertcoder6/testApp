//---------- imports

// react
import React from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Modal,
    ScrollView,
    Image,
    Dimensions,
    ImageBackground
} from "react-native";
import Carousel from 'react-native-snap-carousel';

// styles
import { Styles, windowWidth, windowHeight } from '../CommonStyles/Style'

// components
import UserList from "./UserList";
import InputField from '../Common/InputWithLabel'

//---------- compoents

const Home = ({ navigation }) => {

    //---------- state and veriables

    //state
    const [data, setData] = React.useState({});

    //---------- life cyles

    React.useEffect(() => {

    }, []);

    //---------- helper: user's action

    // handle change in text field
    const handleChange = (text, id) => {

        // set change value in state
        setData({
            ...data,
            [id]: text
        })
    }

    //---------- helper's : render

    // render Carousel
    const renderCarousel = () => {

        return (
            <Carousel
                // ref={(c) => { this._carousel = c; }}
                data={tileData}
                layout={'default'}
                renderItem={renderTiles}
                sliderWidth={windowWidth - 40}
                itemWidth={windowWidth - 70}
            />
        )
    }

    // render tiles 
    const renderTiles = ({ item, index }) => {

        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('UserProfile', { data: item })
                }}
            >
                <View
                    style={Styles.roundborder}
                >
                    <ImageBackground
                        key={index}
                        style={
                            Styles.tileBox
                        }
                        resizeMode="cover"
                        source={{ uri: item.profilePic }}
                    >

                        <View
                            style={
                                Styles.tileInnerContainer
                            }
                        >

                            {/* render tags */}
                            <View
                                style={{ flexDirection: "row", alignItems: "flex-start", }}
                            >
                                {
                                    item?.tags?.map(tag => {
                                        return (
                                            <Text
                                                key={index}
                                                style={Styles.tag}
                                            >
                                                {tag}
                                            </Text>
                                        )
                                    })
                                }
                            </View>

                            {/* title */}
                            <Text
                                style={Styles.title}
                            >{item.title}</Text>

                            {/* price */}
                            <Text
                                style={Styles.price}
                            >{`$ ${item.price}`}</Text>

                        </View>
                    </ImageBackground>

                </View>
            </TouchableOpacity>
        )
    }

    //---------- main view

    return (

        <ScrollView>
            <View
                style={
                    Styles.container
                }
            >
                <View
                    style={
                        Styles.textWrapper
                    }
                >

                    {/* title */}
                    <Text style={Styles.fontLB}>Discover</Text>
                    <Text style={Styles.fontLB}>A New World</Text>

                    {/* search bar */}
                    <InputField
                        id={'search'}
                        placeholder={'Search Places'}
                        inputStyle={Styles.search}
                        placeholderTextColor={'orange'}
                        // lable={'Name'}
                        // value={data.name || ''}
                        onChange={handleChange}
                    />


                    {/* slider */}
                    {
                        renderCarousel()
                    }
                </View>
            </View>
        </ScrollView>
    );
};

//---------- styles


//---------- export component

export default Home;

//---------- static data

// navigation.navigate('UserList')


let tileData = [
    {
        id: 1,
        title: 'cappacidia',
        desc: 'Creating and maintaining this plugin has been a fun ride that started in 2016. We thank you all for your appreciation and for making the most out of it!',
        tags: ['tag1', 'tag2'],
        price: 26.00,
        profilePic: 'https://picsum.photos/200/300',
        profilePics: ['https://picsum.photos/id/237/200/300', 'https://picsum.photos/200/300.jpg'],
        like: 3,
        distance: 5,
        time: '1 hr',
    },
    {
        id: 2,
        title: 'cappacidia 1',
        desc: 'Creating and maintaining this plugin has been a fun ride that started in 2016. We thank you all for your appreciation and for making the most out of it!',
        tags: ['tag1', 'tag2'],
        price: 49.00,
        profilePic: 'https://picsum.photos/id/237/200/300',
        profilePics: ['https://picsum.photos/seed/picsum/200/300', 'https://picsum.photos/200/300'],
        like: 56,
        distance: 10,
        time: '2 min',
    },
    {
        id: 3,
        title: 'cappacidia 2',
        desc: 'Creating and maintaining this plugin has been a fun ride that started in 2016. We thank you all for your appreciation and for making the most out of it!',
        tags: ['tag1', 'tag2'],
        price: 999.00,
        profilePic: 'https://picsum.photos/seed/picsum/200/300',
        profilePics: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300?grayscale'],
        like: 69,
        distance: 11,
        time: '10 min',
    }

]