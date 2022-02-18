import Service from '@ember/service';

export default class extends Service {
  state = '';
  codeVerifier = '';
  codeChallenge = '';

  validSession() {
    return this.state !== '' && codeVerifier !== '' && codeChallenge !== '';
  }
}
