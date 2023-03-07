import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import pic1 from '../assets/pic1.jpeg'
import pic2 from '../assets/pic2.jpeg'
import pic3 from '../assets/pic3.jpeg'

const Home = () => {
	return (
		<div style={{ height: 600, margin: 30 }}>
			<Swiper
				pagination={{
					type: 'progressbar',
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
				className='mySwiper'
				style={{
					maxWidth: '600px',
					height: '800px',
					display: 'flex',
					alignItems: 'center',
          objectFit: 'cover',
				}}
			>
				<SwiperSlide>
					<img
						src={pic1}
						style={{ height: '100%' }}
						alt='hoodie'
					></img>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={pic2}
						style={{ height: '100%' }}
						alt='hoodie'
					></img>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={pic3}
						style={{ height: '100%' }}
						alt='hoodie'
					></img>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default Home
