import React, { useState, useEffect } from 'react'
import {doc, updateDoc} from "firebase/firestore";
import {db} from "../firebase-config";

const EditUserForm = props => {
    const [ user, setUser ] = useState(props.currentUser)

    useEffect(
        () => {
            setUser(props.currentUser)
        },
        [ props ]
    )
    // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

    const handleInputChange = event => {
        const { name, value } = event.target
        // const userDoc = doc(db, "users", user.id);
        setUser({ ...user, [name]: value })
    }

    const test = (event)=>{
            event.preventDefault()
            props.updateUser(user.id, user)
    }
    return (
        <View
        >
            <TextInput style={{
                width: '95%',
                fontSize: 18,
                padding: 12,
                borderColor: 'gray',
                borderWidth: 0.2,
                borderRadius: 10,
                marginVertical: 20,
            }} placeholder='Type Here' onChange={handleInputChange} value={user.name}></TextInput>
            <TextInput style={{
                width: '95%',
                fontSize: 18,
                padding: 12,
                borderColor: 'gray',
                borderWidth: 0.2,
                borderRadius: 10,
                marginVertical: 20,
            }} placeholder='Type Here' onChange={handleInputChange} value={user.country}></TextInput>
            <button onClick={() => props.setEditing(false)} className="button muted-button" title={ "cancel"}></button>
        </View>
    )
}

export default EditUserForm
