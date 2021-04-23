import * as React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
    contenedor: {
        flex: 1, 
        alignItems: 'center', 
        margin:20,
        marginTop: 3,
        marginBottom: 3,
        padding: 10,
        borderRadius:5,
        backgroundColor:'white',
        shadowColor:'black',
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 10
    },
    imagen: {
        width: '80%', 
        height: '30%', 
        marginBottom: 15
    },
    texto: {
        width: '80%',
        fontSize: 20
    },
    textoTi:{
        textAlign: 'center',
        width: '80%',
        fontSize: 20,
        textDecorationLine: 'underline',
    },
    textoIng:{
        textAlign: 'center',
        width: '80%',
        fontSize: 20,
        textDecorationLine: 'underline',
    }
})

function vistaDetalles({ route, navigation }) {
    const { titulo, imagen, texto, text_ingr, text_ingr2, text_ingr3 } = route.params

    return (
      <View style={{ width:'100%', height:'100%', marginTop: 30 }}>
         <View style={{ width:'30%'}}> 
        <Button color="#5320C0"
                    title="Lista"
                    onPress={ () => navigation.navigate('Lista')}
                />
                </View>
        <View style={styles.contenedor}>        
        <Text style={{ fontSize:30, marginBottom: 15 }}>{titulo}</Text>
        <Image style={styles.imagen} source={{uri: imagen}}></Image>
        <Text style={styles.textoTi}>Preparacion</Text>
        <Text style={styles.texto}>{texto}</Text>
        <Text style={styles.textoIng}>Ingredientes</Text>
        <Text style={styles.texto}>{text_ingr}</Text>
        <Text style={styles.texto}>{text_ingr2}</Text>
        <Text style={styles.texto}>{text_ingr3}</Text>
        </View>
      </View>
    );
  }
  
  export default vistaDetalles