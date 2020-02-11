
import React, { Component } from 'react';
import { Image, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Container, Content, Card, CardItem, Text, Button, Item, Input, Left, Body, Right, Title } from 'native-base';
import axios from 'axios'



export default class Detalle extends Component {




  render() {
    return (
      <Container >
        <Content   >
          <Card >
          <KeyboardAvoidingView behavior="padding">
            <CardItem style={{ backgroundColor : '#F7E4E4'}}>
              <Left>
                <Body>
                  <Item >
                    <Input  style={styles.texto}
                      placeholder='Titulo de Pelicula' />
                  </Item>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody style={{ backgroundColor : '#F7E4E4'}}>
              <Image source={{ uri: 'Image URL' }} style={{ height: 150, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem style={{ backgroundColor : '#F7E4E4'}}>
              <Body>
                <Item >
                  <Input style={styles.texto}
                    placeholder='Resumen' />
                </Item>
              </Body>
            </CardItem>
            <CardItem style={{ backgroundColor : '#F7E4E4'}}>
              <Left>
                <Item floatingLabel>
                  <Input style={styles.texto}
                    placeholder='Categoria' />
                </Item>
              </Left>
              <Right>
                <Item >
                  <Input style={styles.texto}
                    placeholder='Horario' />
                </Item>
              </Right>
            </CardItem>
            <CardItem style={{ backgroundColor : '#F7E4E4'}}>
              <Body>
                <Item >
                  <Input style={styles.texto}
                    placeholder='Sala' />
                </Item>
              </Body>
            </CardItem>
            <CardItem style={styles.botones}  style={{ backgroundColor : '#F7E4E4'}}>
              <Body>
                <Body>
                  <Button danger style={styles.botones2} onPress={() => this.props.navigation.navigate('Compra')}>
                    <Text>Comprar</Text>
                  </Button>
                </Body>
              </Body>
            </CardItem>
            </KeyboardAvoidingView>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  

  botones: {
    paddingTop: 55,
    paddingBottom: 72
  },
  botones2: {
      right: 7,
  },

  texto : {
    color: '#F6F9FA'
  }
  
})