import { StyleSheet,View,Text,
} from 'react-native';

export default function Page() {
    return (
        <View style={styles.container}>
            <Text style={{textAlign: 'center', padding: 20, fontSize: 24, fontWeight: 'bold'}}>
                "2. Sayfa - Galeri"
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});