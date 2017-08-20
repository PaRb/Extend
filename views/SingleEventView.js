import React from "react";
import PropTypes from "prop-types";
import { ScrollView, Text, StyleSheet } from "react-native";

import NavigationItem from "../components/NavigationItem";
import Loading from "../components/Loading";

const SingleEventView = ({ members, navigation }) => {
  return (
    <ScrollView style={styles.view}>
      {members
        ? members.length > 0
          ? members.map(member =>
              <NavigationItem
                key={member.id}
                handlePress={() =>
                  navigation.navigate("SingleContactView", { ...member })}
                height={64}
              >
                <Text style={styles.member}>
                  {member.firstName} {member.lastName}
                </Text>
              </NavigationItem>,
            )
          : <Text style={styles.empty}>Personne pour l'instant</Text>
        : <Loading />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  member: {
    fontSize: 20,
  },
  empty: {
    alignSelf: "center",
    fontSize: 24,
    padding: 16,
  },
});

SingleEventView.propTypes = {
  event: PropTypes.object.isRequired,
};

export default SingleEventView;
