import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "Matheus",
    };
    this.entrar = this.entrar.bind(this);
  }
  entrar(nome) {
    this.setState({
      nome: nome,
    });
  }

  render() {
    return (
      <View>
        <Text style={{ color: "white", fontSize: 25, padding: 50 }}>
          {this.state.nome}
        </Text>
        <Button
          title="Entrar"
          onPress={() => {
            this.entrar("Cleiton");
          }}
        />
      </View>
    );
  }
}
