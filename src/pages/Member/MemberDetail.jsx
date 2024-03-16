import React from 'react'
import { SafeAreaView, Text, Button } from "react-native"

const MemberDetail = ({navigation}) => {
    return (
        <SafeAreaView>
            <Text>
                MemberDetail
            </Text>

            <Button
                title="Go to update"
                onPress={() => navigation.navigate("MemberUpdateScreen")} 
             />

        </SafeAreaView>
    )
}

export default MemberDetail;