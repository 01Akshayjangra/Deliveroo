import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import client from '../sanity';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    client
      .fetch(
        `
        *[_type == "featured"]{
          ...,
          restaurants[]->{
            ...,
            dishes[]->
          }
        }
      `
      )
      .then((data) => {
        setFeaturedCategories(data);
        setIsLoading(false); // Update loading state once data is fetched
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
        setIsLoading(false); // Update loading state in case of an error
      });
  }, []);

  console.log(featuredCategories)
  if (isLoading) {
    // Display loading state or placeholder content while data is being fetched
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      {/* Header */}
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 14, }}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1684093024940-7847c7af3faa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' }}
          style={{ width: 50, height: 50, backgroundColor: 'gray', borderRadius: 50, marginRight: 10 }}
        // className="h-7 w-7 bg-gray-300"
        />
        <View style={{ flex: 1 }}>

          <Text style={{ fontWeight: 'bold', color: 'gray', fontSize: 12 }} >Deliver Now!</Text>
          <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 19, display: 'flex', alignItems: 'center' }} >Current Location
            <ChevronDownIcon size={20} color="#00CCBB" style={{ marginLeft: 4 }} />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: 14, paddingRight: 14 }}>
        <View style={{ display: 'flex', flexDirection: 'row', flex: 1, background: '#eeeeee', margin: 3, padding: 10 }}>
          <MagnifyingGlassIcon size={16} color="gray" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
            placeholderTextColor="gray"
            style={{ outline: 'none', marginLeft: 10 }}
          />
        </View>

        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      {/* Body */}
      <ScrollView contentContainerStyle={{}} style={{ background: '#eeeeee', }}>
        {/* Category */}
        <Categories />

        {featuredCategories.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen