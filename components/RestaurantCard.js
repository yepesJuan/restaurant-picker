import React from 'react';
import { Image, Text, View } from 'react-native'
import styles from '../styles'

export default function RestaurantCard({ rest }) {
    return(
        <View style={styles.card}>
            <Image source={{ uri: rest.photoUrl }} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{rest.name}</Text>
            <Text style={styles.cardSubtitle}>{rest.address}</Text>
            <Text>{rest.rating}</Text>
         </View>

        
    )
}