import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './Color';

export function CheckBoxC() {
  const [isChecked, setChecked] = useState(false);

  return (
       <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? colors.FOREST_GREEN : undefined}
          //disabled
        />
        <Text style={styles.paragraph}>{`Agree with terms & conditions.`}</Text>
      </View> 
  );
}

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
    color: colors.DIM_GRAY,
  },
  checkbox: {
    margin: 8,
  },
});