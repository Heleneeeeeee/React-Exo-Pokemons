import { useParams } from "react-router-dom";
import Header from '../Component/Header';

const TrainerDetails = () => {

    const trainers = [
        {
          id: 1,
          name: "Sasha du Bourg Palette",
          bio: "jveux tous les attraper",
        },
        {
          id: 2,
          name: "Dwayne Johnson",
          bio: "jveux tous les soulever",
        },
        {
          id: 3,
          name: "Affida Turner",
          bio: "je veux décéder",
        },
      ];

    const {trainerId} = useParams();
    const trainerToDisplay = trainers.find((trainer) =>{
        return (
            trainer.id == trainerId
        )
    })
    return(
        <div>
            <Header />
            <main>
                <h1> Détails dresseur: </h1>
                <h2>{trainerToDisplay.name}</h2>
                <p>{trainerToDisplay.bio}</p>
            </main>
        </div>
    )
}

export default TrainerDetails;