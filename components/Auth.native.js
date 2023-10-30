import { Platform } from 'react-native';
import * as AppleAuthentication from 'expo-apple-authentication';
// import Realm from 'realm';

export function Auth() {
  if (Platform.OS === 'ios')
    return (
      <AppleAuthentication.AppleAuthenticationButton
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
        cornerRadius={25}
        style={{ width: 300, height: 64}}
        onPress={async () => {
          try {
            const credential = await AppleAuthentication.signInAsync({
              requestedScopes: [
                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                AppleAuthentication.AppleAuthenticationScope.EMAIL,
              ],
            })
            // Sign in via MongoDB Auth.
            // if (credential.identityToken) {
            //   const credentials = Realm.Credentials.apple(credential.identityToken);
            //   console.log(credentials);
            //   app.logIn(credentials).then(user => {
            //      console.log(`Logged in with id: ${user.id}`);
            //   });
            // } else {
            //   throw new Error('No identityToken.')
            // }
          } catch (e) {
            if (e.code === 'ERR_REQUEST_CANCELED') {
              // handle that the user canceled the sign-in flow
            } else {
              // handle other errors
            }
          }
        }}
      />
    )
  return <>{/* Implement Android Auth options. */}</>
}