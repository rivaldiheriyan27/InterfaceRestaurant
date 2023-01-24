import { useState, useEffect } from "react";
import {
  FlatList,
  Button,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity
} from "react-native";


export default function WelcomeScreen({navigation}){
    const handleButton = () => {
        navigation.navigate('FoodList')
        // console.log("ini ke foodList")
    }

    return(
        <>
        <SafeAreaView
            style={{
                flex:1,
                position:'relative'
            }}
        >   
            <View style={{ 
                flex:0.8 }}
            >   
                <View 
                style={{
                    width:'90%',
                    height:'90%',
                    marginBottom: 'auto',
                    marginTop: 'auto',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    
                }}>
                    <Text style={{
                        textAlign: 'center',
                        marginTop: 10,
                        marginBottom: 5,
                        fontWeight: '900',
                        fontSize: 24,
                    }}>
                        Selamat datang di Restaurant Rivaldi
                    </Text>
                </View>   
            </View>
            <View style={{ 
                // backgroundColor:"pink", 
                flex:4.2 }}
            >      
            <Image
              style={{
                height: 350,
                width: '95%',
                marginTop: 'auto',
                marginLeft: 'auto',
                marginBottom: "auto",
                marginRight: 'auto',
              }}
              source={require('../../assets/food.jpeg')}
            />
            </View>
            <View style={{ 
                flex:1 }}
            > 
               <TouchableOpacity
              onPress={handleButton}
              style={{
                marginBottom: 'auto',
                marginTop: 'auto',
              }}
            >     
                <View
                style={{
                  backgroundColor: "orange",
                  width: '80%',
                  borderRadius: 50,
                  height: 50,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 10,
                }}
              >
                <Text
                  style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    color: "white",
                    fontWeight: '500',
                    fontSize: 16,
                  }}
                >
                    Mulai
                </Text>
              </View>
            </TouchableOpacity>
            </View>

            
        </SafeAreaView>
        </>
    );
}