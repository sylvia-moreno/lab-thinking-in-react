import React, {Component} from 'react';

class SearchBar extends Component {

    handleChange = (e) => {
        const {name, value} = e.target;
        this.props.updateSearch(value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.props.value} onChange={this.handleChange} />
            </form>
        )
    }
}

export default SearchBar;