import React from "react";
import Contacts from "/Users/Pierangelo/Documents/Prog/Extend/Contacts.js";

export default class App extends React.Component {
  render() {
    return (
      <Contacts
        users={[
          {
            email: "pierangelooo@gmail.com",
            firstName: "Pierangelo",
            lastName: "Rothenbühler",
            meal: "#11",
            id: 1
          },
          {
            email: "florian.bienefelt@gmail.com",
            firstName: "Florian",
            lastName: "Bienefelt",
            meal: "#10",
            id: 2
          },
          {
            email: "constace.legay@gmail.com",
            firstName: "",
            lastName: "",
            meal: "",
            id: 3
          },
          {
            email: "pierangelooo@gmail.com",
            firstName: "Pierangelo",
            lastName: "Rothenbühler",
            meal: "#11",
            id: 4
          },
          {
            email: "florian.bienefelt@gmail.com",
            firstName: "Florian",
            lastName: "Bienefelt",
            meal: "#10",
            id: 5
          },
          {
            email: "constace.legay@gmail.com",
            firstName: "",
            lastName: "",
            meal: "",
            id: 6
          }
        ]}
      />
    );
  }
}
