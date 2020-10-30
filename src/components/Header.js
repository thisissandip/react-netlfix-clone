import React from 'react';

const Header = (props) => {
	return (
		<>
			<div className='my-header'>
				<div className='header-content'>
					<img
						alt='Movie Name'
						className='movie-title'
						src={require('../imgs/movietitle2.png')}
					/>
					<p className='movie-description'>
						Stephen Hawking, an excellent astrophysics student working on his research,
						learns that he suffers from motor neurone disease and has around two years to
						live.
					</p>
					<div className='button-container'>
						<button className='header-button play'>
							<i className='fa fa-play' aria-hidden='true'></i>
							<span className='button-title'>Play</span>
						</button>
						<button className='header-button info'>
							<i className='fa fa-exclamation-circle'></i>
							<span className='button-title'>More Info</span>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
