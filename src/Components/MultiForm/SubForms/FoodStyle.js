import React from 'react'
import './SubForm.css';

export default function FoodStyle({ modifyIndex }) {

    const allCheckBoxes = React.useRef([]);

    const addCheckBox = (el) => {
        if (el && !allCheckBoxes.current.includes(el)) {
            allCheckBoxes.current.push(el);
        }
    }

    const preventFunc = (e) => {
        e.preventDefault();

        const styleData = {
            foodStyle: []
        }

        allCheckBoxes.current.forEach(el => {
            if (el.checked) {
                styleData.foodStyle.push(el.value);
            }
        })

        modifyIndex(4, styleData);
    }

    return (
        <form className='checkbox-form' onSubmit={preventFunc}>
            <p>Quelles sont tes cuisines préférées ?</p>
            <span>Choix multiples.</span>

            <label htmlFor="italian">Italienne</label>
            <input ref={addCheckBox} type="checkbox" id="italian" value="italian" />

            <label htmlFor="Japanese">Japonaise</label>
            <input ref={addCheckBox} type="checkbox" id="Japanese" value="Japanese" />

            <label htmlFor="indian">Indien</label>
            <input ref={addCheckBox} type="checkbox" id="indian" value="indian" />

            <label htmlFor="Thai">Thailandaise</label>
            <input ref={addCheckBox} type="checkbox" id="Thai" value="Thai" />

            <label htmlFor="french">Française</label>
            <input ref={addCheckBox} type="checkbox" id="french" value="french" />

            <label htmlFor="chinese">Chinoise</label>
            <input ref={addCheckBox} type="checkbox" id="chinese" value="chinese" />

            <div className='container-nav-btns'>
                <button type="button" onClick={() => modifyIndex(2)}>Précédent</button>
                <button>Valider</button>
            </div>
        </form>
    )
}
