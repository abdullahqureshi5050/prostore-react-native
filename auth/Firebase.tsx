import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { FirebaseConfig } from "./FirebaseConfig";
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
import { initializeApp, getApp } from 'firebase/app';
import { getAuth, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';

// --- Expo Firebase code


// Initialize Firebase JS SDK >=9.x.x
// https://firebase.google.com/docs/web/setup
try {
  // initializeApp({
  //   apiKey: "AIzaSyC7KRW8IvW-_YmQrmxlTS8g5oyHPJsXkEk",
  //   authDomain: "prostorepk-21db3.firebaseapp.com",
  //   projectId: "prostorepk-21db3",
  //   storageBucket: "prostorepk-21db3.appspot.com",
  //   messagingSenderId: "434194598621",
  //   appId: "1:434194598621:web:f3c2bc2ad6a37811cbe934",
  //   measurementId: "G-CQP85NC5VK"
  // });

  // include FirebaseConfig function 
  FirebaseConfig();
} catch (err) {
  // ignore app already initialized error in snack
}

// Firebase references
const app = getApp();
const auth = getAuth();

// Double-check that we can run the example
if (!app?.options || Platform.OS === 'web') {
  throw new Error('This example only works on Android or iOS, and requires a valid Firebase config.');
}

export const ExpoFirebase = ()=> {
  // Ref or state management hooks
  const recaptchaVerifier = React.useRef(undefined);
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [verificationId, setVerificationId] = React.useState('');
  const [verificationCode, setVerificationCode] = React.useState('');

  const firebaseConfig = app ? app.options : undefined;
  const [message, showMessage] = React.useState({} as any);
  const attemptInvisibleVerification = false;

  return (
    <View style={{ flex:1, padding: 20, marginTop: 50 }}>
      <Button title='dadasd' onPress={()=>{}}></Button>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier as any}
        firebaseConfig={app.options}
        // attemptInvisibleVerification
      />
      <Text style={{ marginTop: 20 }}>Enter phone number</Text>
      <TextInput
        style={{ marginVertical: 10, fontSize: 17 }}
        placeholder="+1 999 999 9999"
        autoFocus
        autoCompleteType="tel"
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
        onChangeText={(phoneNumber: any) => setPhoneNumber(phoneNumber)}
      />
      <Button
        title="Send Verification Code"
        disabled={!phoneNumber}
        onPress={async () => {
          // The FirebaseRecaptchaVerifierModal ref implements the
          // FirebaseAuthApplicationVerifier interface and can be
          // passed directly to `verifyPhoneNumber`.
          try {
            const phoneProvider = new PhoneAuthProvider(auth);
            const verificationId = await phoneProvider.verifyPhoneNumber(
              phoneNumber,
              recaptchaVerifier.current!,    
            );
            setVerificationId(verificationId);
            showMessage({
              text: 'Verification code has been sent to your phone.',
            });
          } catch (err: any) {
            showMessage({ text: `Error: ${err.message}`, color: 'red' });
          }
        }}
      />
      <Text style={{ marginTop: 20 }}>Enter Verification code</Text>
      <TextInput
        style={{ marginVertical: 10, fontSize: 17 }}
        editable={!!verificationId}
        placeholder="123456"
        onChangeText={setVerificationCode}
      />
      <Button
        title="Confirm Verification Code"
        disabled={!verificationId}
        onPress={async () => {
          try {
            const credential = PhoneAuthProvider.credential(
              verificationId,
              verificationCode
            );
            await signInWithCredential(auth, credential);
            showMessage({ text: 'Phone authentication successful 👍' });
          } catch (err: any) {
            showMessage({ text: `Error: ${err.message}`, color: 'red' });
          }
        }}
      />
      {message ? (
        <TouchableOpacity
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor: 0xffffffee, justifyContent: 'center' } as any,
          ]}
          onPress={() => showMessage(undefined)}>
          <Text
            style={{
              color: message.color || 'blue',
              fontSize: 17,
              textAlign: 'center',
              margin: 20,
            }}>
            {message.text}
          </Text>
        </TouchableOpacity>
      ) : (
        undefined
      )}
      {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}
    </View>
  );
}