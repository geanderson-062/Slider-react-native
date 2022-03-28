import { StatusBar } from 'expo-status-bar';
import { render } from 'react-dom';
import { useState } from 'react/cjs/react.production.min';
import { StyleSheet,Text,View,Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';//impotando a biblioteca baixada
//import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

//criara o array para passar os itens do slider

const slides = [ 

 {
  key: '1' ,
  title: 'Organize seus sistemas em qualquer lugar',
  text: 'Com o nosso app você pode arganizar e gerenciar seus sistemas web' ,
  image: require ('./src/img/1.png')
 },

 {
  key: '2' ,
  title: '100% de controle.',
  text: '100% de controle de fluxo e acesso de dados de todas suas plataformas' ,
  image: require ('./src/img/2.png')
 },

 {
  key: '3' ,
  title: 'Atendimento 24h',
  text: 'Utilizando nosso sistema você vai ter atendimento 24h online' ,
  image: require ('./src/img/3.png')
},

];

export default function App() {

  // usando o usestate para ativar o slider 
  const [showHome, setShowHome] = useState (false); 

  //colocando os componentes do front end 

  function renderSlides ({item}){

    return(

    <View style={{flex:1}}> {/*style determina que pegue o tamamho todo da tela*/}
        
      <Image 
      source={item.image}
      style={{
        resizeMode: 'cover',
        height: '73%' ,
        width: '100%',
      }}/>

      <Text style={{
        paddingTop: 25 , 
        paddingBottom: 18, 
        fontSize : 23,
        fontWeight: 'bold',//fonte
        color:'#009CFF', //cor do titulo
      }}> 
        {item.title}
      </Text>

       <Text style={{
         textAlign: 'center', //centralizando a descrição
         color: '#b5b5b5' , //cor da descrição 
         paddingHorizontal: 25 ,//arrumando as margens 
         fontSize: 15,
       }}>
         {item.text}
       </Text>

    </View>

    )
  }

  if(showHome){

    return <Text>Entrou no sistema</Text> //poderia colocar para chamr outro sistema ou tela
  
  } 

  else {

    return(

    <AppIntroSlider 

     renderItem={renderSlides}//item renderizado
     data={slides}//usando nosso array
     activeDotstyle={{//as bolinhas que indica o slide
      backgroundColor:'#009CFF',//cor do botão do slides
      width: 30,//tamanho dele
    }}
    
      // renderNextButton={ () => <Text>Proximo</Text>}
      // renderPrevButton={ () => <Text>Voltar</Text>}
      
      renderNextButton={ () => {}}
      renderDoneButton={ () => <Text style={{fontSize: 20}}>Acessar!</Text>}
      onDone={ () => alert('Entrou no app')} //passar o jsx para seguir para outra tela
    /> //terminando Appintroslider
    );
  } 
} 

