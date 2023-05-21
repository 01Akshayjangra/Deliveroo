import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon, MapPinIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native';

const RestaurantCard = ({
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
}) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Restaurant', {
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
                })
            }}

            style={{ backgroundColor: 'white', marginRight: 10, borderRadius: 5, }}>
            <Image
                source={{
                    uri: urlFor(imgUrl).url(),
                }}
                style={{ height: 150, width: 210, }}
            />
            <View style={{ padding: '8px' }}>

                <Text style={{ fontSize: 16, fontWeight: 'bold', padding: 2 }}>{title}</Text>

                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                    <StarIcon color="green" opacity={0.5} size={22} />
                    <Text style={{ color: 'gray', fontSize: 12, marginLeft: 5 }}>
                        <Text style={{ color: 'green' }}>{rating}</Text> . {genre}
                    </Text>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                    <MapPinIcon color="gray" opacity={0.8} size={22} />
                    <Text style={{ color: 'gray', fontSize: 12, marginLeft: 5 }} >Nearby . {address}</Text>
                </View>


            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCard