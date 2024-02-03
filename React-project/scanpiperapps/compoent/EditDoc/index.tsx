import React, {useEffect, useState} from 'react';
import {ScrollView, BackHandler, TouchableOpacity} from 'react-native';
import InputField from '../InputField';
import CardShortDetails from '../../pages/CardShortDetails';
import {createNewData, updateData} from '../../utils/action';

import {
  BoxShadowContainer,
  ImageStyle,
  SubmitButton,
  SubmitButtonText,
  EditContiner,
} from './style';
import {
  ImageStyleIcon,
  LinearGradientContainer,
  SafeAreaViewContainer,
} from '../../pages/CardShortDetails/style';
import {EditDocProps} from './types';
import Dropdown from '../../compoent/Dropdown';

const List = [{title: 'general'}, {title: 'doctor'}, {title: 'engineer'}];

export default function EditDoc({info, isNewData}: EditDocProps) {
  const [name, setName] = useState(info.name || '');
  const [company, setCompany] = useState(info.company || '');
  const [contact, setContact] = useState(info.contact || '');
  const [email, setEmail] = useState(info.email || '');
  const [note, setNote] = useState(info.note || '');
  const [address, setAddress] = useState(info.address || '');
  const [profile, setProfile] = useState(info.profile || '');
  const [website, setWebsite] = useState(info.website || '');
  const [openInitial, setOpenInial] = useState(false);
  const [selecValue, setSelectValue] = useState(
    info.tag || List[0].title || '',
  );
  const [selected, setSelected] = useState(false);
  const src = (info.img && info.img.uri && info.img.uri) || info.scannedImage;
  const callBack: any = () => {
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', callBack);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', callBack);
    };
  }, []);

  const onSubmit = () => {
    if (isNewData) {
      const getData: any = src
        ? {
            name,
            company,
            contact,
            email,
            address,
            profile,
            note,
            website,
            tag: selecValue,
            img: {uri: src},
            id: src,
          }
        : {};
      createNewData({getData, setOpenInial});
    } else {
      updateData({
        src,
        name,
        company,
        contact,
        note,
        profile,
        address,
        email,
        website,
        tag: selecValue,
        setOpenInial,
      });
    }
  };

  return openInitial ? (
    <CardShortDetails />
  ) : (
    <LinearGradientContainer colors={['#fff', '#fff']}>
      <SafeAreaViewContainer>
        <EditContiner>
          <TouchableOpacity onPress={() => setOpenInial(true)}>
            <ImageStyleIcon source={require('../../assets/backIcon.png')} />
          </TouchableOpacity>
        </EditContiner>
        <BoxShadowContainer isEditPage={true}>
          <ImageStyle resizeMode="cover" source={{uri: src}} />
        </BoxShadowContainer>
        <Dropdown
          {...{setSelectValue, setSelected, selecValue, selected, List}}
        />
        <ScrollView>
          <InputField
            placholder="name"
            onChangeText={setName}
            value={name}
            label="name"
          />
          <InputField
            label="Designation"
            placholder="Designation"
            onChangeText={setProfile}
            value={profile}
          />
          <InputField
            label="company"
            placholder="company"
            onChangeText={setCompany}
            value={company}
          />
          <InputField
            label="contact"
            placholder="contact"
            onChangeText={setContact}
            value={contact}
          />
          <InputField
            label="email"
            placholder="email"
            onChangeText={setEmail}
            value={email}
          />
          <InputField
            label="addresss"
            placholder="address"
            onChangeText={setAddress}
            value={address}
            isMultipleLine={true}
          />
          <InputField
            label="website"
            placholder="website"
            onChangeText={setWebsite}
            value={website}
          />
          <InputField
            label="Note"
            placholder="Note"
            onChangeText={setNote}
            value={note}
          />
        </ScrollView>
        <SubmitButton onPress={onSubmit}>
          <SubmitButtonText>Submit</SubmitButtonText>
        </SubmitButton>
      </SafeAreaViewContainer>
    </LinearGradientContainer>
  );
}
