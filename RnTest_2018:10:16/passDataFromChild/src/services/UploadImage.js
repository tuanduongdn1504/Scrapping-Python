import RNFetchBlob from 'rn-fetch-blob';
import config from '../Config/AppSetting';

export default async function uploadImage(uri) {
  const response = await RNFetchBlob.fetch(
    'POST',
    `${config.PARSE_URL}/files/picture.png`,
    {
      'X-Parse-Application-Id': config.PARSE_ID,
      'X-Parse-REST-API-Key': config.PARSE_API_KEY,
      'Content-Type': 'image/png'
    },
    RNFetchBlob.wrap(uri)
  );
  return response.json();
}
