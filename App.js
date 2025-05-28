import { StyleSheet,Text,View,Image,SafeAreaView,Button,StatusBar,
} from 'react-native';

import * as Animatable from 'react-native-animatable';


export default function App() {
  return (

    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("./assets/tkslogo.png")}
            style={{ width: 180, height: 140, resizeMode: "contain" }}
          />
          <StatusBar style="auto" />
        </View>

      <View style={[styles.body]}>
        <Animatable.Text animation="zoomInUp" iterationCount="1" style={{ textAlign: 'center' ,paddingBottom:25}}>
          <Text style={{fontWeight:"bold",fontSize:30}}>Aradığın Herşey.!!!</Text>
        </Animatable.Text>

          <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center' }}>
            <Button style={{justifyContent: "flex-start"}} title="Haydi Başlayalım.!" onPress={() =>  {}} />
          </Animatable.Text>
      </View>

    <View style={styles.footer}>
        <Text style={styles.setFooter}>Teksinn © {new Date().getFullYear()}</Text>
    </View>

        <View style={styles.navi}>
          <Button title="Anasayfa" onPress={() => navigator} />
          <Button title="Galeri" onPress={() => window.location.href = 'Page'} />

        </View>
    </SafeAreaView>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    },

    navi:{
      flexDirection:"row", 
      alignItems: 'center', 
      justifyContent: 'space-evenly',
      margin:80,

    },

  header:{
    flex: 0,
    top:0,
    left:0,
    right:0,
    padding: 60,
    paddingTop: 90,
    height: 100,
    position: 'absolute',
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    position: 'absolute',
    paddingBottom: 40,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusBar: {
    backgroundColor: '#fff',
  },
  setFooter: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
