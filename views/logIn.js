import { useNavigation } from '@react-navigation/native';
import { View, Button, TextInput, Alert } from 'react-native';
import styles from './estilo';


export function Iniciarsesion(){
    const navigation = useNavigation();
    return (<View style={styles.container}>
        <TextInput placeholder="Email"/>
        <TextInput placeholder="Contraseña" secureTextEntry={true}/>
        <Button title="Recuperar cuenta" onPress={() => navigation.navigate("Recuperar cuenta")}/>
    </View>);
}
   
export function NoFunciona(){
    return (<View style={styles.container}>
        <TextInput placeholder="Email"/>
        <Button title="Verificar" onPress={() => Alert.alert("No funciona")}/>
    </View>);
}