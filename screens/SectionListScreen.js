import React from "react";
import { Button, View, StyleSheet, Text, TouchableOpacity, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

export default class SectionListScreen extends React.Component {
    componentDidMount() {
        for (let a = 0; a < this.props.screenProps.courses.length; a++) {
            this.props.screenProps.loadStudents(this.props.screenProps.courses[a].id);
        }
    }

    //Navigates to the home screen
    openHome = () => {
        this.props.navigation.navigate('Main')
    };

    openStudent = (classID) => {
        console.log("Test button pressed")
        this.props.navigation.navigate('StudentScreen', { classID: classID })
    }

    static navigationOptions = {
        title: 'Section List',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            //<View style={styles.container}>
            //        <Text style={styles.text}>You are currently logged out.</Text>
            <ScrollView>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text textAlign='center'>Class Sections List</Text>
                <Text></Text>
                <TouchableOpacity>
                    <Button title={this.props.screenProps.courses[0].title} onPress={() => this.openStudent("1")} />
                    <Button title={this.props.screenProps.courses[1].title} onPress={() => this.openStudent("2")} />
                    <Button title={this.props.screenProps.courses[2].title} onPress={() => this.openStudent("3")} />
                    <Button title={this.props.screenProps.courses[3].title} onPress={() => this.openStudent("4")} />
                    <Button title={this.props.screenProps.courses[4].title} onPress={() => this.openStudent("5")} />
                    <Button title={this.props.screenProps.courses[5].title} onPress={() => this.openStudent("6")} />
                    <Button title={this.props.screenProps.courses[6].title} onPress={() => this.openStudent("7")} />
                    <Button title={this.props.screenProps.courses[7].title} onPress={() => this.openStudent("8")} />
                    <Button title={this.props.screenProps.courses[8].title} onPress={() => this.openStudent("9")} />
                    <Button title={this.props.screenProps.courses[9].title} onPress={() => this.openStudent("10")} />
                    <Button title={this.props.screenProps.courses[10].title} onPress={() => this.openStudent("11")} />
                </TouchableOpacity>
            </ScrollView>
            //    </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flex: 1
    },
    text: {
        textAlign: "center"
    }
});