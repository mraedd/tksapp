import { StyleSheet,Text,View,Image,Button,StatusBar,

} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const anaEkran = ({navigation}) => {
  return (
    
    <Button
      title="Galeriye Git"
      accessibilityLabel="Galeriye gitmek için tıklayın"
      onPress={() =>
        navigation.navigate('Galeri', {name: 'Teksinn'})
      }
    />

  );
};

const Ekran = ({navigation, route}) => {
  return ( 
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image source={href="https://picsum.photos/200/300"} style={{ width: 400, height: 400, resizeMode: "contain",  }} />
      <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20}}>
        {route.params.name} Galerisi</Text>
        <Button
          title="Ana Ekrana Dön"
          accessibilityLabel="Ana Ekrana dönmek için tıklayın"
          onPress={() => navigation.navigate('Ana')}
        />
    </View>
  );
};

export default function App() {
  
  return (
/*Ana Sayfa Header */
    <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("./assets/tkslogo.png")}
            style={{ width: 180, height: 140, resizeMode: "contain" }}
          />
          <StatusBar style="auto" />
        </View>     
    <View style={styles.navi}>

        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Ana"
            component={anaEkran}
            options={{title: "Aradığın Herşey ,Teksinn'de.!", headerShown: false}}
          />
          <Stack.Screen name="Galeri" component={Ekran} />
        </Stack.Navigator>
      </NavigationContainer>

    </View>

    <View style={styles.statusBar}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
    </View>

    <View style={styles.footer}>
        <Text style={styles.setFooter}>Teksinn © {new Date().getFullYear()}</Text>
    </View>

    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  navi: {
    top:140,
    flex: 1,
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
