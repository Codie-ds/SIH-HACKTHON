import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const TextToISL: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [submittedText, setSubmittedText] = useState<string>('');
  const [gifPath, setGifPath] = useState<string | null>(null);

  // Mapping of ISL gestures to GIF file paths
  const islGifMapping: { [key: string]: any } = {
    'hello': require('../assets/ISL_Gifs/hello.gif'),
    'good morning': require('../assets/ISL_Gifs/good morning.gif'),
    'good afternoon': require('../assets/ISL_Gifs/good afternoon.gif'),
    'good evening': require('../assets/ISL_Gifs/good evening.gif'),
    'please': require('../assets/ISL_Gifs/please.gif'),
    'black': require('../assets/ISL_Gifs/black.gif'),
    'blue': require('../assets/ISL_Gifs/blue.gif'),
    'excuess me': require('../assets/ISL_Gifs/excuess me.gif'),
    'help': require('../assets/ISL_Gifs/help.gif'),
    'indian': require('../assets/ISL_Gifs/indian.gif'),
    'language': require('../assets/ISL_Gifs/language.gif'),
    'namaste': require('../assets/ISL_Gifs/namaste.gif'),
    'no': require('../assets/ISL_Gifs/no.gif'),
    'sign': require('../assets/ISL_Gifs/sign.gif'),
    'sorry': require('../assets/ISL_Gifs/sorry.gif'),
    'welcome': require('../assets/ISL_Gifs/welcome.gif'),
    'yes': require('../assets/ISL_Gifs/yes.gif'),
    // Add more mappings here as needed
  };

  const handleSubmission = () => {
    const cleanedText = inputText.toLowerCase().trim();
    setSubmittedText(cleanedText);

    // Map the text to the corresponding GIF file
    const gif = islGifMapping[cleanedText] || null;
    setGifPath(gif);

    setInputText(''); // Clear input field after submission
  };

  return (
    <View style={styles.container}>
      <View style={styles.panelContainer}>
        <Text style={styles.label}>Enter Text:</Text>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type something..."
        />
        <Button title="Send" onPress={handleSubmission} />
      </View>
      {submittedText !== '' && (
        <View style={styles.resultContainer}>
          
          {gifPath && (
            <View style={styles.videoPlaceholderContainer}>
              <Image source={gifPath} style={styles.videoPlaceholder} />
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  panelContainer: {
    width: '100%',
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  resultContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  submittedText: {
    fontSize: 18,
    color: '#333',
    marginTop: 8,
  },
  videoPlaceholderContainer: {
    marginTop: 16,
    width: 300,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  videoPlaceholder: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default TextToISL;
