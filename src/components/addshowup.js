import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Modal from 'modal-react-native-web';
export default function addshowup() {
  return (
    <View>
      <Modal animationType="slide" transparent={true} onRequestClose={() => {}}>
        <View style={styles.modalContainer}>
          <View style={styles.buttonCloseModal}>
            <TouchableOpacity
              onPress={() => {
                setAddContactVisible(!addContactVisible);
              }}
            >
              <View>
                <AntDesign name="close" size={24} color="white" />
              </View>
            </TouchableOpacity>
          </View>
          <View></View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({});
