import { View, Text, SafeAreaView, Image, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsVerticalIcon
} from 'react-native-heroicons/outline';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <Text className="border-red-800">


        {/* Header */}
        <View style={{display: 'flex', flexDirection: 'row', padding: 3, alignItems: 'center', margin: 4}}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1684093024940-7847c7af3faa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' }}
            style={{ width: 50, height: 50, backgroundColor: 'gray', margin: 10, borderRadius: 50}}
          // className="h-7 w-7 bg-gray-300"
          />
          <View style={{flex: 1}}>

            <Text style={{fontWeight: 'bold', color: 'gray', fontSize: 12}} >Deliver Now!</Text>
            <Text  style={{fontWeight: 'bold', color: 'black', fontSize: 17}} >Current Location
            <ChevronDownIcon size={20} color="#00CCBB"/>
            </Text>
          </View>

          <UserIcon size={35} color="#00CCBB"/>
        </View>

        {/* Search */}
        <View style={{flex: 'row', alignItems: 'center'}}>
          <View style={{display: 'row',flex: 1, backgroundColor: 'lightgray', margin: 3, padding: 4 }}>
            {/* <SearchIcon color="gray" size={20} /> */}
            <TextInput placeholder="Restaurants and cuisines" keyboardType="default"/>
          </View>

          <AdjustmentsVerticalIcon color="#00CCBB"/>
        </View>

      </Text>
    </SafeAreaView>
  )
}

export default HomeScreen