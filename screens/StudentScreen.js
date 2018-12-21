import React from "react";
import { Button, View, StyleSheet, Text, TouchableOpacity, FlatList, SectionList, Switch } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

export default class StudentScreen extends React.Component {
    state = {
        switchValue: true,
        noShowCount: "0",
    }

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

    // static navigationOptions = {
    //     title: 'Student View',
    // };

    render() {
        const { navigate } = this.props.navigation;
        students = this.props.screenProps.courses.find(course => course.id === this.props.navigation.state.params.classID).students
        console.log(students)
        studentsByLetter = students.reduce((obj, student) => {
            const fLetter = student.name[0].toUpperCase()
            return {
                ...obj,
                [fLetter]: [...(obj[fLetter] || []), student],
            }
        }, {})
        sections = Object.keys(studentsByLetter).sort().map(letter => ({
            data: studentsByLetter[letter],
            title: letter,
        }))
        return (
            <View>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text>Class List {this.props.navigation.state.params.classID}</Text>
                <Text>No-show count: 0</Text>
                <Text>Student count: 30</Text>
                <Text></Text>
                <SectionList sections={sections} renderItem={this.renderItem} renderSectionHeader={this.renderSectionHeader} />
            </View>
        );
    }

    renderItem = (item) => {
        return (
            <View style={{ flexDirection: 'row' }}>
                <Switch
                    index={item.item}
                    onValueChange={this.handleToggleSwitch}
                    value={this.state.switchValue}
                />
                <Text>
                    Student Name: {item.item.name}
                </Text>
            </View>
        )
    }

    handleToggleSwitch = () => {
        if (this.state.switchValue) {
            this.state.noShowCount++;
        } else {
            this.state.noShowCount--;
        }
        this.setState(state => ({
            switchValue: !state.switchValue,
        }))
    }
}