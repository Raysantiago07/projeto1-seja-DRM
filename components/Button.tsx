import {View, Text, StyleSheet, Pressable} from 'react-native'

function Button () {

  function mensagem(){
    alert('Parabéns você é DRM!')
  }

  return (
    <View>
      <Pressable style={styles.button} onPress={mensagem}>
        <Text style={styles.buttonText}>Inicie sua jornada na DRM!</Text>
      </Pressable>
    </View>
  );


}

const styles = StyleSheet.create ({
  button: {
    backgroundColor: 'lightblue',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    margin: 10,
  },
  buttonText: {
    color: 'blue',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  }    
})

export default Button
