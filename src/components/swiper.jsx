import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

const SwiperMain = ({ title }) => {
	return (
		<>
			<div className='swipper_wrapper'>
				<div className='container'>
					<div className='slider-title mt-2'>Что говорят о нас наши выпускники?</div>
					<p className='slider-desc'>Больше ста студентов доверились нам</p>
					{/*TODO: swiper */}
					<Swiper
						autoplay={{
							delay: 2500,
							disableOnInteraction: true,
						}}
						navigation={true}
						modules={[Autoplay, Pagination, Navigation]}
						className='main-swapper text-center'
					>
						<SwiperSlide>
							<div className='swipper-content'>
								<div className='swipper-content-title'>Негматиллаева Зебинисо</div>
								<div className='swipper-content-desc'>
									“Придя на курс графического дизайна, я мало что понимала о значениях действительно красивого, но обучившись Photoshop, Illustrator и
									Figma я научилась тому о чем и мечтать не могла, стала по другому смотреть на бренды и логотипы. Усвоив профессии будущего и став Ux
									UI дизайнером, я поняла чем хочу заниматься в дальнейшем.”
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='swipper-content'>
								<div className='swipper-content-title'>Негматиллаева Зебинисо</div>
								<div className='swipper-content-desc'>
									“Придя на курс графического дизайна, я мало что понимала о значениях действительно красивого, но обучившись Photoshop, Illustrator и
									Figma я научилась тому о чем и мечтать не могла, стала по другому смотреть на бренды и логотипы. Усвоив профессии будущего и став Ux
									UI дизайнером, я поняла чем хочу заниматься в дальнейшем.”
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='swipper-content'>
								<div className='swipper-content-title'>Негматиллаева Зебинисо</div>
								<div className='swipper-content-desc'>
									“Придя на курс графического дизайна, я мало что понимала о значениях действительно красивого, но обучившись Photoshop, Illustrator и
									Figma я научилась тому о чем и мечтать не могла, стала по другому смотреть на бренды и логотипы. Усвоив профессии будущего и став Ux
									UI дизайнером, я поняла чем хочу заниматься в дальнейшем.”
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</>
	)
}
export default SwiperMain
