import { View, Image, Text, StyleSheet } from 'react-native';

const truncateTitle = str => {
  if (str.length >= 50) {
    return str.substring(0, 50) + '...';
  }

  return str;
};

export default function Post({ title, imageUrl, createAt }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: imageUrl,
        }}
      ></Image>
      <View style={styles.box}>
        <Text style={styles.title}>{truncateTitle(title)}</Text>
        <Text style={styles.date}>{new Date().toLocaleDateString()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0, .1)',
    borderStyle: 'solid',
    flexDirection: 'row',
    alignItems: 'start',
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 15,
    marginRight: 12,
  },
  box: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  date: {
    fontSize: 12,
    color: 'rgba(0,0,0, .4)',
    marginTop: 2,
  },
});
