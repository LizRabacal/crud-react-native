import React, {useContext} from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import users from './data/users';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, ListItem } from '@rneui/base'; 
import  UsersContext  from './Context/UsersContext';

export default props => {


    const {state, dispatch} = useContext(UsersContext);

    const confirmUserDeletion = (user) => {
        Alert.alert(
            'Excluir Usuário',
            'Deseja excluir o usuário?',
            [
                {
                    text: 'Não',
                    style: 'cancel'
                },
                {
                    text: 'Sim',
                    onPress: () => {
                        dispatch({
                            type: 'DELETE_USER',
                            payload: user.id
                        })
                    }
                }
            ],
            { cancelable: false }
        );
    }

    const getUserItem = ({ item: user }) => {
        return (
            <ListItem 
                key={user.id ? user.id.toString() : ''}
                bottomDivider
                onPress={() => props.navigation.navigate("UserForm", user)}
            >
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron source={{ uri: user.avatarUrl }} />
                {getActions(user)}
            </ListItem>
        );
    }

    const getActions = (user) => {
        return (
            <>
                <Button 
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                    onPress={() => props.navigation.navigate("UserForm", user)}
                />
                <Button 
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                    onPress={() => confirmUserDeletion(user)}
                />
            </>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={state.users}
                keyExtractor={user => user.id.toString()}
                renderItem={getUserItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
