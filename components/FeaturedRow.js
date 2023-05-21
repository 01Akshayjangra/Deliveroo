import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import client from '../sanity';

const FeaturedRow = ({ id, title, description }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        client
            .fetch(
                `
            *[_type == "featured" && _id == $id]{
              ...,
              restaurants[]->{
                ...,
                dishes[]->,
                type-> {
                    name
                }
              },
            }[0]
          `, { id }
            )
            .then((data) => {
                setRestaurants(data?.restaurants);
                setIsLoading(false); // Update loading state once data is fetched
            })
            .catch((error) => {
                console.log('Error fetching data:', error);
                setIsLoading(false); // Update loading state in case of an error
            });
    }, []);
    console.log(restaurants)

    if (isLoading) {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Loading...</Text>
            </SafeAreaView>
        );
    }

    return (
        <View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 15, paddingRight: 15, paddingTop: 15 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{title}</Text>
                <ArrowRightIcon color="#00CCBB" />
            </View>
            <Text style={{ fontSize: 10, color: 'gray', paddingLeft: 15, paddingRight: 15 }}>{description}</Text>

            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                showsHorizontalScrollIndicator={false}
                style={{ paddingTop: 15 }}
            >
                {/* RestaurantCard */}
                {console.log(restaurants[0].address)}
                {restaurants.map((restaurant) =>(
                    <RestaurantCard
                        key={restaurant._id}
                        id={restaurant._id}
                        imgUrl={restaurant.image}
                        address={restaurant.address}
                        title={restaurant.name}
                        dishes={restaurant.dishes}
                        rating={restaurant.rating}
                        short_description={restaurant.short_description}
                        genre={restaurant.type?.name}
                        long={restaurant.long}
                        lat={restaurant.lat}
                    />
                ))}

                
            </ScrollView>
        </View>
    )
}

export default FeaturedRow