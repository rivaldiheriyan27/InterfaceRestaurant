import React, { useState } from 'react'
import { useFocusEffect } from '@react-navigation/core'
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { unwrapResult } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

export default function DetailPaket({navigation, route}) {
    const dispatch = useDispatch()
    const { id, value } = route.params

    return(
        <>
            
        </>
    )
}