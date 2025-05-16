import { useState } from "react";
import Modal from './Modal.js'
import Button from '@mui/material/Button';

function SetModal() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Button size='big' variant="contained" onClick={() => setIsOpen(true)}>Открыть модалку</Button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <h2>Подтверждение</h2>
                <p>Вы уверены, что хотите удалить элемент?</p>
                <Button size='small' variant="text" color="success" onClick={() => setIsOpen(false)}>Отмена</Button>
                <Button size='small' variant="text" color="error" onClick={() => { /* логика удаления */ }}>Удалить</Button>
            </Modal>
        </div>
    );
}

export default SetModal;