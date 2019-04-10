import React, { Component } from "react";
import { StyleSheet,Appregistry } from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text
} from "native-base";
import {createStackNavigator, createAppContainer} from 'react-navigation';


class SignUp extends Component {
 constructor(props){
super(props)
this.state={InputUsername:'',
             InputPassword:''
}
}
InsertDataToServer=()=>{
const { InputUsername }  = this.state ;
 const { InputPassword }  = this.state ;

// fetch('localhost:3306/submit_user_info.php', {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     name:InputUsername,
//     pass:InputPassword
//   }),
// });
fetch('localhost:8080/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name:InputUsername,
    pass:InputPassword
}).then((response) => response.json())
.then((responseJson) => {
  return responseJson;
})
.catch((error) => {
  console.error(error);
})
});
}

  render() { 
    return (
      <Container style={styles.container}>
        <Header>
          
          <Body>
            <Title>BILL SPLIT</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Form>
            <Item floatingLabel>
              <Label onChangeText={InputUsername => this.setState({InputUsername})}>Username</Label>
              <Input  />
            </Item>
            <Item floatingLabel last>
              <Label onChangeText={InputPassword => this.setState({InputPassword})}>Password</Label>
              <Input secureTextEntry  />
            </Item>
          </Form>
          <Button block style={{ margin: 15, marginTop: 50 }} onPress={() => this.props.navigation.navigate('Details')}>
            <Text>Sign Up</Text>
          </Button>
 <Button block style={{ margin: 15, marginTop: 50 }} onPress={() => this.props.navigation.navigate('Details')}>
            <Text>Log In</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  }
});

class Login extends Component {
 
render() { 
    return (
      <Container style={styless.container}>
        <Header>
          
          <Body>
            <Title>BILL SPLIT</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry />
            </Item>
          </Form>
          <Button block style={{ margin: 15, marginTop: 50 }} onPress={() => this.props.navigation.navigate('Details1')}>
            <Text>Log me In</Text>
          </Button>

        </Content>
      </Container>
    );
  }
}

const styless = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  }
});



class database extends Component {

render() { 
    return (
      <Container style={styles1.container}>
        <Header>
          
          <Body>
            <Title>BILL SPLIT</Title>
          </Body>
          <Right />
        </Header>

        <Content padder style={{ backgroundColor: "#fff", padding: 20 }}>
          
          <Button transparent info style={styles.mb15}>
            <Text>Your Friend Circle</Text>
          </Button>
          <Button transparent style={styles.mb15} onPress={() => this.props.navigation.navigate('Details4')}>
            <Text>Add Friend</Text>
          </Button>
          <Button transparent success style={styles.mb15}  onPress={() => this.props.navigation.navigate('Details2')}>
            <Text>Add Bill</Text>
          </Button>
          <Button transparent warning style={styles.mb15}>
            <Text>Split Bill</Text>
          </Button>
         
        </Content>
      </Container>
    );
  }
}

const styles1 = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
  mb15: {
    marginBottom: 20
  },
});


class confirmation extends Component {

render() { 
    return (
      <Container style={styles2.container}>
       
         

        <Content padder>
          

            <Button transparent onPress={() => this.props.navigation.navigate('Details1')}>
              <Text>Back</Text>
            </Button>
<Text>

Your Record has been Submitted.</Text>
        </Content>
      </Container>
    );
  }
}

const styles2 = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  }
});

class addbill extends Component {
 
render() { 
    return (
      <Container style={styles3.container}>
        <Header>
          
          <Body>
            <Title>BILL SPLIT</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Person to be paid</Label>
              <Input />
            </Item>
           <Item floatingLabel>
              <Label>Ammount Borrowed</Label>
              <Input />
            </Item>
            
          </Form>
          <Button block style={{ margin: 15, marginTop: 50 }}  onPress={() => this.props.navigation.navigate('Details3')}>
            <Text>Add to Database</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles3 = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  }
});

class addfriend extends Component {
  
  render() { 
    return (
      <Container style={styles4.container}>
        <Header>
         
          <Body>
            <Title>BILL SPLIT</Title>
          </Body>
         
        </Header>

        <Content padder>
          <Form>
            <Item rounded>
              <Input placeholder="Friend_Name" 
                />
            </Item>
          </Form>
<Button block style={{ margin: 15, marginTop: 50 }}  onPress={() => this.props.navigation.navigate('Details3')}>
            <Text>Add to Database</Text></Button>
        </Content>
      </Container>
    );
  }
}

const styles4 = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  }
});

const AppNavigator = createStackNavigator(
  {
    Home: SignUp,
    Details: Login,
    Details1:database,
    Details2:addbill,
    Details3:confirmation,
    Details4:addfriend
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

