import Component from '@ember/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class extends Component{
  @tracked lineClasses = '';

  @action bringInTheLine() {
    this.lineClasses = 'bringInTheLine';
  };
};
