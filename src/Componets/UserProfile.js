//---------- imports

// react
import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ScrollView,
    ImageBackground,
    Image,
    ImageStore
} from "react-native";

// styles
import { Styles } from '../CommonStyles/Style'

//---------- compoents

const UserProfile = (props) => {

    //---------- state and veriables

    // veriables
    let data = props?.route?.params?.data || undefined
    //state

    //---------- helper: user's action


    //---------- helper : render

    const renderOtherImages = (images) => {

        return (
            <FlatList
                horizontal
                data={images}
                renderItem={({ item, index }) => {

                    return (
                        <View
                            style={Styles.ImageContainer}
                        >
                            <Image
                                key={index}
                                style={Styles.imageStyle}
                                resizeMode="cover"
                                source={{ uri: item }} />
                        </View>
                    )
                }}
                keyExtractor={item => item.id}

            />
        )
    }

    //---------- main view

    return (

        <ScrollView>
            <View
                style={
                    Styles.container10
                }
            >
                <View
                    style={
                        Styles.textWrapper
                    }
                >
                    {
                        //----- top image
                    }
                    <View
                        style={Styles.roundborder}
                    >
                        <ImageBackground
                            style={
                                Styles.tileBox
                            }
                            resizeMode="cover"
                            source={{ uri: data?.profilePic }}
                        >
                            {
                                renderOtherImages(data.profilePics)
                            }
                        </ImageBackground>
                    </View>
                    {
                        //----- tags and price
                    }
                    <View
                        style={Styles.row}
                    >
                        <View
                            style={{ flex: 4 }}
                        >
                            {/* render tags */}
                            <View
                                style={{ flexDirection: "row", alignItems: "flex-start", marginTop: 20 }}
                            >
                                {
                                    data?.tags?.map((tag, index) => {
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
                            >
                                {
                                    data.title
                                }
                            </Text>


                        </View>

                        {/* price */}
                        <View
                            style={{ flex: 1 }}
                        >
                            <Text
                                style={Styles.priceL}
                            >
                                {
                                    `$ ${data.price}`
                                }
                            </Text>
                        </View>

                    </View>

                    {
                        //----- like, time and distance
                    }
                    <View
                        style={Styles.rowstart}
                    >
                        {/* like */}
                        <Text
                            style={[Styles.fontLN, { marginRight: 10 }]}
                        >
                            {
                                data.like
                            }
                        </Text>

                        {/* time */}
                        <Text
                            style={[Styles.fontLN, { marginRight: 10 }]}
                        >
                            {
                                `${data.time}`
                            }
                        </Text>

                        {/* distance */}
                        <Text
                            style={[Styles.fontLN, { marginRight: 10 }]}
                        >
                            {
                                `${data.distance} km`
                            }
                        </Text>
                    </View>

                    {
                        //----- like, time and distance
                    }
                    <Text
                        style={[Styles.fontLN, { marginTop: 20 }]}
                    >
                        {
                            data.desc
                        }
                    </Text>

                    {
                        //---------- book now button
                    }
                    <View
                        style={Styles.bottomBtn}
                    >
                        <Text
                            style={Styles.btnText}

                        >Book Now</Text>
                    </View>

                </View>
            </View>
        </ScrollView>

    );
};

//---------- styles


//---------- export component

export default UserProfile;