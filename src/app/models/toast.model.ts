import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default class Toast {

  delay: number = 5000;
  className: string = ''
  icon?: IconProp = undefined;
  body: string = 'Default toast message.';

}
