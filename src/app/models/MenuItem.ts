import Model from './Model';
import { isArray, map } from 'lodash-es';

class MenuItem extends Model {
  public selected: boolean;
  public pathMatch: string;
  public children;

  constructor(options) {
    super();
    this.children = (d) => {
      if (isArray(d) && d.length > 0) {
        return map(d, (item) => new MenuItem(item));
      } else {
        return [];
      }
    };
    this.bind(options);
  }
}

export default MenuItem;
