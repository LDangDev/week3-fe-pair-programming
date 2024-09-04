import { tours } from '../data'
import Title from './Title'
import Tour from './Tour'

function Tours() {
  return (
    <div>
      <section className="section tours" id="tours">
          <Title title='featured' subTitle='tours' />

        <div className="section-center featured-center">
        {tours.map((tour) => {
          return <Tour {...tour} key={tour.id} />
        })}
        </div>
      </section>
    </div>
  );
}

export default Tours;
