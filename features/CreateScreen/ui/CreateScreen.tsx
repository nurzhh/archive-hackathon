import { CameraView, useCameraPermissions } from "expo-camera";
import React from "react";
import {
  Button,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import SelectPhoto from "@/assets/images/PhotoSelect.png";
import CollectionPhoto from "@/assets/images/Collection.png";
import { styles } from "./styles";

export default function CreateScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = React.useState<any | null>(null);
  const cameraRef = React.useRef<CameraView | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setPhoto(result.assets[0].uri);
    }
  };

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  async function takePicture() {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const photoData = (await cameraRef.current.takePictureAsync(
        options
      )) as any;
      setPhoto(photoData.uri);
    }
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} ref={cameraRef}>
        <View style={styles.photoContainer}>
          <TouchableOpacity style={styles.snapContainer} onPress={pickImage}>
            <Image source={CollectionPhoto} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.snapContainer} onPress={takePicture}>
            <Image source={SelectPhoto} />
          </TouchableOpacity>

          {photo ? (
            <TouchableOpacity
              style={styles.snapContainer}
              onPress={() =>
                Alert.alert("Last photo", "This is the last taken photo.")
              }
            >
              <Image source={{ uri: photo }} style={styles.lastPhotoPreview} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.snapContainer}></TouchableOpacity>
          )}
        </View>
      </CameraView>

      {photo && <Image source={{ uri: photo }} style={styles.photoPreview} />}
    </View>
  );
}
