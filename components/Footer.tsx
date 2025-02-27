import {View, Text, StyleSheet} from 'react-native'

function Footer () {
  return (
    <View>
      <Text style={styles.margin}>
        2025 EEEP Deputado Roberto Mesquita
      </Text>
    </View>
  );
}
const styles = StyleSheet.create ({
    margin: {
      margin: 5,
      padding: 5,
    }  
})
export default Footer
