import { Contact, Footer, ResultCard, SwiperMain } from '../components'
import { django, htmlCss, python_course, python_work_1, python_work_2, python_work_3, PythonHero, stats1, stats2, stats3 } from '../constants'
import { Hero, Programm, StudentWorks, Why } from '../layouts'

const Python = () => {
	const programm = [
		{
			id: 1,
			src: htmlCss,
			title: 'HTML5 и CSS',
			description:
				'Самое главное, мы научим вас создавать сайты, соответствующие действующим стандартам. Для этого мы вместе с вами изучим технологии HTML и CSS.',
		},
		{
			id: 2,
			src: python_course,
			title: 'Python',
			description:
				'Мы изучим основные принципы и подходы фундаментального программирования на языке Python, которые вы сможете в будущем применить во многих сферах IT: от веб-программирования и приложений, до игр и разработки искусственного интеллекта.',
		},
		{
			id: 3,
			src: django,
			title: 'Django',
			description:
				'Вишенкой на торте будет изучение фреймворка Django, который позволит Вам создавать полноценные и крутые сайты на Python. Вкупе с предыдущими знаниями, мы будем создавать сайты от А до Я с дизайном, логикой и воплощать интересные идеи по разработке.',
		},
	]

	const works = [
		{
			id: 1,
			image: python_work_1,
			title: 'Фаткулин Руслан',
			description: 'Я создал платформу под названием Roader для вызова такси',
		},
		{
			id: 2,
			image: python_work_2,
			title: 'Хан Владлен',
			description: 'Реализовал интернет-магазин для элитного винного производства',
		},
		{
			id: 3,
			image: python_work_3,
			title: 'Усманова Малика',
			description: 'Заказчику нужен был сайт для ресторана японской кухни, легко!',
		},
	]

	return (
		<div>
			<Hero heroTitle={'Python Разработка'} heroImg={PythonHero} />
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
			<Why title={'Зачем учить программирование?'} />
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

export default Python
