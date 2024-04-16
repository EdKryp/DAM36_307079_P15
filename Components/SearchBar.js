import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const SearchBar = ({value, onChangeText}) => {
    return(
        <TextInput
            placeholder="Buscar producto..."
            multiline={false}
            value = {value}
            onChangeText={onChangeText}
            style={styles.searchBar}
        />
    )
}

const styles = StyleSheet.create({
    searchBar: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        padding: 10
    }
});

export default SearchBar;