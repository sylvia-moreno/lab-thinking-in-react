import React, {Component, Fragment} from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
    state = {
        products: this.props.products.data,
        value: '',
        available: null,
        checkboxChecked: false,
    }
    
    updateSearch = (value) => {
        this.setState({value: value});
        const filterProducts = [...this.state.products].find(product => product.name.toLowerCase() === value.toLowerCase());
        if(!!filterProducts) {
            this.setState({products: [filterProducts]})
        } else {
            this.setState({products: this.state.products});
        }
    }

    checkStockAvailability = (e) => {
        const isChecked = e.target.checked;
        if(!!isChecked) {
        this.setState({available: isChecked});
            const filterStock = [...this.state.products].find(product => product.stocked === true);
            this.setState({products: [filterStock]})
        }
    }

    render() { 
        return(
            <Fragment>
                <SearchBar updateSearch={this.updateSearch} value={this.state.value} />
                <label for="checkbox">Only products available</label>
                <input type="checkbox" name="checkbox" onChange={this.checkStockAvailability} />
                <ProductTable products={this.state.products} />
            </Fragment>
        )
    }
}

export default FilterableProductTable;