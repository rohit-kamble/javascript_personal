/* eslint-disable prettier/prettier */
import {useEffect, useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';

function ImagePreView({route}: any): React.JSX.Element {
  const [imageData, setData] = useState<any>('');
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getData = async () => {
    const response = await fetch(
      `https://api.slingacademy.com/v1/sample-data/photos/${route.params.image}`,
    );
    const data = await response.json();
    setData(data.photo.url);
  };

  return (
    <View style={styles.container}>
      {imageData && <Image source={{uri: imageData}} style={{height: 400}} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
  },
});

export default ImagePreView;
