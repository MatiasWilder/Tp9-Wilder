import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import styles from './views/estilo.js';
import { Imagen, Saludo} from "./views/home.js";
import { Perfil, EditarPerfil } from "./views/configuracion.js";
import { Rellenarform, Hecho } from "./views/signUp.js";
import { Iniciarsesion, NoFunciona } from "./views/logIn.js";
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

function Configuracion() {
  return (
    <settingsStack.Navigator>
      <settingsStack.Screen name="Perfil" component={Perfil} />
      <settingsStack.Screen name="Editar perfil" component={EditarPerfil} />
    </settingsStack.Navigator>
  );
}

function signUp() {
  return (
    <signupStack.Navigator>
      <signupStack.Screen name="Registrarse" component={Rellenarform} />
      <signupStack.Screen name="Hecho" component={Hecho} />
    </signupStack.Navigator>
  );
}

function logIn() {
  return (
    <loginStack.Navigator>
      <loginStack.Screen name="Iniciar sesión" component={Iniciarsesion} />
      <loginStack.Screen name="NoFunciona" component={NoFunciona} />
    </loginStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <SafeAreaView>
      </SafeAreaView>

      <NavigationContainer>
      <Tab.Navigator style={{display: "flex"}}>
        <Tab.Screen name="Home" component={Home} options={{title: "Home", tabBarIcon: ({color}) => <Ionicons name="home" size={24} color={color}/>}}/>
        <Tab.Screen name="Configuración" component={Configuracion} options={{title: "Configuración", tabBarIcon: ({color}) => <Ionicons name="settings" size={24} color={color}/>}}/>
        <Tab.Screen name="Signup" component={signUp} options={{title: "Sign up", tabBarIcon: ({color}) => <Ionicons name="person" size={24} color={color}/>}}/>
        <Tab.Screen name="Login" component={logIn} options={{title: "Log in", tabBarIcon: ({color}) => <Ionicons name="log-in" size={24} color={color}/>}}/>
      </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}