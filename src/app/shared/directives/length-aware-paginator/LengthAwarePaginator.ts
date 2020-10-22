import Model from '../../../models/Model';

class LengthAwarePaginator extends Model {
  public total_pages: number;
  public current_page: number;

  getTotalPages(): any {
    throw new Error('Method not implemented.');
  }
  getTotal(): any {
    throw new Error('Method not implemented.');
  }
  constructor(options) {
    super();
    this.bind(options);
  }
}

export default LengthAwarePaginator;
