import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native';
import { urlFor } from '../sanity';
import { ArrowLeftIcon, ChevronRightIcon, StarIcon, MapPinIcon, QuestionMarkCircleIcon, ChevronDoubleDownIcon } from 'react-native-heroicons/outline';
import DishRow from '../components/DishRow';

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat
    }
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <ScrollView>
      <View style={{ position: 'relative' }}>
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          style={{ height: 300, width: '100%', backgroundColor: 'gray' }}
        />
        <TouchableOpacity onPress={navigation.goBack} style={{
          position: 'absolute', top: 20, left: 20, padding: 6, backgroundColor
            : '#eeeeee', borderRadius: 50
        }}>
          <ArrowLeftIcon size={30} fontWeight={'bold'} color="#00CCBB" />
        </TouchableOpacity>
      </View>

      <View style={{ backgroundColor: 'white' }}>
        <View style={{ padding: 15, }}>
          <Text style={{ fontWeight: 'bold', fontSize: 23, marginBottom: 10 }}>{title}</Text>
          <View style={{ display: 'flex', flexDirection: 'row', margin: '12px 0' }}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <StarIcon color='green' opacity={0.5} size={24} />
              <Text style={{ color: 'gray', fontSize: 15, marginLeft: 6 }}>
                <Text style={{ color: 'green' }}>{rating}</Text> . {genre}
              </Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 15 }}>
              <MapPinIcon color="gray" opacity={0.8} size={22} />
              <Text style={{ color: 'gray', fontSize: 12, marginLeft: 5 }} >Nearby . {address}</Text>
            </View>
          </View>
          <Text style={{ color: 'gray', padding: 6 }}>{short_description}</Text>
        </View>


        <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 3, borderTop: '1px solid #eeeeee', borderBottom: '1px solid #eeeeee', padding: 12 }}>
          <QuestionMarkCircleIcon color='gray' opacity={0.6} size={20} />
          <Text style={{ flex: 1, fontWeight: 'bold', padding: 2, marginLeft: 5 }}>Have a food allergy?</Text>
          <ChevronRightIcon color='#00CCBB' />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={{paddingTop: 10, paddingBottom: 7 }}>Menu</Text>
        {dishes.map((dish)=>(
          <DishRow
          key={dish._id}
          id={dish._id}
          name={dish.name}
          description={dish.short_description}
          price={dish.price}
          image={dish.image}
          />
        ))}
      </View>


    </ScrollView>
  )
}

export default RestaurantScreen