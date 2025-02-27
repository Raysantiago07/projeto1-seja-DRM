import {View, Text, StyleSheet} from 'react-native'

function Subtitle () {
  return (
    <View>
      <Text style={styles.subtitle}>
        Escolha um curso e faça sua história!
      </Text>
      <Text style={styles.margin}>
        Aqui você pode escolher cursar Administração, Desenvolvimento de Sistemas ou Redes de Computadores. Todos eles possuem alta demanda no mercado atual.
      </Text>
    </View>
  );

}

 const styles = StyleSheet.create ({
    subtitle: {
      fontSize: 16,
      textAlign: 'center',
      width: '100%',
      marginVertical: 10,
      padding: 10,
      color: 'white',
      fontWeight: 'bold',
      backgroundColor: 'orange',
    },

    margin: {
      margin: 5,
      padding: 5,
    }  
    
  })

export default Subtitle
