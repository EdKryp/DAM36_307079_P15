import React from 'react';
import {FlatList, StyleSheet} from "react-native";
import ProductsItems from "./ProductsItems";

const ProductsList = ({products}) => {
    return(
        <FlatList
            data={products}
            keyExtractor={
            product => product.id.toString()
            }
            renderItem={({item})=>{
                <ProductsItems product={item}/>
            }}
        />
    );
}

const styles = StyleSheet.create({
    flatList: {
        backgroundColor: 'grey'
    }
});

export default ProductsList;