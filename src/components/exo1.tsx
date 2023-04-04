import PropTypes from "prop-types"
import style from "./exo1.module.css"

interface Props {
    name: string;
    age: number
}

const Exo1= ({name, age} : Props) => {

    return (
        <>
            <p className={style.name}>Bienvenue {name} sur l'application React!</p>    
            <p className={style.age}>Vous avez {age} ans !</p>        
        </>
    )   
}

Exo1.defaultProps= {
    name: "Younes",
    age: 26
}

Exo1.propTypes= {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}

export default Exo1;