export interface EditDocProps {
  info: DataProps;
  isNewData: boolean;
}

export interface DataProps {
  name?: string;
  company?: string;
  contact?: string;
  email?: string;
  img?: ImageProps;
  scannedImage?: string;
  note?: string;
  id?: string;
  address?: string;
  profile?: string;
  tag?: string;
  website?: string;
}

interface ImageProps {
  uri: string;
}
