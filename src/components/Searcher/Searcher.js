import React, { useState, useGlobal } from 'reactn';
import { Button, Input, Tag, message } from 'antd';
import Recipes from '../Recipes/Recipes';
import data from '../data/data.json';


const Searcher = () => {

    const ingredientInput = React.createRef();

    const [showIngredient, setShowIngredient] = useState(false);
    const [ingredient, setIngredient] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [recipes, setRecipes] = useGlobal("recipes");


    const addIngredient = () => {
        if (ingredient.length === 0) {
            message.info('Ingrese al menos un ingrediente por favor')
        } else if (ingredient.length < 3) {
            message.info('Ingrese un ingrediente valido por favor')
        } else {
            setIngredients(ingredients => [...ingredients, ingredient])
            setShowIngredient(true)
        }
    }

    const showRecipes = () => {
        const recipes = data.filter(function (recipe) {
            return ingredients.every(function (ingredientSearch) {
                return recipe.tags.includes(ingredientSearch);
            });
        });
        setRecipes(recipes); 
    }

    //crear funcion borrar item
    const deleteTag = ingredientToRemove => {
        const newIngredients = ingredients.filter(ingredient => ingredient !== ingredientToRemove);
        setIngredients(newIngredients)
        console.log(ingredients)
    }
    
    return (
        <div>
            <Input placeholder="Ingrediente" style={{ width: '500px', marginRight: '5px' }} onChange={(e) => setIngredient(e.target.value)} ref={ingredientInput} allowClear={true}/>
            <Button type="primary" onClick={() => addIngredient()} shape="round">Agregar ingrediente</Button>
            <div style={{ paddingTop: '10px' }}>
                {
                    ingredients.map((ingredient) => (
                        <Tag
                            closable
                            visible={showIngredient}
                            key={ingredient}
                            onClose= {() => deleteTag(ingredient)}
                            color="#2db7f5"
                        >
                            {ingredient}
                        </Tag>
                    ))
                }
            </div>
            <div style={{ marginTop: '6px' }}>
                {showIngredient === true ? <Button type="primary" onClick={() => showRecipes()} shape="round">Buscar Recetas</Button> : <p></p>}
            </div>
            <div style={{ display: 'none' }}>
                <Recipes recipes={recipes} />
            </div>
        </div>
    )
}

export default Searcher;