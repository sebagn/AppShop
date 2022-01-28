import {Dimensions, StyleSheet} from 'react-native';

const {height} = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height / 5,
    margin: 10,
    padding: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fafafa',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
