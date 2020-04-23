import React, {useState} from 'react';
import InfoModal from '../InfoModal/InfoModal';
import { Button } from 'antd';
import { Card } from 'antd';

const {Meta} = Card;



const Recipe = (props) => {

    const [visible, setVisible] = useState(false)

    const showInfoModal = () => {
        setVisible(true)
    }

    const closeInfoModal = () => {
        setVisible(false)
    }

    return (
        <div>
            <Card
                cover={
                    <img style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}} src={props.recipe.img} alt={props.recipe.nombre}/>
                }
                style={{
                    width: '100%',
                    borderRadius: '20px'
                }}
                hoverable>
                <Meta
                    title={props.recipe.nombre}
                    description="APRETAR VER MAS PARA CONOCER LA RECETA"
                />
                <div style={{ float: 'right'}}>
                
                <Button onClick={() => showInfoModal()}>VER</Button>
                </div>
            </Card>
            <div style={{display: 'none'}}>
                <InfoModal visible={visible} onCancel={closeInfoModal} recipe={props.recipe}/>
            </div>
        </div>
    )
}

export default Recipe;