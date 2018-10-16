import _ from 'lodash';

const {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager
} = require('react-native-fbsdk');

const emptyFunction = () => {};

let authResponse;

export async function loginWithFacebookSDK(options) {
  const scope = options || 'public_profile';
  const permissions = scope.split(',');
  const loginResult = await LoginManager.logInWithReadPermissions(permissions);
  if (loginResult.isCancelled) {
    throw new Error('Canceled by user');
  }

  const accessToken = await AccessToken.getCurrentAccessToken();
  if (!accessToken) {
    throw new Error('No access token');
  }

  authResponse = {
    id: accessToken.userID, // FIXME: RNFBSDK bug: userId -> userID
    access_token: accessToken.accessToken,
    expiresIn: Math.round((accessToken.expirationTime - Date.now()) / 1000)
  };
  return authResponse;
}

const FacebookSDK = {
  login(options) {
    return loginWithFacebookSDK(options);
  },

  getAuthResponse() {
    return authResponse;
  },

  logout() {
    LoginManager.logOut();
  },

  /**
   * Make a API call to Graph server. This is the **real** RESTful API.
   *
   * Except the path, all arguments to this function are optional. So any of
   * these are valid:
   *
   *   FB.api('/me') // throw away the response
   *   FB.api('/me', function(r) { console.log(r) })
   *   FB.api('/me', { fields: 'email' }); // throw away response
   *   FB.api('/me', { fields: 'email' }, function(r) { console.log(r) });
   *   FB.api('/12345678', 'delete', function(r) { console.log(r) });
   *   FB.api(
   *     '/me/feed',
   *     'post',
   *     { body: 'hi there' },
   *     function(r) { console.log(r) }
   *   );
   *
   * param path   {String}   the url path
   * param method {String}   the http method
   * param params {Object}   the parameters for the query
   * param cb     {Function} the callback function to handle the response
   */
  api(path, ...args) {
    const argByType = {};
    args.forEach(arg => {
      argByType[typeof arg] = arg;
    });

    const httpMethod = (argByType.string || 'get').toUpperCase();
    const params = argByType.object || {};
    const callback = argByType.function || emptyFunction;

    // FIXME: Move this into RNFBSDK
    // GraphRequest requires all parameters to be in {string: 'abc'}
    // or {uri: 'xyz'} format
    const parameters = _.mapValues(params, value => ({ string: value }));

    function processResponse(error, result) {
      // FIXME: RNFBSDK bug: result is Object on iOS and string on Android
      if (!error && typeof result === 'string') {
        try {
          result = JSON.parse(result);
        } catch (e) {
          error = e;
        }
      }

      const data = error ? { error } : result;
      callback(data);
    }

    const request = new GraphRequest(path, { parameters, httpMethod }, processResponse);
    new GraphRequestManager().addRequest(request).start();
  },

  async queryFacebookAPI(path, ...args) {
    return new Promise((resolve, reject) => {
      FacebookSDK.api(path, ...args, response => {
        if (response && !response.error) {
          resolve(response);
        } else {
          reject(response && response.error);
        }
      });
    });
  }
};

export default FacebookSDK;
