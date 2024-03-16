import React from 'react'
import { Button, SafeAreaView, Text } from "react-native"

const Members = ({navigation}) => {
    return (
        <SafeAreaView>
            <Text>
                Members
            </Text>

            <Button
                title="Go to details"
                onPress={() => navigation.navigate("MemberDetailScreen")} 
             />

        </SafeAreaView>
    )
}

export default Members;