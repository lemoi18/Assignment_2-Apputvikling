import {useState} from "react";
import {Button, StyleSheet, Text, TextInput, View, Modal, TouchableOpacity} from 'react-native';


export const AddUserForm = props => {
        const initialFormState = { id: null, name: '', username: '' }
        const [ user, setUser ] = useState(initialFormState)

        const handleInputChange = event => {
            const { name, value } = event.target

            setUser({ ...user, [name]: value })
        }

        return (
            <form>
                <label>Name</label>
                <input type="text" name="name" value={user.name} onChange={handleInputChange} />
                <label>Username</label>
                <input type="text" name="username" value={user.username} onChange={handleInputChange} />
                <button>Add new user</button>
            </form>
        )
    };




const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#efefef',
        height: 50,
        zIndex: 1,
    },
    buttonText: {
        flex: 1,
        textAlign: 'center',
    },
    dropdown: {
        position: 'absolute',
        bottom: 100,
        top: 100,
        backgroundColor: '#fff',
        width: '100%',
        shadowColor: '#000000',
        shadowRadius: 4,
        shadowOffset: {height: 4, width: 0},
        shadowOpacity: 0.5,
        overflow: "hidden",

    },
    overlay: {
        width: '100%',
        height: '100%',
    },
    item: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
    },


});
