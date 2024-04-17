import { StyleSheet, View } from 'react-native';
import React, {useState} from 'react';
import SearchBar from "./Components/SearchBar";
import ProductsList from "./Components/ProductsList";
import products from "./data";
import { useEffect } from 'react';

useEffect(() => {
    const results = products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(results);
}, [search]);

export default function App() {
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <View style={styles.container}>
      <SearchBar value={search} onChangeText={(text) => setSearch(text)} />
      <ProductsList products={filteredProducts}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});