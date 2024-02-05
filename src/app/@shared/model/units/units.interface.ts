
export interface GlobalResponse<T> {
  attachmentsList: AttachmentList[];
  data: T;
  message: string;
  pageSize: number;
  status: UnitsStaus;
}

export enum UnitsStaus {
  Submitted = 1,
  In_Process = 2,
  Rejected = 3,
  NeedAction = 4,
  Approved = 5,
  Draft = 6,
}

export interface AttachmentList {
  attachmentName: string
  attachmentStatus: UnitsStaus
  attachmentType: string
  attachmentUrl: string
  comment: string;
  createdAt: string
  id: number;
  requestId: number
  updatedAt: string
}


export interface IUnit {
  buildingNo: string
  projectEn: string
  unitTypeEn: string
  unitNo: string
  groupNo: string
  ownerName:string
  contractNumber: string
  offerNumber: string
}
