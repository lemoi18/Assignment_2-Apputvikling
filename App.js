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
    const [grade_num, setGrade_num] = useState([])
    const [grade_course, setCourse_grade] = useState([]);
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

    useEffect(() => {

            const getUsers = async () => {
                const data = await getDocs(usersCollectionRef);
                setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            }

            getUsers();
            console.log(users)

    },[]);

    LogBox.ignoreAllLogs()

    useEffect(() => {
        for (const student of users) {
            setCourse_grade(oldArray => [...oldArray, new Object({Grade : student.Grade,className: student.className})])
        }

       const result = grade_course.reduce((acc, item) => {

           if (acc[item.className]) {
               acc[item.className].push(item.Grade);
            } else {

                acc[item.className] = [item.Grade];
            }

            return acc;
        }, {});

        let object = {}
        for (let course in result) {
            object[course] = [0, 0, 0, 0, 0, 0];
            for (let i = 0; i < course.length; i++) {
                switch (result[course][i]) {
                    case 'A':
                        object[course][0]++;
                        break;
                    case 'B':
                        object[course][1]++;
                        break;
                    case 'C':
                        object[course][2]++;
                        break;
                    case 'D':
                        object[course][3]++;
                        break;
                    case 'E':
                        object[course][4]++;
                        break;
                    case 'F':
                        object[course][5]++;
                        break;
                }
            }
        }

        console.log(object)

        for (const key in object){
            setGrade_num(oldArray => [...oldArray,  <Chart key={key} course={key} data={object[key]}/>])

        }
        console.log(grade_num)
    }, [])

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



            {grade_num}
        </View>
    );



}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});
