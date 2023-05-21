import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import client, { urlFor } from '../sanity';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "category"]`
      )
      .then((data) => {
        setCategories(data);
        setIsLoading(false); // Update loading state once data is fetched
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
        setIsLoading(false); // Update loading state in case of an error
      });
  }, []);
  
  if (isLoading) {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Loading...</Text>
        </SafeAreaView>
    );
}


  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Category cart */}
      {categories.map((category) => (
        <CategoryCard 
        key={category._id}
        imgUrl={urlFor(category.image).width(200).url()} 
        title={category.name} 
        />

      )) }

    </ScrollView>
  )
}

export default Categories