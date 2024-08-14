import { Contact, Footer, ResultCard, SwiperMain } from '../components'
import { adobe, design_work_1, design_work_2, design_work_3, figma, GraphicHero, stats1, stats2, stats3, ui } from '../constants'
import { Hero, Programm, StudentWorks, Why } from '../layouts'

const Design = () => {
	const programm = [
		{
			id: 1,
			src: adobe,
			title: 'Adobe Photoshop и Adobe Illustrator',
			description:
				'Наш курс начнется с изучения самих программ и последующего изучения работы с растровой и векторной графикой. Мы научимся делать логотипы, баннеры, каталоги, разрабатывать фирменный стиль для компаний.',
		},
		{
			id: 2,
			src: ui,
			title: 'Python',
			description:
				'Мы изучим основные принципы и подходы фундаментального программирования на языке Python, которые вы сможете в будущем применить во многих сферах IT: от веб-программирования и приложений, до игр и разработки искусственного интеллекта.',
		},
		{
			id: 3,
			src: figma,
			title: 'Django',
			description:
				'Вишенкой на торте будет изучение фреймворка Django, который позволит Вам создавать полноценные и крутые сайты на Python. Вкупе с предыдущими знаниями, мы будем создавать сайты от А до Я с дизайном, логикой и воплощать интересные идеи по разработке.',
		},
	]

	const works = [
		{
			id: 1,
			image: design_work_1,
			title: 'Хайриев Акмаль',
			description: 'Создали брендбук для мебельного магазина',
		},
		{
			id: 2,
			image: design_work_2,
			title: 'Рузиева Азиза',
			description: 'Сделали фирменный стиль с нуля для туристического сайта включая логотип, айдентику и сайт',
		},
		{
			id: 3,
			image: design_work_3,
			title: 'Шарипов Аббос',
			description: 'Мы взяли проект фитнес клуба. С нуля создали айдентику и сайт',
		},
	]

	return (
		<div>
			<Hero heroTitle={'Python Разработка'} heroImg={GraphicHero} />
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
			<Why title={'Зачем учить Графический дизайн'} />
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

export default Design
