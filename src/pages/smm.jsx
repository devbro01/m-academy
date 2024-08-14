import { Contact, Footer, ResultCard, SwiperMain } from '../components'
import {
	canva,
	design_work_1,
	design_work_2,
	design_work_3,
	facebook_page,
	figma,
	hands,
	smm1,
	smm2,
	smm3,
	SmmHero,
	stats1,
	stats2,
	stats3,
} from '../constants'
import { Hero, Programm, StudentWorks, Why } from '../layouts'

const Smm = () => {
	const programm = [
		{
			id: 1,
			src: canva,
			title: 'Canva',
			description: 'С помощью Canva вы научитесь создавать дизайн. Вы можете создать свой индивидуальный дизайн для каждого проекта.',
		},
		{
			id: 2,
			src: facebook_page,
			title: 'Ads manager',
			description:
				'Мы узнаем основы копирайтинга, написания постов разной тематики и размеров. Таргетинг - один из важнейших аспектов SMM-индустрии. В ходе курса мы научимся правильно настраивать таргетинг.',
		},
		{
			id: 3,
			src: hands,
			title: 'Работа с килиентами',
			description: 'Клиенты являются источником жизненной силы этого бизнеса. Давайте посмотрим, как с ними заключать выгодные сделки.',
		},
	]

	const works = [
		{
			id: 1,
			image: smm1,
			title: 'Ниёзов Асадбек и Шукурова Рушана',
			description:
				'Создали визуал для крупного торгового центра в Бухаре “Chinar Mall” и продвигали аккаунт. А также с нуля создали страничку самого крупного автосервиса в Бухаре.',
		},
		{
			id: 2,
			image: smm2,
			title: 'Шахзод Абидов',
			description: 'Я работал над архитектурным проектом и нашёл 5 новых крупных заказов для нашей компании с помощью соцсетей',
		},
		{
			id: 3,
			image: smm3,
			title: 'Здесь может быть твой проект.',
			description: '',
		},
	]

	return (
		<div>
			<Hero heroTitle={'Smm - Цифровой маркетинг'} heroImg={SmmHero} />
			<div className='results-container container'>
				<div className='results'>
					{/* #1 */}
					<ResultCard src={stats1} number={2891} title={'Пройденных занятий'} />
					{/* #2 */}
					<ResultCard src={stats2} number={520} title={'Cтудентов на данный момент'} />
					{/* #3 */}
					<ResultCard src={stats3} number={98} title={'Пройденных мастер классов'} />
				</div>
			</div>
			<Why title={'Зачем учить цифровой маркетинг?'} />
			<Programm programm={programm} />
			<StudentWorks works={works} />
			<SwiperMain />
			<div id='contact'>
				<Contact />
			</div>
			<Footer />
		</div>
	)
}

export default Smm
