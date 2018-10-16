import RNFetchBlob from 'rn-fetch-blob';
import config from '../Config/AppSetting';

export default function uploadVideo(uri) {
  return RNFetchBlob.fetch(
    'POST',
    `${config.PARSE_URL}/files/video.mp4`,
    {
      'X-Parse-Application-Id': config.PARSE_ID,
      'X-Parse-REST-API-Key': config.PARSE_API_KEY,
      'Content-Type': 'video/mp4'
    },
    RNFetchBlob.wrap(uri)
  )
    .then(res => res.json())
    .catch((err) => {
      console.log(err);
    });
}
