import React, { useState } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { mdiPlus } from '@mdi/js';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, spacing } from '../../utils/sizes'

// You can import from local files

// or any pure javascript modules available in npm

export const Focus = ({ addSubject }) => {
  
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.innnerContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ flex: 1, marginRight: spacing.md }}
            onSubmitEditing={({ nativeEvent }) => {
              setSubject(nativeEvent.text);
            }}
          />
          <Button style={{ height: 65, alignItems: 'center', justifyContent: 'center'}} color="#FD6F96" mode="contained" onPress={() => addSubject(subject)}>
          <Text style={{ fontSize: 30 }}>
            +
          </Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  innnerContainer: {
    flex: 1,
    padding: spacing.md,
    justifyContent: 'center',
  },
  title: {
    color: '#FFF5B7',
    fontWeight: 'bold',
    fontSize: spacing.lg,
  },
  inputContainer: {
    paddingTop: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
