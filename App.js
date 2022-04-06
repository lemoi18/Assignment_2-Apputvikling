import {StatusBar} from 'expo-status-bar';
import {useState, useEffect} from 'react';
import {Button, StyleSheet, Text, TextInput, View, Modal, TouchableOpacity} from 'react-native';

// Using DB Reference
import {db} from './Core/Config'
import {Userss} from './Core/Userss'
import {AddUserForm} from './Core/AddForm'
import {
    Update,
    Delete,
    Create,
} from './Core/Database';
import {deleteDoc, doc, getDoc, setDoc, collection, getDocs} from "firebase/firestore";

export default function App() {
    const initialFormState = {id: null, name: '', username: ''}

    // Setting state

    const usersCollectionRef = collection(db, "users");

    const [users, setUsers] = useState([]);
    const [userDoc, setUserDoc] = useState(null)
    const [uuu, setUuu] = useState([{}])

    const [currentUser, setCurrentUser] = useState(initialFormState)
    const [editing, setEditing] = useState(false)
    // Storing User Data
    // Update Text
    const [text, setText] = useState("")
    const [classid, setClassid] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [dob, setDob] = useState("");
    const [classname, setClassname] = useState("");
    const [score, setScore] = useState("");
    const [grade, setGrade] = useState("");
    const [i,Seti]= useState("0");
    const [itemsArray, setItemsArray] = useState([]);
   /* useEffect(() => {

        Read();
        console.log("here")
    }, [uuu]);

    const Read = async = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(db, "MyCollection", "MyDocument")

        getDoc(myDoc)
            // Handling Promises
            .then((snapshot) => {
                // MARK: Success
                if (snapshot.exists) {
                    var data = snapshot.data();
                    const array = Object.values(data);

                    console.log(array)
                    setItemsArray(array)
                    setUserDoc(snapshot.data())
                } else {
                    alert("No Doc Found")
                }
            })
            .catch((error) => {
                // MARK: Failure
                alert(error.message)
            })

    }*/

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getUsers();
        console.log(users)
    }, [usersCollectionRef]);

    return (
        <View style={styles.container}>
            <Userss label={'users'} data={users} onSelect={setUuu}/>
            <Button title='Create New Doc' onPress={Create}></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
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
