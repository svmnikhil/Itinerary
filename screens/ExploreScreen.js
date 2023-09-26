import { Text, View, TouchableOpacity, Image, Keyboard, Platform } from 'react-native';
import { BlurView } from 'expo-blur';
import Animated, {useSharedValue, withTiming, useAnimatedStyle, Easing} from 'react-native-reanimated';
import { Axios } from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import { React, useState, useContext, useRef, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import ExpandedSearchBar from '../components/ExpandedSearchBar';



export default function ExploreScreen() {
  const [data, setData] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [isPressed, setIsPressed] = useState(false);
  const [keyboardOffset, setKeyboardOffset] = useState(0);

  
  const apiKey = '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';
  const apiUrl = 'https://api.openai.com/v1/engines/gpt-3.5-turbo-16k/completions';

  const blurIntensity = useSharedValue(0); // animation value for blur intensity
  

  const handleSend = async (textInput) => {
    const prompt = textInput
    const response = await axios.post(apiUrl, {
      prompt: prompt,
      max_tokens: 100,
      temperature: 0.5,
    }, {
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    });
    const text = response.data.choices[0].text;
    setData([...data, {type: 'user', 'text': textInput}, {type: 'bot', 'text': text}]);
    setTextInput('');

  }

  const handleExpand = () => {
    setIsPressed(true);
    blurIntensity.value = withTiming(100, { duration: 300 });
  };

  const handleClose = () => {
    setIsPressed(false);
    blurIntensity.value = withTiming(0, { duration: 300 });
  };

  useEffect(() => {
    // Android and iOS post different events for the keyboard
    const showEvent = Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow';
    const hideEvent = Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide';
  
    const keyboardWillShow = (event) => setKeyboardOffset(event.endCoordinates.height);
    const keyboardWillHide = () => setKeyboardOffset(0);
  
    const keyboardShowSubscription = Keyboard.addListener(showEvent, keyboardWillShow);
    const keyboardHideSubscription = Keyboard.addListener(hideEvent, keyboardWillHide);
  
    return () => {
      keyboardShowSubscription.remove();
      keyboardHideSubscription.remove();
    };
  }, []);
  

  return (
    <SafeAreaView className="flex-1 relative">
        <BlurView intensity={0} className="flex-1">
          <Image className="flex m-auto" source={require("../assets/logo.png")}/>
        </BlurView>
        {isPressed ? (
        <View className={`absolute top-90 left-0 right-0 ${keyboardOffset ? 'bottom-20' : 'bottom-10'} z-10`}>
          <ExpandedSearchBar onClose={handleClose}/> 
        </View>) : <SearchBar onPress={handleExpand} />} 
        
    </SafeAreaView>
    
  )
}

