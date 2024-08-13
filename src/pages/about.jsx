import Extras from '../components/extras'
import TeacherCard from '../components/teacher-card'
import {extra1, extra2, Odil} from '../constants'
import {Contact, Socials, SwiperMain} from '../components'

const About = () => {
  return (
    <>
      <div className='about-wrapper'>
        <div className='container'>
          <h1 className='about-title'>
            Мы - <span className='text-green'>Monday</span>
          </h1>
          <div className='team mx-auto'></div>
        </div>
        <div className='about-item first-about'>
          <span className='text-green'>Monday Academy</span> - центр современных профессий в Бухаре. Мы выпустили более
          1000 человек по IT
          направлениям.
        </div>
        <div className='about-item second-about'>
          <span className='text-green'>Monday</span> - больше чем академия, это семья. Это сообщество продвинутых, где
          каждый уверен в своем будущем.
        </div>
      </div>
      {/* extras */}
      <div className='extras container'>
        <div className='extras-title text-center'>Наши преимущество</div>
        {/* 1 */}
        <Extras
          src={extra1}
          title={'Процесс урока'}
          desc={
            'Урок ведется с уклоном в практику. После описания темы, мы немедленно приступаем к их использованию. Так наши ученики приобретают опыт.'
          }
          reverse={false}
        />
        {/* 2 */}
        <Extras
          src={extra2}
          title={'Необходимость думать'}
          desc={
            'Мы заставляем думать, оценивать, придумывать, опираясь на знания, которые вы получаете. Так и запоминаются километры "непонятного" кода, который не такой уж и страшный, как кажется.'
          }
          reverse={true}
        />
        {/* 3 */}
        <Extras
          src={extra1}
          title={'Работа в команде'}
          desc={
            'Координировать людей вокруг себя или самому ухватывать лад команды - важнейшая и сложная вещь, которой вы вряд ли научитесь, работая в одиночку. Наша цель показать вам все прелести работы в команде.'
          }
          reverse={false}
        />
        {/* 4 */}
        <Extras
          src={extra2}
          title={'Мастер Классы от ведущих IT специалистов'}
          desc={
            'На них он будет объяснять основы финансовой грамотности, будет вести речь о стартапах, а так же приглашать гостей - реальных бизнесменов.'
          }
          reverse={true}
        />
      </div>

      {/*FIXME: Teachers */}
      <div className='teachers'>
        <h1 className='teachers-title'>Наши учителя</h1>
        <div className='teacher-cards'>
          <TeacherCard
            image={Odil}
            name={'Одилбек Арзиев'}
            job={'Full stack разработчик'}
            desc={
              'Ответственный разработчик с аналитическим складом ума. Имеет большой опыт в разработке международных и государственных проектов. Эффективно презентует свои идеи и отлично выступает перед большой аудиторией.'
            }
            teleg={'https://telegram.org'}
            insta={'https://instagram.org'}
          />
          <TeacherCard
            image={Odil}
            name={'Одилбек Арзиев'}
            job={'Full stack разработчик'}
            desc={
              'Ответственный разработчик с аналитическим складом ума. Имеет большой опыт в разработке международных и государственных проектов. Эффективно презентует свои идеи и отлично выступает перед большой аудиторией.'
            }
            teleg={'https://telegram.org'}
            insta={'https://instagram.org'}
          />
          <TeacherCard
            image={Odil}
            name={'Одилбек Арзиев'}
            job={'Full stack разработчик'}
            desc={
              'Ответственный разработчик с аналитическим складом ума. Имеет большой опыт в разработке международных и государственных проектов. Эффективно презентует свои идеи и отлично выступает перед большой аудиторией.'
            }
            teleg={'https://telegram.org'}
            insta={'https://instagram.org'}
          />
          <TeacherCard
            image={Odil}
            name={'Одилбек Арзиев'}
            job={'Full stack разработчик'}
            desc={
              'Ответственный разработчик с аналитическим складом ума. Имеет большой опыт в разработке международных и государственных проектов. Эффективно презентует свои идеи и отлично выступает перед большой аудиторией.'
            }
            teleg={'https://telegram.org'}
            insta={'https://instagram.org'}
          />
          <TeacherCard
            image={Odil}
            name={'Одилбек Арзиев'}
            job={'Full stack разработчик'}
            desc={
              'Ответственный разработчик с аналитическим складом ума. Имеет большой опыт в разработке международных и государственных проектов. Эффективно презентует свои идеи и отлично выступает перед большой аудиторией.'
            }
            teleg={'https://telegram.org'}
            insta={'https://instagram.org'}
          />
          <TeacherCard
            image={Odil}
            name={'Одилбек Арзиев'}
            job={'Full stack разработчик'}
            desc={
              'Ответственный разработчик с аналитическим складом ума. Имеет большой опыт в разработке международных и государственных проектов. Эффективно презентует свои идеи и отлично выступает перед большой аудиторией.'
            }
            teleg={'https://telegram.org'}
            insta={'https://instagram.org'}
          />
          <TeacherCard
            image={Odil}
            name={'Одилбек Арзиев'}
            job={'Full stack разработчик'}
            desc={
              'Ответственный разработчик с аналитическим складом ума. Имеет большой опыт в разработке международных и государственных проектов. Эффективно презентует свои идеи и отлично выступает перед большой аудиторией.'
            }
            teleg={'https://telegram.org'}
            insta={'https://instagram.org'}
          />
          <TeacherCard
            image={Odil}
            name={'Одилбек Арзиев'}
            job={'Full stack разработчик'}
            desc={
              'Ответственный разработчик с аналитическим складом ума. Имеет большой опыт в разработке международных и государственных проектов. Эффективно презентует свои идеи и отлично выступает перед большой аудиторией.'
            }
            teleg={'https://telegram.org'}
            insta={'https://instagram.org'}
          />
          <TeacherCard
            image={Odil}
            name={'Одилбек Арзиев'}
            job={'Full stack разработчик'}
            desc={
              'Ответственный разработчик с аналитическим складом ума. Имеет большой опыт в разработке международных и государственных проектов. Эффективно презентует свои идеи и отлично выступает перед большой аудиторией.'
            }
            teleg={'https://telegram.org'}
            insta={'https://instagram.org'}
          />
          <TeacherCard
            image={Odil}
            name={'Одилбек Арзиев'}
            job={'Full stack разработчик'}
            desc={
              'Ответственный разработчик с аналитическим складом ума. Имеет большой опыт в разработке международных и государственных проектов. Эффективно презентует свои идеи и отлично выступает перед большой аудиторией.'
            }
            teleg={'https://telegram.org'}
            insta={'https://instagram.org'}
          />
          <TeacherCard
            image={Odil}
            name={'Одилбек Арзиев'}
            job={'Full stack разработчик'}
            desc={
              'Ответственный разработчик с аналитическим складом ума. Имеет большой опыт в разработке международных и государственных проектов. Эффективно презентует свои идеи и отлично выступает перед большой аудиторией.'
            }
            teleg={'https://telegram.org'}
            insta={'https://instagram.org'}
          />
          <TeacherCard
            image={Odil}
            name={'Одилбек Арзиев'}
            job={'Full stack разработчик'}
            desc={
              'Ответственный разработчик с аналитическим складом ума. Имеет большой опыт в разработке международных и государственных проектов. Эффективно презентует свои идеи и отлично выступает перед большой аудиторией.'
            }
            teleg={'https://telegram.org'}
            insta={'https://instagram.org'}
          />
        </div>
      </div>
      {/* Swipper */}
      <SwiperMain/>

      {/* Contact Us */}
      <Contact/>

      {/* Footer */}
      <div className='footer'>
        <h2 className='footer-brand'>OOO "Monday Labs"</h2>
        <Socials/>
      </div>
    </>
  )
}
export default About
