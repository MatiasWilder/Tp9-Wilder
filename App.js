import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import styles from './views/estilo.js';

import { Imagen, Saludo} from "./views/home.js";
import { Perfil, EditarPerfil } from "./views/configuracion.js";
import { Rellenarform, Invitaramigos } from "./views/signUp.js";
import { Iniciarsesion, Recuperarcuenta } from "./views/logIn.js";
import { SafeAreaView } from 'react-native-safe-area-context';

const homeStack = createNativeStackNavigator();
const settingsStack = createNativeStackNavigator();
const signupStack = createNativeStackNavigator();
const loginStack = createNativeStackNavigator();

function Home() {
  return (
    <homeStack.Navigator>
      <homeStack.Screen name="Saludo" component={Saludo} />
      <homeStack.Screen name="Imagen" component={Imagen} />
    </homeStack.Navigator>
  );
}

function Settings() {
  return (
    <settingsStack.Navigator>
      <settingsStack.Screen name="Perfil" component={Perfil} />
      <settingsStack.Screen name="Editar perfil" component={EditarPerfil} />
    </settingsStack.Navigator>
  );
}

function Signup() {
  return (
    <signupStack.Navigator>
      <signupStack.Screen name="Registrarse" component={Rellenarform} />
      <signupStack.Screen name="Invitar Amigos" component={Invitaramigos} />
    </signupStack.Navigator>
  );
}

function Login() {
  return (
    <loginStack.Navigator>
      <loginStack.Screen name="Iniciar sesión" component={Iniciarsesion} />
      <loginStack.Screen name="Recuperar cuenta" component={Recuperarcuenta} />
    </loginStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <SafeAreaView>
        <Text>Hola</Text>
      </SafeAreaView>

      <NavigationContainer>
      <Tab.Navigator style={{display: "flex"}}>
        <Tab.Screen name="Home" component={Home} options={{title: "Home", tabBarIcon: ({color}) => <Ionicons name="home" size={24} color={color}/>}}/>
        <Tab.Screen name="Settings" component={Settings} options={{title: "Settings", tabBarIcon: ({color}) => <Ionicons name="settings" size={24} color={color}/>}}/>
        <Tab.Screen name="Signup" component={Signup} options={{title: "Sign up", tabBarIcon: ({color}) => <Ionicons name="person" size={24} color={color}/>}}/>
        <Tab.Screen name="Login" component={Login} options={{title: "Log in", tabBarIcon: ({color}) => <Ionicons name="log-in" size={24} color={color}/>}}/>
      </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}