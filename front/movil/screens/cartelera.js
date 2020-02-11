
import React, { Component } from 'react';
import { Container, Text, Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Image, StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class Cartelera extends Component {
  render() {
    return (
      
   <Container> 
   <ImageBackground source={require('../img/fondo2.jpg')} style={styles.img}>
    
      <Text style={styles.titulo}>Pelicula</Text>
       <Content style={styles.container}>
        <Grid>
         <Col  onPress={() => this.props.navigation.navigate('Detalle')}>
            <Image
              style={styles.pelicula}
              source={require('../img/peli.jpg')}

            />
          </Col>
         </Grid>  
       </Content>
         <Text style={styles.titulo}>Pelicula</Text>
       <Content style={styles.container}>
        <Grid>
         <Col  onPress={() => this.props.navigation.navigate('Detalle')}>
            <Image
              style={styles.pelicula}
              source={require('../img/peli.jpg')}

            />
          </Col>
         </Grid>  
       </Content>
     </ImageBackground>
     
   </Container>
    );
  }
}


const styles = StyleSheet.create({

     img : {
      flex: 1,   
      
   
    },
  titulo :{
    paddingLeft: 150,
    top: 5,
    color: '#ECF7FB',
    fontSize: 20
  },

  container:{
    paddingTop: 15,
    paddingLeft: 95,
    paddingRight: 20,
    paddingBottom: 40,
  },
  pelicula: {
    width: 150,
    height: 190,
    marginTop: 20,
    marginLeft: 15,
    
    
  },
});
