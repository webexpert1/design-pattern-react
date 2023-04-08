
import styled from 'styled-components';
import  { useState } from 'react';

const ModalContainer = styled.div`
    background: rgba(0, 0, 0, 0.5);
    position:fixed;
    z-index: 1;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
`

const ModalBody = styled.div`
   background-color: white;
   margin: 10% auto;
   padding: 20px;
   width: 50%;
`
 
export const ControlledModal = ({ shouldShow, onRequestClose, children }) => {
    console.log('children', children)
    return shouldShow ? (
            <ModalContainer onClick={onRequestClose}>
                <ModalBody onClick={(event) => event.stopPropagation()}>
                    <button onClick={onRequestClose}>
                        Hide Modal
                    </button>
                    <div>
                        {children}
                    </div>
                </ModalBody>
            </ModalContainer>
      ) : null;
}