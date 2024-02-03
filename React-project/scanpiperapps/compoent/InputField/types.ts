export interface InputFieldProps {
  placholder: string;
  onChangeText: (e: any) => void;
  value: string;
  isMultipleLine?: boolean;
  label: string;
}
