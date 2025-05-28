import {Image,} from 'react-native';

export default function Page() {
    return (
        <View style={styles.container}>
        <Image
        source={require('./assets/tkslogo.png')}
        style={{ width: 180, height: 140, resizeMode: 'contain' }}
        />
        </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    },
});