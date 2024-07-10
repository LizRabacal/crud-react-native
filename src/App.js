import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { UsersProvider } from './Context/UsersContext';
import UserList from './UserList';
import UserForm from './UserForm';
import { Button } from '@rneui/base';

const App = () => {
    const Stack = createStackNavigator();

    return (
        <UsersProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="UserList" screenOptions={screenOptions}>
                    <Stack.Screen 
                        name="UserList" 
                        component={UserList} 
                        options={({ navigation }) => ({
                            title: "Lista de Usuários",
                            headerRight: () => (
                                <Button 
                                    onPress={() => navigation.navigate("UserForm")}
                                    type="clear" 
                                    icon={<Icon name='plus' size={25} color="white"/>}
                                />
                            )
                        })} 
                    />
                    <Stack.Screen 
                        name="UserForm" 
                        component={UserForm} 
                        options={{ title: 'Formulário de Usuários' }} 
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </UsersProvider>
    );
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    }
};

export default App;
