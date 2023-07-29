import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TouchableHighlight, Modal, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SignUpScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [email, setEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  
  // You can add more country codes as required
  const countryCodes = [
    {label: "United States +1", value: "+1"},
    {label: "Canada +1", value: "+1"},
    // ...
  ];

  const handleSignUp = () => {
    // Add your sign up logic here
  }

  const handleCountryCodeChange = (code) => {
    setCountryCode(code);
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to LeaseLink</Text>

      <TouchableOpacity 
        style={styles.inputField} 
        onPress={() => setModalVisible(true)}
      >
        <Icon name="globe" size={24} color="#000" />
        <Text style={styles.input}>{`Country/Region: ${countryCode}`}</Text>
      </TouchableOpacity>

      <Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => {
    Alert.alert("Modal has been closed.");
    setModalVisible(!modalVisible);
  }}
>
  <View style={styles.centeredView}>
    <View style={styles.modalView}>
      {countryCodes.map((code) => (
        <TouchableOpacity
          key={code}
          style={styles.modalTextContainer}
          onPress={() => {
            setCountryCode(code);
            setModalVisible(!modalVisible);
          }}
        >
          <Text style={styles.modalText}>{code}</Text>
          {code === countryCode && <Icon name="check" size={24} color="green" />}
        </TouchableOpacity>
      ))}
    </View>
  </View>
</Modal>


      <View style={styles.inputField}>
        <Icon name="phone" size={24} color="#000" />
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
          placeholder="Phone Number"
          textAlign="left"
        />
      </View>

      <Text style={styles.confirmation}>
        We'll call or text you to confirm your number. Standard message and data rates apply.
      </Text>

      <TouchableHighlight 
        style={styles.button} 
        underlayColor="#FF5A5F" 
        onPress={handleSignUp}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableHighlight>

      <View style={styles.breakLine}>
        <View style={styles.hr} />
        <Text style={styles.or}>or</Text>
        <View style={styles.hr} />
      </View>

      <View style={styles.socialButton}>
        <Icon name="apple" size={24} color="#000" style={styles.socialIcon} />
        <TouchableOpacity style={styles.centeredButton} onPress={() => {}}>
          <Text style={styles.socialButtonText}>Continue with Apple</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.socialButton}>
        <Icon name="facebook" size={24} color="#3b5998" style={styles.socialIcon} />
        <TouchableOpacity style={styles.centeredButton} onPress={() => {}}>
          <Text style={styles.socialButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.socialButton}>
        <Icon name="google" size={24} color="#DB4437" style={styles.socialIcon} />
        <TouchableOpacity style={styles.centeredButton} onPress={() => {}}>
          <Text style={styles.socialButtonText}>Continue with Google</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.socialButton}>
        <Icon name="envelope" size={24} color="#000" style={styles.socialIcon} />
        <TouchableOpacity style={styles.centeredButton} onPress={() => {}}>
          <Text style={styles.socialButtonText}>Continue with Email</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.terms}>
        By signing up, you agree to LeaseLink's 
        <Text style={styles.link}> Terms, Data Policy and Cookies Policy.</Text>
      </Text>
      <Text style={styles.help}>Get help</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 48,
    color: '#000',
    alignSelf: 'flex-start',
  },
  inputField: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: 'white',
  },
  picker: {
    flex: 1,
    marginLeft: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF5A5F',
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  breakLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 32,
    paddingTop: 12,
    paddingBottom: 16,
  },
  hr: {
    flex: 1,
    height: 1,
    backgroundColor: 'lightgray',
  },
  or: {
    width: 30,
    textAlign: 'center',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  socialIcon: {
    marginRight: 10,
  },
  centeredButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  socialButtonText: {
    color: '#333333',
    fontWeight: 'bold',
    fontSize: 16,
  },
  terms: {
    fontSize: 14,
    color: '#666666',
    marginTop: 16,
    textAlign: 'center',
  },
  link: {
    color: '#FF5A5F',
  },
  help: {
    fontSize: 14,
    color: '#FF5A5F',
    marginTop: 16,
    textAlign: 'center',
  },
  confirmation: {
    fontSize: 12,
    marginBottom: 16,
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  countryCode: {
    fontSize: 16,
    marginBottom: 10,
  },
});


//modal breaking 
// add some functionality to sign up 
