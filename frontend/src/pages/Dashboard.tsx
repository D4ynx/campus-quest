import { useState, useEffect } from 'react'
import api from '../services/api'
import type { Quest } from '../types/quest'

function Dashboard() {
    const [quests, setQuests] = useState<Quest[]>([])
    const [newQuest, setNewQuest] = useState({
        quest_name: "",
        quest_description: "",
        xp_earned: "",
        quest_deadline: "",
    })
    const [editingId, setEditingId] = useState<number | null>(null)
    const [editQuest, setEditQuest] = useState({
        quest_name: "",
        quest_description: "",
        xp_earned: "",
        quest_deadline: "",
    })

    useEffect(() => {
        api.get("/quests").then((res) => setQuests(res.data))
    }, [])

    function handleNewQuestChange(e: React.ChangeEvent<HTMLInputElement>){
        setNewQuest({ ...   newQuest, [e.target.name]: e.target.value })
    }

    async function handleCreateQuest(e: React.FormEvent){
        e.preventDefault()
        try {
            const res = await api.post("/quests/", {
                ...newQuest,
                xp_earned: Number(newQuest.xp_earned),
            })
            setQuests([...quests, res.data])
            setNewQuest({
                quest_name: "",
                quest_description: "",
                xp_earned: "",
                quest_deadline: "",
            })
        } catch (err) {
            console.error("Failed to create quest", err)
        }
    }

    async function handleToggleStatus(quest: Quest){
        const newStatus = quest.quest_status === "completed" ? "incomplete" : "completed"
        try {
            const res = await api.patch(`/quests/${quest.quest_id}/status`, {quest_status: newStatus})
            setQuests(quests.map((q) => (q.quest_id === quest.quest_id ? res.data : q)))
        } catch (err) {
            console.error("Failed to update status", err)
        }
    }

    async function handleDeleteQuest(quest: Quest){
        // if button is activated... then scan for the quest_id and delete it from the databse
        try {
            await api.delete(`/quests/${quest.quest_id}`)
            setQuests(quests.filter((q) => q.quest_id !== quest.quest_id))
        } catch (err) {
            console.error("Failed to delete quest", err)
        }
    }

    function handleEditClick(quest: Quest){
        setEditingId(quest.quest_id)
        setEditQuest({
            quest_name: quest.quest_name,
            quest_description: quest.quest_description,
            xp_earned: String(quest.xp_earned),
            quest_deadline: quest.quest_deadline
        })
    }

    function handleEditQuestChange(e: React.ChangeEvent<HTMLInputElement>){
        setEditQuest({ ...editQuest, [e.target.name]: e.target.value })
    }
    
    async function handleUpdateQuest(e: React.FormEvent){
        e.preventDefault()
        try {
            const res = await api.put(`/quests/${editingId}`, {
                ...editQuest,
                xp_earned: Number(editQuest.xp_earned),
            })
            setQuests(quests.map((q) => (q.quest_id === editingId ? res.data : q)))
            setEditingId(null)
        } catch (err) {
            console.error("Failed to update quest", err)
        }
    }

        return (

            <div>
                <h1>My Quests</h1>
                <form onSubmit={handleCreateQuest}>
                    <input name="quest_name" type="text" value={newQuest.quest_name} onChange={handleNewQuestChange} placeholder="Quest name" />
                    <input name="quest_description" type="text" value={newQuest.quest_description} onChange={handleNewQuestChange} placeholder="Description" />
                    <input name="xp_earned" type="number" value={newQuest.xp_earned} onChange={handleNewQuestChange} placeholder="XP" />
                    <input name="quest_deadline" type="date" value={newQuest.quest_deadline} onChange={handleNewQuestChange} />
                    <button type="submit">Create Quest</button>
                </form>
                <ul>
                    {quests.map((quest) => (
                        quest.quest_id === editingId ? (
                            <div>
                                <form onSubmit={handleUpdateQuest}>
                                    <input name="quest_name" type="text" value={editQuest.quest_name} onChange={handleEditQuestChange} />
                                    <input name="quest_description" type="text" value={editQuest.quest_description} onChange={handleEditQuestChange} />
                                    <input name="xp_earned" type="number" value={editQuest.xp_earned} onChange={handleEditQuestChange} />
                                    <input name="quest_deadline" type="date" value={editQuest.quest_deadline} onChange={handleEditQuestChange} />
                                    <button type="submit">Update Quest</button>
                                    <button type= "button" onClick={() => setEditingId(null)}>Cancel Edit</button>
                                </form>
                            </div>
                        ) : (
                            <li key={quest.quest_id}>
                                {quest.quest_name} - {quest.quest_status} - {quest.xp_earned} XP
                                <button onClick={() => handleToggleStatus(quest)}>Toggle Status</button>
                                <button onClick={() => handleDeleteQuest(quest)}>Delete Quest</button>
                                <button onClick={() => handleEditClick(quest)}>Edit Quest</button>
                            </li>
                        )
                    ))}
                </ul>
            </div>
        )
}

export default Dashboard