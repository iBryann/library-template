export interface ILayoutSettings {
  logoUrl: string;
  settings: Setting[];
}

export interface Setting {
  schoolId: string;
  parameterValue: string;
  parameterTag: string;
  createdAt: string;
  updatedAt: string;
}