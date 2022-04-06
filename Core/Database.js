import {deleteDoc, doc, getDoc, setDoc, addDoc, onSnapshot, collection} from "firebase/firestore";
import {db} from "../Core/Config";


export const Create = () => {
    // MARK: Creating New Doc in Firebase
    // Before that enable Firebase in Firebase Console
    const docRef =  addDoc(collection(db, "users"), {
        name: "Tokyo",
        country: "Japan"
    });
}


//Delete a firebase document with fixed name MyDocument
export const Delete = () => {
    // MARK: Deleting Doc
    const myDoc = doc(db, "MyCollection", "MyDocument")

    deleteDoc(myDoc)
        // Handling Promises
        .then(() => {
            // MARK: Success
            alert("Deleted Successfully!")
        })
        .catch((error) => {
            // MARK: Failure
            alert(error.message)
        })

}


//Updating a firebase document with fixed name MyDocument
export const Update = (classid, fname, lname, dob, classname, score, grade, setUserDoc, setState, setClassid, setFname, setLname, setDob, setClassname, setScore, setGrade, userDoc) => {
    Read(setUserDoc, setState);

    //const w1 = "Post"
    //const id = w1 + userDoc
    const c1 = userDoc.count + 1
    //const w2 = w1 + c1

    const myDoc = doc(db, "MyCollection", "MyDocument")
    const valueC = {"count": c1}
    const valueP = {[c1]: {"classid": classid}}
    const valueD = {[c1]: {"fname": fname}}
    const valueT = {[c1]: {"lname": lname}}
    const valueO = {[c1]: {"dob": dob}}
    const valuec = {[c1]: {"classname": classname}}
    const valueS = {[c1]: {"score": score}}
    const valueG = {[c1]: {"grade": grade}}

    const merge = true
    // If you set merge true then it will merge with existing doc otherwise it will be a fresh one
    setDoc(myDoc, valueC, {merge: merge})
        .then()
    setDoc(myDoc, valueP, {merge: merge})
        .then()
    setDoc(myDoc, valueD, {merge: merge})
        .then()
    setDoc(myDoc, valueT, {merge: merge})
        .then()
    setDoc(myDoc, valueO, {merge: merge})
        .then()
    setDoc(myDoc, valuec, {merge: merge})
        .then()
    setDoc(myDoc, valueS, {merge: merge})
        .then()
    setDoc(myDoc, valueG, {merge: merge})
        .then()
        // Handling Promises
        .then(() => {
            // MARK: Success
            alert("Updated Successfully!")
            setClassid("")
            setClassname("")
            setDob("")
            setFname("")
            setLname("")
            setGrade("")
            setScore("")
        })
        .catch((error) => {
            // MARK: Failure
            alert(error.message)
        })
}
