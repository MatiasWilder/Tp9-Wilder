import { useNavigation } from '@react-navigation/native';
import { View, Button, Text, TextInput, Image } from 'react-native';
import styles from './estilo';


export function EditarPerfil(){
    return (<View style={styles.container}>
        <TextInput placeholder="Nombre" defaultValue="Matías"/>
        <TextInput placeholder="Apellido" defaultValue="Wilder"/>
        <TextInput placeholder="Apodo" defaultValue="Wilder"/>
    </View>)
}
  
export function Perfil(){
    const navigation = useNavigation();
    return (<View style={styles.container}>
        <Text>Matias Wilder</Text>
        <Text>Wilder</Text>
        <Button title="Editar perfil" onPress={() => navigation.navigate("Editar perfil")}/>
    </View>)
}