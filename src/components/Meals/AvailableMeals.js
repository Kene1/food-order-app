import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

import Mogodu from '../../../src/assets/Mogodu.jpg';
import beanmosutlhane from '../../../src/assets/beanmosutlhane.jpg';
import phane from '../../../src/assets/phane.jpg';
import Mosutlhane from '../../../src/assets/Mosutlhane.jpg';


const DUMMY_MEALS = [
    {
      id: 'm1',
      pic: <img src={Mosutlhane} height={150} width={200} alt='mosutlhane' />,
      name: 'Mosutlhane and butternut salad',
      description: 'Modernised traditional sorghum meal mixed with butternut and herbs, with vinaigrette dressing ',
      price: 48.99,
    }, 
    {
      id: 'm2',
      pic: <img src={phane} height={150} width={200}  alt='pap' />,
      name: 'Pap and phane',
      description: 'Pap served with mophane worms in gravy!',
      price: 25.5,
    },
    {
      id: 'm3',
      pic: <img src={Mogodu} height={150} width={200} alt='mogodu' />,
      name: 'Mala and mogodu (Tripe)',
      description: 'Beef intestines in broth',
      price: 32.99,
    },
    {
      id: 'm4',
      pic: <img src={beanmosutlhane} height={150} width={200}  alt='bean' />,
      name: 'Bean and mosutlhane burger',
      description: 'Healthy...Organic...Vegetarian - sorghum burger',
      price: 35.99,
    },
  ];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => (
        <MealItem 
            key={meal.id} 
            id={meal.id} 
            pic={meal.pic}
            name={meal.name} 
            description={meal.description} 
            price={meal.price}
        />
    ));

    return <section className={classes.meals}>
        <Card><ul>{mealsList}</ul>
        </Card>
    </section>
};

export default AvailableMeals;