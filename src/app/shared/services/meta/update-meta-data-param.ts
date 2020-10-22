export interface UpdateMetaDataParams {
  meta: UpdateMetaDataItemParams[];
}

export interface UpdateMetaDataItemParams {
  metable_type: string;
  metable_id: number;
  type: string;
  key: string;
  value: any;
}
