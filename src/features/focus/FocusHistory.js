import React from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';

import { fontSizes, spacing } from '../../utils/sizes';
import { RoundedButton } from '../../components/RoundedButton';

const HistoryItem = ({ item, index }) => {
  return <Text style={styles.historyItem(item.status)}>{item.subject}</Text>;
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <>
      <SafeAreaView style={{ flex: 0.5, alignItems: 'center' }}>
        {!!focusHistory.length && (
          <>
            <Text style={styles.title}>Things we've focused on</Text>

            <FlatList
              style={{ flex: 1 }}
              contentContainerStyle={{ flex: 1, alignItems: 'center' }}
              data={focusHistory}
              renderItem={HistoryItem}
            />

              <View style={{ marginBottom: 25 }}>
                <Button
                  style={{
                    height: 65,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  color="#FD6F96"
                  mode="contained"
                  onPress={() => onClear()}>
                  <Text style={{ fontSize: 30 }}>Clear</Text>
                </Button>
              </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status > 1 ? '#FF449F' : '#00EAD3',
    fontSize: 16,
  }),
  title: {
    color: '#FFF5B7',
    fontSize: 24,
    fontWeight: 'bold',
  },
  clearContainer: {
    alignItems: 'center',
    padding: spacing.md,
  },
});
