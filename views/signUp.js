import { useNavigation } from '@react-navigation/native';
import { View, Button, Text, TextInput, Image } from 'react-native';
import styles from './estilo';


export function Rellenarform(){
  const navigation = useNavigation();
  return (<View style={styles.container}>
    <TextInput placeholder="Nombre"/>
    <TextInput placeholder="Apellido"/>
    <TextInput placeholder="Email"/>
    <TextInput placeholder="Contraseña" secureTextEntry={true}/>
    <TextInput placeholder="Repetir contraseña" secureTextEntry={true}/>
    <Button title="Registrarse" onPress={() => navigation.navigate("Invitar Amigos")}/>
  </View>);
}
  
export function Invitaramigos(){
  const navigation = useNavigation();
  return (<View style={styles.container}>
    <Text>Felicidades! Ya estás registrado. =)</Text>
    <Image source={require('../assets/feliz.jfif')} style={{ width: 250, height: 200}} />
  </View>);
}