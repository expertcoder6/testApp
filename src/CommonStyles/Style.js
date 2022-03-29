import { StyleSheet, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// constants
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;


export const Styles = StyleSheet.create({

    // home
    paddingContainer: {
        flex: 1,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 90,
        backgroundColor: '#fff',
        position: 'relative'
    },
    floatBottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 20,
        padding: 20
    },
    profileContainer: {
        margin: 10,
        padding: 10,

        borderColor: '#000',
        backgroundColor: '#FFFFFF',
        boxShadow: 'rgba(0, 0, 0, 0.18)',
        borderRadius: 8,
        borderWidth: 1,

        elevation: 100,
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
    },
    categories: {

        padding: 5,
        marginTop: 10,
        marginRight: 10,

        fontStyle: 'italic',
        color: '#000',

        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#000',
    },

    modalContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
    },
    modalStyle: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        padding: 20,
        marginTop: 100,
        marginBottom: 100,

        backgroundColor: '#fff',
    },
    filter: {
        width: '100%',
        marginBottom: 5,
        padding: 5,

        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#000',

        alignItems: 'center'
    },
    filterText: {
        color: '#000'
    },

    filterBlack: {
        width: '100%',
        marginBottom: 5,
        padding: 5,

        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#000',
        backgroundColor: '#000',

        alignItems: 'center'
    },
    filterTextWhite: {
        color: '#fff'
    },
    empty: {

        flex: 1,

        alignSelf: 'center',
        justifyContent: 'center'
    },
    tileBox: {

        height: wp('100%'),

        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,

        boxShadow: '0px 3px 16px rgba(0, 0, 0, 0.18)',
        backgroundColor: '#FFFFFF',
        borderRadius: 8,

        elevation: 100,
    },
    tileInnerContainer: {

        flex: 1,
        height: wp('33%'),
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 10,
    },
    tag: {

        fontSize: hp('1.5%'),
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'orange',
        color: 'orange',
        borderRadius: 8,
        marginRight: 10,
        padding: 7,
        textTransform: 'capitalize'
    },
    title: {
        fontSize: hp('3%'),
        fontWeight: 'bold',
        textTransform: 'capitalize',
        marginTop: 10
    },
    price: {
        fontSize: hp('2%'),
        fontWeight: 'bold',
        textTransform: 'capitalize',
        marginTop: 10
    },
    priceL: {
        fontSize: hp('3%'),
        fontWeight: 'bold',
        textTransform: 'capitalize',
        marginTop: 10
    },
    search: {

        color: 'orange',
        padding: 10,
        marginTop: 30,
        marginBottom: 40,
        fontWeight: 'bold',
        fontSize: hp('2%'),
        backgroundColor:'#F5F5F5',
        borderRadius: 20,
    },

    // input field
    lableStyle: {
        fontSize: 16,
        color: '#000',
        marginBottom: 10,
    },
    inputStyle: {
        height: 40,
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginBottom: 20,
    },

    // registration form
    checkBoxContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5
    },
    checkbox: {
        marginRight: 10
    },


    // common
    blackButton: {
        backgroundColor: '#000',
        padding: 10,
    },
    borderButton: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginBottom: 20,
    },
    submitButtonText: {
        color: '#FFF',
        alignSelf: 'center'
    },
    submitButtonTextWhite: {
        textTransform: 'capitalize',
        color: '#000',
        alignSelf: 'center'
    },
    margin20: {
        height: 20,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    container10: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    textWrapper: {
        height: hp('85%'),
        // width: wp('100%'),
    },
    fontLN: {
        fontSize: hp('2%'),
        color: '#000',
        textTransform: 'capitalize'
    },
    fontLB: {
        fontSize: hp('5%'),
        fontWeight: 'bold',
        color: '#000',
        textTransform: 'capitalize'
    },
    rowstart: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: 'center',
        marginTop: 20
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between'
    },
    bottomBtn: {

        width: wp('50%'),
        height: 40,
        marginTop: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',

        borderRadius: 20
    },
    btnText: {
        fontSize: hp('2%'),
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    roundborder: {
        borderRadius: 20,
        overflow: 'hidden'
    },
    ImageContainer: {
        backgroundColor: '#fff',
        padding: 4,
        marginRight: 10,
        borderRadius: 20,
        overflow: 'hidden'
    },
    imageStyle: {
        width: hp('9%'),
        height: hp('9%'),
        borderRadius: 20
    }
});
