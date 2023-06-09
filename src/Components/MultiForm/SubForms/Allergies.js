import React from 'react'
import './SubForm.css';

export default function Allergies({ modifyIndex }) {

    const allCheckBoxes = React.useRef([]);

    const addCheckBox = (el) => {
        if (el && !allCheckBoxes.current.includes(el)) {
            allCheckBoxes.current.push(el);
        }
    }

    const preventFunc = (e) => {
        e.preventDefault();

        const styleData = {
            allergies: []
        }

        allCheckBoxes.current.forEach(el => {
            if (el.checked) {
                styleData.allergies.push(el.value);
            }
        })

        modifyIndex(5, styleData);
    }

    return (
        <form className='checkbox-form' onSubmit={preventFunc}>
            <p>As-tu des allergies ?</p>
            <span>Choix multiples.</span>

            <label htmlFor="milk">Lait</label>
            <input ref={addCheckBox} type="checkbox" id="milk" value="milk" />

            <label htmlFor="pollen">Pollen</label>
            <input ref={addCheckBox} type="checkbox" id="pollen" value="pollen" />

            <label htmlFor="nuts">Noix</label>
            <input ref={addCheckBox} type="checkbox" id="nuts" value="nuts" />

            <label htmlFor="eggs">Oeuf</label>
            <input ref={addCheckBox} type="checkbox" id="eggs" value="eggs" />

            <label htmlFor="shellfish">fruits de mer</label>
            <input ref={addCheckBox} type="checkbox" id="shellfish" value="shellfish" />

            <div className='container-nav-btns'>
                <button type="button" onClick={() => modifyIndex(3)}>Précédent</button>
                <button>Valider</button>
            </div>
        </form>
    )
}
