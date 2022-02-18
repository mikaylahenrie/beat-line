import Component from '@ember/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class extends Component {
  @service session;

  @action redirectToSpotify() {
    let generateRandomString = function(length, includeSpecialChar) {
      let text = '';
      let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      if (includeSpecialChar) {
        possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_.-~';
      }

      for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    };

    let state = generateRandomString(16);
    this.session.state = state;
    let challengeLength = Math.round((Math.random() * 85) + 43);
    let verifier = generateRandomString(challengeLength, true);
    this.session.codeVerifier = verifier;
    let challenge = new sjcl.hash.sha256.hash(verifier);
    challenge = sjcl.codec.base32.fromBits(challenge);
    this.session.codeChallenge = challenge;
    window.location.replace(`https://accounts.spotify.com/authorize?response_type=code&client_id=78701b6436884ea792fa9d532d1fd19b&redirect_uri=https://beat-line.herokuapp.com/init-auth&state=${state}&code_challenge_method=S256&code_challenge=${challenge}`);
  }
};
