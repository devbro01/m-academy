import { Extras } from '../components'
import { extra1, extra2, home_extra } from '../constants'

const Why = ({ title }) => {
	return (
		<div className='extras container'>
			<div className='extras-title text-center'>{title}</div>
			{/* 1 */}
			<Extras
				src={home_extra}
				title={'Работа из дома'}
				desc={
					'В связи с последними событиями, мы все убедились, как необходимы профессии, где есть возможность удаленной работы, как нужны люди, которые могут творить и создавать.'
				}
				reverse={false}
			/>
			{/* 2 */}
			<Extras
				src={extra2}
				title={'Большой спрос'}
				desc={
					'Мир развивается, открываются сервисы доставки, интернет магазины и многое другое. Мы все стоим на пороге великого будущего и IT - главный из его столпов.'
				}
				reverse={true}
			/>
			{/* 3 */}
			<Extras
				src={extra1}
				title={'Навык решения проблем'}
				desc={
					'Когда вы видите проблему, вам нужно разбить ее на рабочие части, а затем взяться за дело. Непрограммисты выбирают такой подход? Редко!'
				}
				reverse={false}
			/>
		</div>
	)
}
export default Why
