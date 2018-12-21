import React from "react";
import { Button, View, StyleSheet, Text, TouchableOpacity, FlatList, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

export default class SettingsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            className: '',
            classSize: '',
        };
        //this.courseList = this.props.navigation.state.params.courseList;
    };

    openHome = () => {
        this.props.navigation.navigate("Main");
        // this.props.navigation.navigate("AddStudentScreen");
    };

    openStudentScreen = () => {
        this.props.navigation.navigate("StudentScreen");
    }

    openSectionList = () => {
        this.props.navigation.navigate("SectionList");
    }

    static navigationOptions = {
        title: 'Settings',
    };

    //componentDidMount()
    // addClass = () => {
    //     let b = this.courseList.length
    //     let a = this.props.screenProps.courses.length
    //     this.props.screenProps.addClass(() =>
    //         this.courseList[b].title = this.state.className)
    //     //this.props.screenProps.courses[a].title = this.state.className
    //     console.log(this.state.className)
    // }
    addClass = () => {
        alert("Class added!")
    }
    editSize = () => {
        if (this.state.classSize > 0) {
            alert("Size edited!")
        } else {
            alert("Class size not edited, due to invalid input.")
        }
        this.setState(
            {
                classSize: '',
            })
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>

                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    secureTextEntry={false}
                    onChangeText={(className) => this.setState({ className })}
                    value={this.state.className}
                    placeholder="Class Name" />
                <Button title="Press to add a new class" onPress={this.addClass} />
                <Button title="Press to change max class size" onPress={this.editSize} />
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    secureTextEntry={false}
                    onChangeText={(classSize) => this.setState({ classSize })}
                    value={this.state.classSize}
                    placeholder="Class Size" />
            </ScrollView>
        );
    }
}