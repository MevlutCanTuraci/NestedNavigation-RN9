import React from 'react'
import { SafeAreaView, Text, Button } from "react-native"

const MemberUpdate = ({navigation}) => {
    return (
        <SafeAreaView>
            <Text>
                MemberUpdate
            </Text>

            <Button
                title="profile edit"
                onPress={() => navigation.navigate("ProfileEditScreen")} 
             />

        </SafeAreaView>
    )
}

export default MemberUpdate;