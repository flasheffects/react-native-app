import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Text, Card, Button, Icon, Badge } from "react-native-elements";

function Home({ navigation }) {
  const [data, setData] = useState([]);

  const fetchData = () => {
    const apiURL = "https://api.workoutme.app/api/feed/get";
    fetch(apiURL)
      .then((res) => res.json())
      .then((resJson) => {
        setData(resJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const ItemView = ({ item }) => {
    const userName = item.user.displayName;
    const userImage = item.user.photoURL;
    const type = item.type;
    const created = item.created._seconds;
    const [...userKudos] = item.kudos;

    const hashtagUserName = userKudos.map((i) => i.user.name);
    const hashtagUserPhoto = userKudos.map((i) => i.user.photo);
    const hashtag = userKudos.map((i) => i.hashtag);

    const createDate = new Date(created * 1000).toISOString().slice(0, 10);

    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Details", {
            userName,
            userImage,
            hashtagUserName,
            hashtagUserPhoto,
            hashtag,
            userKudos,
            type,
            createDate,
          })
        }
      >
        <View style={styles.container}>
          <Card>
            <View style={styles.head}>
              <Badge value={type} status="success" />
              <Text>{createDate}</Text>
            </View>

            <View style={styles.content}>
              <Image style={styles.image} source={{ uri: userImage }} />
              <Text style={styles.name}>{userName}</Text>
            </View>
          </Card>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={ItemView}
      />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content: {
    flexDirection: "row",
  },
  image: {
    width: 60,
    height: 60,
    marginTop: 10,
    borderRadius: 50,
  },
  imageKudos: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  name: {
    padding: 10,
    fontSize: 20,
  },
  textCard: {
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 18,
  },
  kudos: {
    paddingTop: 10,
  },
  kudosHashtag: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  kudosUserName: {
    paddingTop: 4,
    paddingBottom: 4,
  },
});

export {styles}