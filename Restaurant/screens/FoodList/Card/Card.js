import {
    FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Card({paket}) {
    const navigation = useNavigation()


    return(
        <>
        <TouchableWithoutFeedback
            onPress={() =>{
                console.log("ini pindah")
            }}
            >
            <View style={{
                width:"95%",
                height:150,
                marginRight:"auto",
                marginLeft:"auto",
                marginBottom:"2%",
                // backgroundColor:"red",
                flexDirection:"row",
                borderWidth:"1px", 
                borderColor:"black",
                borderRadius:"20%"
                
            }}>
                <View style={{
                    flex:2,
                    // backgroundColor:"blue",
                }}>
                    <Image
                    style={{
                    height: 120,
                    width: 110,
                    marginBottom: 'auto',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    marginTop:"auto"
                  }}
                  source={{
                    uri: `${paket.item.picture}`,
                  }}
                />
                </View>
                <View style={{
                    flex:4,
                    flexDirection:"column"
                }}>
                    <View style={{flex:4, }}>
                        <Text style={{
                            marginBottom:"auto",
                            marginTop:"auto",
                            marginLeft:"auto",
                            marginRight:"auto",
                            fontSize:20,
                            fontWeight:"600",
                        }}>{paket.item.nameFood}</Text>
                    </View>
                    <View style={{flex:2}}>
                        <Text style={{
                            marginBottom:"auto",
                            marginLeft:"auto",
                            marginRight:"auto",
                            fontSize:20,
                            fontWeight:"600",    
                        }}>{paket.item.price}</Text>
                    </View>
                    
                </View>
            </View>
            
        </TouchableWithoutFeedback>
        </>
    )
}