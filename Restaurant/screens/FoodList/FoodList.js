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
import {foodsMenu,resetState} from "./slice"
import Card from "./Card/Card"


export default function FoodList({navigation, route}){
    const dispatch = useDispatch()
    const { id, value } = route.params

    const foodPackagelist = useSelector(state => state.foodsPackage)
    const {foodsPackage} = foodPackagelist
    console.log(foodPackagelist.foodsPackage.data, "data")

    useFocusEffect(
        React.useCallback(() => {
          dispatch(foodsMenu({}))
          return () => {
            dispatch(resetState())
          }
        }, []),
    )

    const renderItem = (item) => {
        return (
          <Card
            paket={item}
            // value={valueFromProps}
            // onClickCardProduct={onClickCardProduct}
          />
        )
    }

    return(
        <>
            <ScrollView style={{ position:"relative"}}>
                <SafeAreaView style={{
                    height:150, 
                    width:"100%", 
                    flexDirection:"column"
                }}>
                    <View style={{flex:3}}>
                        <Text style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        textAlign: 'center',
                        fontWeight: '700',
                        fontSize: 24,
                    }}>Restaurant Rivaldi</Text>
                    </View>
                    <View style={{
                        flex:3, }} >
                        <Text style={{
                            marginLeft:"2%",
                            fontSize: 18,
                        }}  
                        >Silahkan pilih menu yang ingin dipesan</Text>
                    </View>
                </SafeAreaView>
                    <View style={{
                        height:800,
                        width:'100%',                
                        marginTop:"10",
                        flexDirection:"column",
                        }}>
                            <FlatList
                            data={foodPackagelist.foodsPackage.data}
                            renderItem={renderItem}
                                // bounces={true}
                                // extraData={value}
                                // alwaysBounceVertical={true}
                            keyExtractor={item => item.id}
                            style={{
                            marginTop:"20",
                            }}
                            />
                       
                    </View>

                    



            </ScrollView>
        </>
    )
}