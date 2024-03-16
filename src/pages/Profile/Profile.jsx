import React from 'react'
import { SafeAreaView, Text, Button } from "react-native"

const Profile = ({navigation}) => {
    return (
        <SafeAreaView>
            <Text>
                Profile
            </Text>

            <Button
                title="Go to details"
                onPress={() => navigation.navigate("ProfileEditScreen")} 
             />

        </SafeAreaView>
    )
}

export default Profile;