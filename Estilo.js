import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  titulo: {
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'white'
  },
  subtitulo: {
    fontSize: 20,
    marginBottom: 50,
    marginTop: 30,
    textAlign: 'center',
    color:'white'
  },
  imagem: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  buttonContainer: {
    backgroundColor: '#FC6067',
    borderRadius: 20, 
    paddingVertical: 10,
    paddingHorizontal: 100,
    alignItems: 'center',
    marginBottom: 150
  },
  buttonText: {
    color: 'white', 
    fontSize: 16,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white', 
    borderRadius: 20,
    padding: 20,
    width: '80%',
    height: 400,
    alignItems: 'center',
  },
  card2: {
    backgroundColor: 'white', 
    borderRadius: 40,
    padding: 20,
    width: '99%',
    height: 500,
    alignItems: 'center',
    
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 80,
    marginTop:80
  },
  button1: {
    backgroundColor: '#71DBB8', // Cor de fundo do botão (pode ser ajustada)
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button2: {
    backgroundColor: '#EA9DCB', // Cor de fundo do botão (pode ser ajustada)
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  buttonText: {
    color: '#000', // Cor do texto do botão (pode ser ajustada)
    fontSize: 18,
    fontWeight: 'bold',
  },
  
});


  export default styles;