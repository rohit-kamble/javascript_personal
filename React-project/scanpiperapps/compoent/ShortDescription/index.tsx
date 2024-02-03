import React from 'react';
// import {HStack, Box, VStack} from '@react-native-material/core';
import {TextStyle} from './styles';
import {BoxShadowContainer, ImageStyle} from '../EditDoc/style';
import {ShortDescriptionPorps} from './types';
import {TouchableOpacity, View} from 'react-native';
import {
  QrAndDeleteContainer,
  DeleteIcon,
  ImageStyleIcon,
} from '../../pages/CardShortDetails/style';
import {onShare, saveContact} from '../../utils/action';

export default function ShortDescription({
  info,
  // setScan,
  setVisible,
  setDeleteID,
  openData,
  // setScanData,
  setGetQrScanImg,
}: ShortDescriptionPorps) {
  const {name, company, contact, email, img, id} = info;
  const message = `Name: ${name}\nCompany: ${company}\nContact: ${contact}\nEmail: ${email}\n`;
  return (
    <View style={{display: 'flex', flexDirection: 'row'}}>
      <TouchableOpacity
        onPress={() => openData(id)}
        style={{width: '90%', flexDirection: 'row'}}>
        <View style={{width: '40%'}}>
          {img && (
            <BoxShadowContainer isEditPage={false}>
              <ImageStyle source={img} resizeMode="cover" />
            </BoxShadowContainer>
          )}
        </View>
        <View style={{width: '60%', paddingLeft: 6}}>
          <TextStyle isUnderLine={true}>Name:</TextStyle>
          {name && <TextStyle>{name}</TextStyle>}
          <TextStyle isUnderLine={true}>Contact:</TextStyle>
          {contact && <TextStyle>{contact}</TextStyle>}
          <TextStyle isUnderLine={true}>Company:</TextStyle>
          {company && <TextStyle>{company}</TextStyle>}
          <TextStyle isUnderLine={true}>Email:</TextStyle>
          {email && <TextStyle>{email}</TextStyle>}
        </View>
        {/* </View> */}
      </TouchableOpacity>
      <View style={{width: '10%'}}>
        <QrAndDeleteContainer>
          <DeleteIcon>
            <TouchableOpacity
              onPress={() => {
                // setScan(true);
                // setScanData(message);
                setGetQrScanImg({
                  name,
                  company,
                  contact,
                  email,
                  img: img?.uri,
                });
              }}>
              <ImageStyleIcon source={require('../../assets/scanIcon.png')} />
            </TouchableOpacity>
          </DeleteIcon>
          <DeleteIcon>
            <TouchableOpacity
              onPress={() => {
                onShare({
                  message,
                  url: img?.uri,
                });
              }}>
              <ImageStyleIcon source={require('../../assets/shareIcon.png')} />
            </TouchableOpacity>
          </DeleteIcon>
          <DeleteIcon>
            <TouchableOpacity
              onPress={() => {
                saveContact({
                  name,
                  email,
                  contact,
                });
              }}>
              <ImageStyleIcon
                source={require('../../assets/contactIcon.png')}
              />
            </TouchableOpacity>
          </DeleteIcon>
          <DeleteIcon>
            <TouchableOpacity
              onPress={() => {
                setVisible(true);
                setDeleteID(id);
              }}>
              <ImageStyleIcon source={require('../../assets/deleteIcon.png')} />
            </TouchableOpacity>
          </DeleteIcon>
        </QrAndDeleteContainer>
      </View>
    </View>
  );
}
