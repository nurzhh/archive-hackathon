import { CameraView, useCameraPermissions } from "expo-camera";
import { useState, useRef } from "react";
import { Button, Text, TouchableOpacity, View, Image } from "react-native";
import { styles } from "./styles";

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState<any | null>(null);
  const cameraRef = useRef<CameraView | null>(null);

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
        <TouchableOpacity style={styles.snapContainer} onPress={takePicture}>
          <Text style={styles.text}>SNAP</Text>
        </TouchableOpacity>
      </CameraView>
      {photo && <Image source={{ uri: photo }} style={styles.photoPreview} />}
    </View>
  );
}
