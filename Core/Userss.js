import {useState} from 'react';
import {StyleSheet, Text, View, Modal, TouchableOpacity, FlatList} from 'react-native';


export const Userss = ({label, data, onSelect}) => {
    const [synlig, setSynlig] = useState(false);
    const [selected, setSelected] = useState("");


    const toggleDropdown = () => {
        setSynlig(!synlig);

    }

    const renderItem = ({item}) => (
        <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
            <Text>{item.country}{"   "}{item.fname}{"   "}{item.lname}{"   "}{item.dob}{"  "}{item.classname}{"  "}{item.score}{"  "}{item.grade}</Text>

        </TouchableOpacity>
    );

    const onItemPress = (item) => {
        setSelected(item);
        onSelect(item);
        setSynlig(false);

    };


    const renderDropdown = () => {

        if (synlig) {
            return (
                <Modal visible={synlig} transparent animationType="none">
                    <TouchableOpacity
                        style={styles.overlay}
                        onPress={() => setSynlig(false)}
                    >
                        <View style={[styles.dropdown]}>
                            <FlatList
                                data={data}
                                renderItem={renderItem}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                    </TouchableOpacity>
                </Modal>
            );
        }


    };

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={toggleDropdown}
        >

            {renderDropdown()}
            <Text style={styles.buttonText}>
                {(selected && selected.label) || label}
            </Text>
        </TouchableOpacity>
    );


}
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
