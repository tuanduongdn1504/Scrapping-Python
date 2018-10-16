import { Platform } from "react-native";
import { translate } from "../utils/locale";

export function getAvatarPickerOptions() {
  return {
    title: translate("STR_PICKER_DIALOG_TITLE_PHOTO"), // specify null or empty string to remove the title
    cancelButtonTitle: translate("STR_BUTTON_CANCEL"),
    takePhotoButtonTitle: translate("STR_PICKER_DIALOG_BUTTON_TAKE_PHOTO"), // specify null or empty string to remove this button
    chooseFromLibraryButtonTitle: translate(
      "STR_PICKER_DIALOG_BUTTON_CHOOSE_FROM_LIBRARY"
    ), // specify null or empty string to remove this button
    cameraType: "back", // 'front' or 'back'
    mediaType: "photo", // 'photo' or 'video'
    maxWidth: 400, // photos only
    maxHeight: 400, // photos only
    aspectX: 2, // android only - aspectX:aspectY, the cropping image's ratio of width to height
    aspectY: 1, // android only - aspectX:aspectY, the cropping image's ratio of width to height
    quality: 1, // 0 to 1, photos only
    angle: 0, // android only, photos only
    allowsEditing: true, // Built in functionality to resize/reposition the image after selection
    noData: true, // photos only - disables the base64 `data` field from being generated
    storageOptions: {
      // if this key is provided, the image will get saved in the documents directory on ios
      // and the pictures directory on android (rather than a temporary directory)
      skipBackup: true, // ios only - image will NOT be backed up to icloud
      path: "images", // ios only - will save image at /Documents/images rather than the root,
      waitUntilSaved: true
    }
  };
}

export function getEmergencyPhotoOptions() {
  return {
    title: translate("STR_PICKER_DIALOG_TITLE_PHOTO"), // specify null or empty string to remove the title
    cancelButtonTitle: translate("STR_BUTTON_CANCEL"),
    takePhotoButtonTitle: translate("STR_PICKER_DIALOG_BUTTON_TAKE_PHOTO"), // specify null or empty string to remove this button
    chooseFromLibraryButtonTitle: translate(
      "STR_PICKER_DIALOG_BUTTON_CHOOSE_FROM_LIBRARY"
    ), // specify null or empty string to remove this button
    cameraType: "back", // 'front' or 'back'
    mediaType: "photo", // 'photo' or 'video'
    maxWidth: 600, // photos only
    maxHeight: 800, // photos only
    aspectX: 2, // android only - aspectX:aspectY, the cropping image's ratio of width to height
    aspectY: 1, // android only - aspectX:aspectY, the cropping image's ratio of width to height
    quality: 1, // 0 to 1, photos only
    angle: 0, // android only, photos only
    allowsEditing: false, // Built in functionality to resize/reposition the image after selection
    noData: true, // photos only - disables the base64 `data` field from being generated
    storageOptions: {
      // if this key is provided, the image will get saved in the documents directory on ios
      // and the pictures directory on android (rather than a temporary directory)
      skipBackup: true, // ios only - image will NOT be backed up to icloud
      path: "images" // ios only - will save image at /Documents/images rather than the root
    }
  };
}

export function getVideoPickerOptions() {
  return {
    title: translate("STR_PICKER_DIALOG_TITLE_VIDEO"), // specify null or empty string to remove the title
    cancelButtonTitle: translate("STR_BUTTON_CANCEL"),
    takePhotoButtonTitle: translate("STR_PICKER_DIALOG_BUTTON_TAKE_VIDEO"), // specify null or empty string to remove this button
    chooseFromLibraryButtonTitle: translate(
      "STR_PICKER_DIALOG_BUTTON_CHOOSE_FROM_LIBRARY"
    ), // specify null or empty string to remove this button
    cameraType: "back", // 'front' or 'back'
    mediaType: "video", // 'photo' or 'video'
    ...Platform.select({
      ios: {
        videoQuality: "medium"
      },
      android: {
        videoQuality: "low"
      }
    }),
    durationLimit: 10, // in second
    allowsEditing: true,
    formatToMp4: true,
    storageOptions: {
      // if this key is provided, the image will get saved in the documents directory on ios
      // and the pictures directory on android (rather than a temporary directory)
      skipBackup: true, // ios only - image will NOT be backed up to icloud
      path: "videos" // ios only - will save image at /Documents/images rather than the root,
    }
  };
}

export function getAudioOptions() {
  return {
    SampleRate: 44100,
    Channels: 2,
    AudioQuality: "High",
    AudioEncoding: "aac",
    MeteringEnabled: true
  };
}

export default {};
