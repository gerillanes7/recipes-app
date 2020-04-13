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
      <Steps progressDot current={5} direction="vertical">
        <Step title="Finished" description="This is a description. This is a description." />
        <Step title="Finished" description="This is a description. This is a description." />
        <Step title="In Progress" description="This is a description. This is a description." />
        <Step title="Waiting" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>
    </Modal>
  )
}

export default InfoModal;