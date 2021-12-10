import React, { useRef } from 'react'
import { Modal } from 'react-responsive-modal';
import './video.css'

function Video({ isOpen, setOpen, url }) {
    const video = useRef(null);

    return (
        <Modal 
            container={video.current}
            open={isOpen} onClose={() => setOpen(false)} center classNames={{
            overlay: 'customOverlay',
            modal: 'customModal',
          }}>
            <video width="750" height="500" controls >
                <source src={url} type="video/mp4"/>
            </video>
        </Modal>
    )
}

export default Video
