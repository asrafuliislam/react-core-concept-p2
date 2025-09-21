import { useState } from "react"

export default function Batsman() {

    const [runs, setRuns] = useState(0);
    const [singles, setSingles] = useState(0);
    const [fours, setFours] = useState(0);
    const [sixes, setSixes] = useState(0);

    const handleSingle = () => {
        const updateRuns = runs + 1;
        const updatedSingles = singles + 1;
        setSingles(updatedSingles)
        setRuns(updateRuns);
    }

    const handleFour = () => {
        const updatedRuns = runs + 4;
        const updatedFours = fours + 1;
        setFours(updatedFours);
        setRuns(updatedRuns);
    }
    const handleSix = () => {
        const updatedRuns = runs + 6;
        const updatedSixes = sixes + 1;
        setSixes(updatedSixes)
        setRuns(updatedRuns);
    }

    return (
        <div>
            <h3>Player : Bangladeshi </h3>
            <p> <small> Single: {singles}</small></p>
            <p> <small> Four: {fours}</small></p>
            <p> <small> Six: {sixes}</small></p>

            {runs >= 50 && <p>🎉 OHH !!!! you get Half century 🎉</p>}
            {runs >= 100 && <p>🔥 Century!!! What a knock!</p>}
            <h1>Score :  {runs}</h1>
            <button onClick={handleSingle}> Singles Runs</button>
            <button onClick={handleFour}>Four Runs</button>
            <button onClick={handleSix}>Six Runs</button>
        </div>
    )
}