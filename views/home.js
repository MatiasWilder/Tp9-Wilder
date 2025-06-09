import { useNavigation } from '@react-navigation/native';
import { View, Button, Alert, Image } from 'react-native';
import styles from './estilo';

export function Saludo(){
    const navigation = useNavigation();
    return (<View style={styles.container}>
        <Button title="Saludo" onPress={() => Alert.alert("Hola")}/>
        <Button title="Ver imágen" onPress={() => navigation.navigate("Imagen")}/>
    </View>);
}

export function Imagen(){
    return (<View style={styles.container}> 
        <Image source={require('../assets/Avion.jpg')} style={{ width: 250, height: 200}} />
    </View>);
}