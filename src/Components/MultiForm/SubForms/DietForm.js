import React from 'react';
import './SubForm.css';

export default function DietForm({ modifyIndex }) {

    const [formData, setFormData] = React.useState({
        dietForm: "nodiet"
    });

    const preventFunc = (e) => {
        e.preventDefault();
    }

    const handleRadio = (e) => {
        setFormData({
            dietForm: e.target.value
        })
    }

    return (
        <form className='diet-form' onSubmit={preventFunc}>
            <p>Quelle est ton régime alimentaire ?</p>

            <label htmlFor="nodiet">Pas de régime alimentaire</label>
            <input onChange={handleRadio} type="radio" id="nodiet" name="diet" value="nodiet" />
            <label htmlFor="homnivorous">Homnivore</label>
            <input onChange={handleRadio} type="radio" id="homnivorous" name="diet" value="homnivorous" />
            <label htmlFor="vegetarian">Végétarien</label>
            <input onChange={handleRadio} type="radio" id="vegetarian" name="diet" value="vegetarian" />
            <label htmlFor="vegan">Végan</label>
            <input onChange={handleRadio} type="radio" id="vegan" name="diet" value="vegan" />
            <button onClick={() => modifyIndex(3, formData)}>Valider</button>

        </form>
    )
}
