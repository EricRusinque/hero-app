import { Navigate, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";
import './_hero-screen.scss'
export const HeroScreen = () => {

    const { heroId } = useParams();

    const hero = getHeroById(heroId);

    const { alter_ego, superhero, characters, publisher, first_appearance } = hero;

    if (!hero) {
        return <Navigate to="/" />
    }

    const imagePath = `/assets/${hero.id}.jpg`
    return (
        <div>
            <div className="hero-screen">

                <img src={imagePath} alt={hero.superhero}/>
                <ul className="hero-details">
                    <li className="cute-bit publisher-hero-screen grow-left">
                        <h2>
                            Publisher

                        </h2>
                        <p>
                            {publisher}

                        </p>
                    </li>
                    <li className="cute-bit superhero-hero-screen grow-right">
                        <h2>
                            Superhero
                        </h2>
                        <p>
                            { superhero }
                        </p>
                    </li>
                    <li className="cute-bit alter-ego-hero-screen grow-left">
                        <h2>
                            Alter Ego
                        </h2>
                        <p>
                            {alter_ego}
                        </p>
                    </li>
                    <li className="cute-bit character-hero-screen grow-right">
                        <h2>
                            Characters
                        </h2>
                        <p>
                            {characters}
                        </p>
                    </li>
                    <li className="cute-bit first-appearance grow-left">
                        <h2>
                        First Appearance
                        </h2>
                        <p>
                            {first_appearance}
                        </p>
                    </li>

                </ul>

            </div>
        </div>
    )
};
