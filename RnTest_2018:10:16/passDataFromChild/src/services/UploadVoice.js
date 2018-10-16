import RNFetchBlob from 'rn-fetch-blob';
import config from '../Config/AppSetting';

export default function uploadVoice(uri) {
  return RNFetchBlob.fetch(
    'POST',
    `${config.PARSE_URL}/files/audio.aac`,
    {
      'X-Parse-Application-Id': config.PARSE_ID,
      'X-Parse-REST-API-Key': config.PARSE_API_KEY,
      'Content-Type': 'audio/aac'
    },
    RNFetchBlob.wrap(uri)
  )
    .then(res => res.json())
    .catch((err) => {
      console.log(err);
    });
}
