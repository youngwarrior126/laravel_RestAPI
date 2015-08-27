import React from 'react';
import EventTile from './EventTile';

var EventContainer = React.createClass({

	render: function() {
		var data = this.props.data;
		var tiles = data.map(function(set) {
			return(<EventTile data={set} key={set.id}/>)
		});
		return (
			<div className='flex-row flex results events'>
				{tiles}
			</div>
		);
	}

});

module.exports = EventContainer;