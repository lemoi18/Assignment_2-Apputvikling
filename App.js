import {
    deleteDoc, doc, getDoc, setDoc, collection,
    getDocs,
    addDoc,
    updateDoc,
    query, equalTo,

} from 'firebase/firestore';
import {useEffect, useState, useRef} from 'react';
import {Button, LogBox, StyleSheet, Text, TextInput, View} from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";


// Using DB Reference
import {db} from './Core/Config'
import {Chart} from "./Core/Chart";


export default function App() {

    // Storing User Data
    const [userDoc, setUserDoc] = useState(null)
    // Update Text
    const [text, setText] = useState("")

    const isMounted = useRef(false);


    const initialFormState = {
        id: null,
        classID: '',
        fName: '',
        lName: '',
        DOB: '',
        className: '',
        Score: null,
        Grade: ''
    }

    // Setting state
    const [users, setUsers] = useState([]);
    const [usersc, setUsersc] = useState([]);

    const usersCollectionRef = collection(db, "users");

    const [currentUser, setCurrentUser] = useState(initialFormState)
    const [editing, setEditing] = useState(false)

    // CRUD operations
    const addUser = user => {
        user.id = users.length + 1
        addDoc(usersCollectionRef, user);
    }

    const deleteUser = async (id) => {
        const userDoc = doc(db, "users", id);
        await deleteDoc(userDoc);
    };


    const updateUser = (id, updatedUser) => {
        setEditing(false)

        const userDoc = doc(db, "users", id);
        updateDoc(userDoc, updatedUser);
    };

    // const editRow = user => {
    //     setEditing(true)
    //
    //     setCurrentUser({ id: user.id, name: user.name, username: user.username })
    // }
/*
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };

        getUsers();
    }, [usersCollectionRef]);*/

    const [d,setD] = useState(false);

    const flip = () =>{

        setD(!d);




    }


    function course_getter(obj, setCourse,course) {
        let result = '';

        for (let i in obj) {
            // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
            if (i === "className"){
                course.includes(obj[i]) ?
                    console.log("added already")
                :
                setCourse(oldArray => [...oldArray, obj[i]
            ])
            }

        }

    }
    function grade_getter(obj, setGrade,course) {
            let dummy = ``;

        for (let i in obj) {
            // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain

            if (i === "Grade"){
                setGrade(oldArray => [...oldArray, obj[i] ])
            }

        }

    }

    const [grade_course, setCourse_grade]= useState([]);

    const [course, setCourse]= useState([]);
    const [grade, setGrade]= useState([]);

    useEffect(()=> {

        if (isMounted.current) {
            const getUsers = async () => {
                const data = await getDocs(usersCollectionRef);
                setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            };

            getUsers();
            console.log(users)


        } else {
            isMounted.current = true;


        }
    }, [d]);


    const datta = [9, 0, 4, 3, 1, 3]



    LogBox.ignoreAllLogs()

    useEffect(()=>{
        for(const student of users) {
            course_getter(student,setCourse, course)
        }
        console.log(course)
    },[users])

    useEffect(()=>{
        for(const grades of users) {
             grade_getter(grades,setGrade, grade)
        }
        console.log(grade)
    },[users])


    return (
        <View style={styles.container}>
            {/*<View style={styles.row}>
                <View>
                    {users.map((post, i) =>
                        <DisplayPost key={i} post={post}/>)}
                </View>
                {users.map(item=>
                    <View style={styles.row}>

                        <text>{item.classID} {item.fName} {item.lName} {item.DOB} {item.className} {item.Score} {item.Grade}</text>



                    </View>
                )}
            </View>
            <Button title='Test' onPress={() => test(users)}></Button>*/}
            <Chart course={course} data={datta}/>
            <Button title='Test' onPress={() => flip()}/>

        </View>
    );

    function test(users) {
        const user = {
            classID: 'IKT1',
            fName: 'osk',
            lName: 'ma',
            DOB: '12/02/22',
            className: 'DB',
            Score: 98,
            Grade: 'A'
        }
        // const user = { id: 2, name: 'tat', username: 'to' }
        addUser(user)
        // deleteUser(users[0].id)
        // updateUser(users[0].id, user)
        console.log("Hello")
        console.log(users[0])
    }
}

function DisplayPost(props) {
    console.log("DisplayPost")
    return (
        <View>
            <Text>
                {props.post.fName} {props.post.lName} {props.post.classID}
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});