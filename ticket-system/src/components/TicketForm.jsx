import { useState } from "react"


export default function TicketForm() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState(1);

    const priorityLevels = {
        1: "Low",
        2: "Medium",
        3: "High"
    }

        const clearForm = () => {
            setTitle('');
            setDescription('');
            setPriority(1);
        }

        function handleSubmit(e) {
            e.preventDefault();
            clearForm();
        }

    return (
        <form onSubmit={handleSubmit} className="ticket-form">
            <div>
                <label>Title</label>
                <input type="text" className="form-input" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Description</label>
                <textarea type="text" className="form-input" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
        </form>
    )
}