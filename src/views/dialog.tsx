import React, { useState } from 'react';
import { Button, Dialog, Icon } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from './header';

type DialogComponentProps = {};

const Dialogs: React.FunctionComponent<DialogComponentProps> = () => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <Header title="Dialogs" />

      <Button
        title="Open Dialog"
        onPress={toggleOverlay}
        buttonStyle={styles.button}
      />
      <Dialog isVisible={visible} onBackdropPress={toggleOverlay}>
      </Dialog>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
  textPrimary: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  textSecondary: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 17,
  },
});

export default Dialogs;
