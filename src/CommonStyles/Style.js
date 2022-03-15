import { StyleSheet, } from "react-native";


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
    row: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'red',
        justifyContent: "flex-start",
        alignItems: 'center',
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
    }
});
