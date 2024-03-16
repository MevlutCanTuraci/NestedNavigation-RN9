import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Members from './pages/Member/Members';
import Profile from './pages/Profile/Profile';
import MemberDetail from './pages/Member/MemberDetail';
import MemberUpdate from './pages/Member/MemberUpdate';
import ProfileEdit from './pages/Profile/ProfileEdit';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const MembetStack = () => {

    return(
        <Stack.Navigator>
            <Stack.Screen name="MembersScreen" component={Members} />
            <Stack.Screen name="MemberDetailScreen" component={MemberDetail} />
            <Stack.Screen name="MemberUpdateScreen" component={MemberUpdate} />
        </Stack.Navigator>
    )

}


const ProfileStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="ProfileScreen" component={Profile} />
            <Stack.Screen name="ProfileEditScreen" component={ProfileEdit} />
        </Stack.Navigator>
    )
}



const Router = () => {

    return(
        <NavigationContainer>
            
            <Tab.Navigator screenOptions={{
                headerShown: false
            }}>
                <Tab.Screen name="MembersTab" component={MembetStack} />
                <Tab.Screen name="ProfileTab" component={ProfileStack} />
            </Tab.Navigator>
            
        </NavigationContainer>
    )
}

export default Router;