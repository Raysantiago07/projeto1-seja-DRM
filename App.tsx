import {View, SafeAreaView} from 'react-native'
// Importa dos componentes utilizados neste arquivo App.tsx
import Title from './components/Title'
import Subtitle from './components/Subtitle'
import Button from './components/Button'
import Footer from './components/Footer'

// Função para exibir os outros componentes criados
function App() {
  return (
    <SafeAreaView>
      <Title />
      <Subtitle />
      <Button />
      <Footer />
    </SafeAreaView>
  )
}

export default App