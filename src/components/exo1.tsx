
interface Props {
    name: string;
    age: number
}

const Exo1= ({name, age} : Props) => {

    return (
        <>
            <p>Bienvenue {name} sur l'application React!</p>    
            <p>Vous avez {age} ans !</p>        
        </>
    )   
}

export default Exo1;