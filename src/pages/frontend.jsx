import { Contact, Footer, ResultCard, SwiperMain } from '../components'
import { first_web_site, FrontEndHero, htmlCss, javaScript, reactFront, second_web_site, stats1, stats2, stats3, third_web_page } from '../constants'
import { Hero, Programm, StudentWorks, Why } from '../layouts'

const Frontend = () => {
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
			src: javaScript,
			title: 'JavaScript',
			description:
				'Мы научим вас языку программирования JavaScript с нуля, шаг за шагом. В будущем вы сможете использовать этот язык программирования в различных областях ИТ: от веб-программирования до самых разных игр.',
		},
		{
			id: 3,
			src: reactFront,
			title: 'React',
			description:
				'Еще одна технология - это библиотека React JS. React JS позволяет нам создать идеальный интерфейсный веб-сайт на языке программирования JavaScript.',
		},
	]

	const works = [
		{
			id: 1,
			image: first_web_site,
			title: 'Асланов Камол',
			description: 'Для портфоило, сделал анимацию сайта Lava Beach',
		},
		{
			id: 2,
			image: second_web_site,
			title: 'Асланов Бекзод',
			description: 'Веб-сервис для компании индустриального провайдинга',
		},
		{
			id: 3,
			image: third_web_page,
			title: 'Исмаилов Улугбек',
			description: 'Очень простой и нежный сайт для покупки домашнего декора',
		},
	]

	return (
		<div>
			<Hero heroTitle={'Front End Разработка'} heroImg={FrontEndHero} />
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

export default Frontend
