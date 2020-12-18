import React from 'react';
import {
    StatusBar,
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

const Detail = ({ navigation, route }) => {
    const item = route.params;
    console.log('item: ' + item + ', route: ' + JSON.stringify(route));

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <Image style={styles.image} source={{ uri: item.imageurl }} />
                <View style={styles.textView}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text>{item.destination}</Text>
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    image: {
        flex: 1,
        alignItems: 'center',
        margin: 16
    },
    textView: {
        flex: 1,
        marginTop: 16,
        marginStart: 16
    },
    title: {
        fontSize: 18
    }
});

export default Detail;
