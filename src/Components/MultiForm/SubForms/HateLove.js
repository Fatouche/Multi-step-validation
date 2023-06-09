import React from 'react'
import './SubForm.css';

export default function HateLove({ modifyIndex }) {

    const [formData, setFormData] = React.useState({
        prefs: {
            love: "",
            hate: ""
        }
    });

    const preventFunc = (e) => {
        e.preventDefault();
        modifyIndex(6, formData);
    }

    return (
        <form className='preferences-form' onSubmit={preventFunc}>
            <p>Parle-nous des aliments que tu préfères et que tu detestes !</p>
            <label htmlFor="prefered">Aliments que tu préfères, séparés par une virgule :</label>
            <textarea id="prefered" placeholder='Un ou plusieurs, si tu en as' onChange={(e) => setFormData({ prefs: { ...formData.prefs, love : e.target.value } })} />
            <label htmlFor="hated">Aliments que tu ne supportes pas, séparés par une virgule :</label>
            <textarea id="hated" placeholder='Un ou plusieurs, si tu en as' onChange={(e) => setFormData({ prefs: { ...formData.prefs, hate : e.target.value } })}  />

            <div className='container-nav-btns'>
                <button type="button" onClick={() => modifyIndex(4)}>Précédent</button>
                <button>Valider</button>
            </div>
        </form>
    )
}
