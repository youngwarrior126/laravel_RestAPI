import React from 'react'
import {Navigation, Link} from 'react-router';
import SearchBar from './SearchBar';
import LoginButton from './LoginButton';

var Header = React.createClass({
	mixins: [Navigation],
	componentDidMount: function() {
		this._attachStream();
	},
	_attachStream: function() {
		var _this = this;
	},
	render: function() {
		return (
			<header className="flex-row flex-zero">
          	<Link className='nav-button fa icon-setmine fa-2x click center' to='landing'/>
	          <Link className='nav-button click center flex set-flex' to='user'>
	          	<div className='center'>Home</div>
	          </Link>
	          <Link className='nav-button click flex set-flex' to='featured'>
	          	<div className='center'>Featured</div>
	          </Link>
	          <Link className='nav-button click flex set-flex' to='artists'>
	          	<div className='center'>Artists</div>
	          </Link>
	          <Link className='nav-button click flex set-flex' to='festivals'>
	          	<div className='center'>Festivals</div>
	          </Link>
	          <Link className='nav-button click flex set-flex' to='mixes'>
	          	<div className='center'>Mixes</div>
	          </Link>
	          <Link className='nav-button click flex set-flex' to='activities'>
	          	<div className='center'>Activities</div>
	          </Link>
	          <SearchBar searchInput={this.props.searchInput}/>
	          <LoginButton />
	      </header>
		);
	}
});

module.exports = Header;