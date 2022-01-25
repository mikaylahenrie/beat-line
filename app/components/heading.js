import Component from '@ember/component';
import { later } from '@ember/runloop';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class extends Component {
  @tracked headingClasses = '';

  @action startBlinking() {
    later(this, () => {
      this.headingClasses = 'highlight';
      this.stopBlinking();
    }, 1000);
  };

  @action stopBlinking() {
   later(this, () => {
    this.headingClasses = '';
    this.startBlinking();
   }, 1000);
  };
};
