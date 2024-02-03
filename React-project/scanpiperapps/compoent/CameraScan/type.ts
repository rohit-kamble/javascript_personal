export interface CamerScanProps {
  data: DataProps;
  openCam: () => void;
  openScan: boolean;
}

export interface DataProps {
  name: string;
  company: string;
  contact: string;
  email: string;
  img: ImageProps;
  id: string;
}

export interface ImageProps {
  uri: string;
}
