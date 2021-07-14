import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
	
import {
    S3Client,
    CreateBucketCommand,
    DeleteBucketCommand,
} from "@aws-sdk/client-s3";
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
	
function GetFromS3() {

    const [bucketName, setBucketName] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    // Replace REGION with the appropriate AWS Region, such as 'us-east-1'.
    const region = "us-east-2";
    const client = new S3Client({
        region,
        credentials: fromCognitoIdentityPool({
            client: new CognitoIdentityClient({ region }),
            // Replace IDENTITY_POOL_ID with an appropriate Amazon Cognito Identity Pool ID for, such as 'us-east-1:xxxxxx-xxx-4103-9936-b52exxxxfd6'.
            identityPoolId: "us-east-2:5fd9c741-e4fc-4e95-a004-06cf7285b2bf",
        }),
    });

    const createBucket = async () => {
        setSuccessMsg("");
        setErrorMsg("");

        try {
            await client.send(new CreateBucketCommand({ Bucket: bucketName }));
            setSuccessMsg(`Bucket "${bucketName}" created.`);
        } catch (e) {
            setErrorMsg(e);
        }
        };

        const deleteBucket = async () => {
        setSuccessMsg("");
        setErrorMsg("");

        try {
            await client.send(new DeleteBucketCommand({ Bucket: bucketName }));
            setSuccessMsg(`Bucket "${bucketName}" deleted.`);
        } catch (e) {
            setErrorMsg(e);
        }
    };

    return (
    <View style={styles.container}>
        <Text style={{ color: "green" }}>
        {successMsg ? `Success: ${successMsg}` : ``}
        </Text>
        <Text style={{ color: "red" }}>
        {errorMsg ? `Error: ${errorMsg}` : ``}
        </Text>
        <View>
        <TextInput
            // style={styles.textInput}
            onChangeText={(text) => setBucketName(text)}
            autoCapitalize={"none"}
            value={bucketName}
            placeholder={"Enter Bucket Name"}
        />
        <View style={{backgroundColor:'#68a0cf'}}>
            <Button
                title="Create Bucket"
                onPress={createBucket}
            />
        </View>
        <View style={{backgroundColor:'#68a0cf'}}>
            <Button
                title="Delete Bucket"
                onPress={deleteBucket}
            />
        </View>
        
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    },
});

export default GetFromS3;