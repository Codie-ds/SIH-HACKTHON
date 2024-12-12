import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const TextToISL: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [submittedText, setSubmittedText] = useState<string>('');

  const handleSubmission = () => {
    setSubmittedText(inputText);
    setInputText(''); // Clear input field after submission
  };

  const getVideoPlaceholder = (text: string) => {
    // Map text to video placeholders. Replace with actual image paths
    const videoPlaceholderMap: { [key: string]: any } = {
      
    };
    return videoPlaceholderMap[text.toLowerCase()] || require('../assets/hello.gif');
  };

  const videoPlaceholder = getVideoPlaceholder(submittedText);

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
          <Text style={styles.resultText}>Submitted Text:</Text>
          <Text style={styles.submittedText}>{submittedText}</Text>
          <View style={styles.videoPlaceholderContainer}>
            <Image source={videoPlaceholder} style={styles.videoPlaceholder} />
          </View>
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
