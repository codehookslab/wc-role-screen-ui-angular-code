export interface Screen {

  parentModuleId: number;
  parentModuleName: string;
  uid: number;
  name: string;
  routerPath: string;
  isModule: boolean;
  isRootModule: boolean;
  screens?: Screen[];
  isSelected?: boolean;
  module?: Screen;
}
