import React from 'react';

var Setmusic = React.createClass({

	render: function() {
		return (
		<div id='Setmusic'>
			<section id='landing-page' className='flex-column'>
				<h1>SETMUSIC</h1>
				<h2>Connecting Artists to Fans</h2>
			</section>

			<section id='company-purpose' className='flex-column'>
				<div className='text flex-column'>
					<div className='center'>Retailers need foot traffic...</div>
					<div className='center'>...Artists need to reach fans</div>
				</div>
			</section>

			<section id='solution'>
				<div className='image-container flex-fixed'>
					<img src='/public/images/setmusic/beacons-music.png'/>
				</div>
				<aside className='flex-fixed'>
					<div className='flex-fixed flex-row'>
						<i className='fa fa-fw fa-users'/>
						<div>We identify fans at live events</div>
					</div>
					<div className='flex-fixed flex-row'>
						<i className='fa fa-fw fa-unlock-alt'/>
						<div>And lead them to retailers with music</div>
					</div>
				</aside>
			</section>

			<section id='products'>
				<div className='overview'>
					<h1>Products</h1>
				</div>
				<div className='setmine product flex-row'>
					<div className='image-container flex-fixed'>
						<img className='center' src='/public/images/setmusic/setmine-screen.png'/>
					</div>
					<aside className='flex-fixed flex-column'>
						<div className='flex-4x flex-column'>
							<h1>Setmine</h1>
							<img className='icon' src='/public/images/setmusic/setmine_navyblue.png'/>
						</div>
						<p className='flex-3x flex-column'>
							Hear live sets
							<br/>
							<br/>
							Unlock exclusive content
							<br/>
							<br/>
							Discover new events
						</p>
					</aside>
				</div>
				<div className='setstory product flex-row'>
					<aside className='flex-fixed flex-column'>
						<div className='flex-4x flex-column'>
							<h1>Setstory</h1>
							<img className='icon' src='/public/images/setmusic/setstory_navyblue.png'/>
						</div>
						<p className='flex-3x flex-column'>
							Analyze foot traffic
							<br/>
							<br/>
							Accept artist offers
							<br/>
							<br/>
							Pay per unlock
						</p>
					</aside>
					<div className='image-container flex-fixed'>
						<img className='center' src='/public/images/setmusic/setstory-screen.png'/>
					</div>
				</div>
				<div className='setrecords product flex-column'>
					<h1>Setrecords</h1>
					<img className='icon' src='/public/images/setmusic/setrecords_navyblue.png'/>
					<p>
						Release content
						<br/>
						<br/>
						View metrics
						<br/>
						<br/>
						Collect revenue
					</p>
				</div>
			</section>

			<div className='heading gray flex-column'>
				<h1>Business model</h1>
				<h3>Distributing music & driving foot traffic to retailers</h3>
			</div>

			<section id='model'>
				<div className='flex-column'>
					<h6>1</h6>
					<img src='/public/images/setmusic/model-setrecords.png'/>
					<p>Artist locks exclusive music to a beacon at a venue</p>
				</div>
				<div className='flex-column'>
					<h6>2</h6>
					<img src='/public/images/setmusic/model-setmine.png'/>
					<p>Users discover upcoming events & offers</p>
				</div>
				<div className='flex-column'>
					<h6>3</h6>
					<img src='/public/images/setmusic/model-user.png'/>
					<p> Users travel to venue & unlock content</p>
				</div>
				<div className='flex-column'>
					<h6>4</h6>
					<img src='/public/images/setmusic/model-setstory.png'/>
					<p>Venue pays per content unlock</p>
				</div>
			</section>

			<div className='heading gray'>
				<h1>Why Now?</h1>
			</div>

			<section id='why' className='flex-row'>
				<div className='circle bg left'>
					<i className='fa fa-fw center fa-apple'/>
				</div>
				<div className='circle main'>
					<div className='center'>The music war has begun. Everyone needs a competitive advantage.</div>
				</div>
				<div className='circle bg right'>
					<i className='fa fa-fw center fa-spotify'/>
				</div>
			</section>

			<section id='advantages' className='flex-column'>
				<p>Music platforms have evolved, yet the way we pay for music hasn't.</p>
				<p>Beacons are gaining traction across multiple industries. We bring people to beacons.</p>
			</section>

			<div className='heading white'>
				<h1>Technology generates new revenue models</h1>
			</div>

			<section id='tech-changes' className='flex-row'>
				<div className='flex-column'>
					<img className='center' src='/public/images/setmusic/vinyl.png'/>
					<p>
						1960<br/>VINYL
					</p>
				</div>
				<div className='flex-column'>
					<img className='center' src='/public/images/setmusic/cd.png'/>
					<p>
						1980<br/>CD
					</p>
				</div>
				<div className='flex-column'>
					<img className='center' src='/public/images/setmusic/streaming.png'/>
					<p>
						2000<br/>STREAMING
					</p>
				</div>
				<div className='flex-column'>
					<img className='center' src='/public/images/setmusic/beacon.png'/>
					<p>
						2020<br/>BEACONS
					</p>
				</div>
			</section>

			<section id='platforms'>
				<div className='heading flex-column blue'>
					<h1>Our Goal</h1>
					<h3>Unlock on all music streaming platforms</h3>
				</div>
				<div className='background'></div>
			</section>

			<div className='heading white'>
				<h1>The Team</h1>
			</div>

			<section id='team' className='flex-row'>
				<div className='member flex-column'>
					<h1>Jesus Najera</h1>
					<img src='/public/images/setmusic/profileJesus.jpg'/>
					<p>
						Founder & CEO<br/>
						UF. JP Morgan
					</p>
				</div>
				<div className='member flex-column'>
					<h1>Oscar Lafarga</h1>
					<img src='/public/images/setmusic/profileOscar.jpg'/>
					<p>
						Founder & CTO<br/>
						USC. Motorolla
					</p>
				</div>
				<div className='member flex-column'>
					<h1>Conner Fromknecht</h1>
					<img src='/public/images/setmusic/profileConner.jpg'/>
					<p>
						Security & Mobile<br/>
						MIT. Box
					</p>
				</div>
				<div className='member flex-column'>
					<h1>Evan Martinez</h1>
					<img src='/public/images/setmusic/profileEvan.jpg'/>
					<p>
						VP of Product Dev<br/>
						MIT. nToggle
					</p>
				</div>
			</section>
			<div className='footer'>
				<div className='flex-fixed hidden'>
					<h4 classNam='flex-row'>
						<i className='fa fa-heart-o'/>
						<span>WHAT WE DO</span>
					</h4>
					<p>
						We're here to revolutionize the way you listen to music, making the world a better place through scalable location based distributed data driven cloud computing.
					</p>
				</div>
				<div className='flex-fixed hidden'>
					<h4 classNam='flex-row'>
						<i className='fa fa-envelope-o'/>
						<span>CONTACT</span>
					</h4>
					<h4>jesus@setmine.com</h4>
					<h3>
						<i className='fa fa-copyright'/>
						<span>Setmusic LLC. 2015</span>
					</h3>
				</div>
				<div className='center'>
					<h4 className='flex-row'>
						<i className='fa fa-share-alt'/>
						<span>CONNECT WITH US</span>
					</h4>
					<ul>
						<li>
							<a className='fa fa-fw fa-envelope-o'></a>
							<span>jesus@setmine.com</span>
						</li>
						<li>
							<a href='https://www.facebook.com/SetmineApp' className='fa fa-fw fa-facebook-square'></a>
							<span>Facebook</span>
						</li>
						<li>
							<a href='https://twitter.com/setmineapp' className='fa fa-fw fa-twitter-square'></a>
							<span>Twitter</span>
						</li>
						<li>
							<a href='https://instagram.com/setmine/' className='fa fa-fw fa-instagram'></a>
							<span>Instagram</span>
						</li>
						<li>
							<a href='http://setmine.tumblr.com/' className='fa fa-fw fa-tumblr-square'></a>
							<span>Tumblr</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
		);
	}

});

module.exports = Setmusic;