import React from 'react'
import { Modal, Steps } from 'antd';

const InfoModal = (props) => {

  const { Step } = Steps;
  
  return (
    <Modal
      title={props.recipe.nombre}
      visible={props.visible}
      onCancel={props.onCancel}
    >
      <Steps progressDot current={props.recipe.ingredientes.length} direction="vertical">
        {
          props.recipe.ingredientes.map(ingrediente => (
            <Step title="Agregar" description={ingrediente} key={props.recipe.key}/>
          ))
        }
      </Steps>
    </Modal>
  )
}

export default InfoModal;