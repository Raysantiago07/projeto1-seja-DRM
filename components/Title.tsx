import {View, Text, StyleSheet} from 'react-native'

function Title () {
  return (
    <View>
      <Text style={styles.title}>
        Bem-vindo à EEEP Deputado Roberto Mesquita!
      </Text>
      <Text>
        Venha fazer parte da escola que prepara profssionais para o mercado de trabalho
      </Text>  
    </View>
  );

}

  const styles = StyleSheet.create ({
    title: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 10,
      width: '100%',
      backgroundColor: 'green'
    }  
    
  })

export default Title