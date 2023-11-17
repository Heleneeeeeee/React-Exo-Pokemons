import { Link } from "react-router-dom";

const TrainersList = () => {
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

    return(
      <>
    <h2>Liste des dresseurs:</h2>
    <div>
    {trainers.map ((trainer) => { 
        return (
            <Link to={"/trainer/" +trainer.id + "/details"}>
                <>
                    <h3>{trainer.name}</h3>
                    <p>{trainer.bio}</p>
                </>
            </Link>
        );
    })}
    </div>
    </>
    )
}

export default TrainersList;