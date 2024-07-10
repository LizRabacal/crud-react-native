import React, {useState, useContext} from 'react';
import { StyleSheet, TextInput, Text, View, FlatList, ListItem, Alert } from 'react-native';
 import users from './data/users'
 import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Button } from '@rneui/base';
import  UsersContext  from './Context/UsersContext';

export default ({route, navigation}) => {
    const [user, setUser] =  useState(route.params ? route.params : {})
    const {state, dispatch} = useContext(UsersContext);

    return (
        <View style={styles.form}
>
        <Text>Name</Text>
        <TextInput
        style={styles.input}
        onChangeText={name => setUser({...user, name})}
        placeholder="Informe o nome"
        value={user.name}
        />
        <Text>Email</Text>
        <TextInput
        style={styles.input}
        onChangeText={email => setUser({...user, email})}
        placeholder="Informe o email"
        value={user.email}
        />
        <Text>Url do avatar</Text>
        <TextInput
        style={styles.input}
        onChangeText={avatarUrl => setUser({...user, avatarUrl})}
        placeholder="Informe o url do avatar"
        value={user.avatarUrl}
        />

        <Button
        title="Salvar"
        onPress={() => {
              dispatch({
                    type: 'ADD_USER',
                    payload: user 
                })
            navigation.goBack()
        }}
        />

        </View>
    )


}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderBottom: 10
    },

    form: {
        padding: 12
    }
})