import React from "react";
import { View, ScrollView, Image, StyleSheet } from "react-native";
import { Text, Card, Button, Icon, Badge } from "react-native-elements";
import { styles, textCard } from "./Home";

function Details({ route, navigation }) {
  const {
    userName,
    userImage,
    hashtagUserName,
    hashtagUserPhoto,
    hashtag,
    userKudos,
    type,
    createDate,
  } = route.params;

  return (
    <ScrollView>
      <Card>
        <View style={styles.head}>
          <Badge value={type} status="success" />
          <Text>{createDate}</Text>
        </View>
        <View style={styles.content}>
          <Image source={{ uri: userImage }} style={styles.image} />
          <Text style={styles.name}>{userName}</Text>
        </View>
        <Text style={styles.textCard}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo.
        </Text>
        {userKudos.map((i) => {
          return (
            <View style={styles.kudos}>
              <Text style={styles.kudosHashtag}>#{i.hashtag}</Text>
              <Image source={{ uri: i.user.photo }} style={styles.imageKudos} />
              <Text style={styles.kudosUserName}>{i.user.name}</Text>
            </View>
          );
        })}
      </Card>
    </ScrollView>
  );
}

export default Details;

 
