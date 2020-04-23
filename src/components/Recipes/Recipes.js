import React, { useGlobal } from 'reactn';
import Recipe from './Recipe';
import { Row, Col } from 'antd';

const Recipes = (props) => {

    const [recipes] = useGlobal("recipes");


    return (
            <Row gutter={[8, 8]}>
            {
                    recipes.map(recipe => (
                        <Col span={6} key={recipe.key}>
                            <Recipe recipe={recipe} />
                        </Col>
                    ))
                }
            </Row>
    )
}

export default Recipes;