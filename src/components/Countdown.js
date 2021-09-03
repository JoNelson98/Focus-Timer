import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { fontSizes, spacing } from '../utils/sizes';
import { colors } from '../utils/colors';

const minutesToMillis = (min) => min * 1000 * 60; //converting the minutes we pass in to miliseconds
const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const Countdown = ({ minutes = 1, isPaused, onProgress, onEnd }) => {
  const interval = React.useRef(null);
  const [millis, setMilis] = useState(null);

  const countDown = () => {
    setMilis((time) => {
      if (time === 0) {
        clearInterval(interval.current);

        //do more stuff here
        return time;
      }

      const timeLeft = time - 1000;

      return timeLeft;
    });
  };

  useEffect(() => {
    setMilis(minutesToMillis(minutes));
  }, [minutes]);

  useEffect(() => {
    onProgress(millis / minutesToMillis(minutes));
    if (millis === 0) {
      onEnd();
    }
  }, [millis]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }

    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current);
  }, [isPaused]);



  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;

  return (
    <Text style={styles.text}>
      {' '}
      {formatTime(minute)}:{formatTime(seconds)}{' '}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 80,
    fontWeight: 'bold',
    color: colors.white,
    padding: spacing.lg,
    backgroundColor: 'rgba(94,132,22,0.3)',
  },
});
