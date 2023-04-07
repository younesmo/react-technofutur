import { useState } from "react";

const Exo3 = ()=> {
    const [nb1, setNb1] = useState<number>(0);
    const [nb2, setNb2] = useState<number>(0);
    const [operator, setOperator] = useState<string>("+");
    const [result, setResult]= useState<number>(0);

    const handleClick= () => {
        switch(operator){
            case "+":
                setResult(nb1 + nb2);
                break;
            case "-":
                setResult(nb1 - nb2);
                break;
            case "/":
                setResult(nb1 / nb2);
                break;
            case "*":
                setResult(nb1 * nb2);
                break;
        }
    }

    return (
        <form>
            <label htmlFor="nb1">Nb1
                <input id="nb1" type="number" name="nb1" value={nb1} onChange={e=> setNb1(parseInt(e.target.value))} />
            </label> {" "}

            <label htmlFor="operation">Operation
                <select id="operation" name="operator" value={operator} onChange={e => setOperator(e.target.value)}>
                    <option selected value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
            </label> {" "}

            <label htmlFor="nb2">Nb2
                <input id="nb2" type="number" name="nb2" value={nb2} onChange={e=> setNb2(parseInt(e.target.value))} />
            </label> {" "}

            <button type="button" onClick={handleClick}>Calculer</button> {" "}
            <input value={result} readOnly/>
        </form>
    )
}

export default Exo3;
