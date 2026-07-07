import { useState, useEffect } from 'react'
import api from '../services/api'
import type { Quest } from '../types/quest'

function Dashboard() {
    const [quests, setQuests] = useState<Quest[]>([])

    useEffect(() => {
        api.get("/quests").then((res) => setQuests(res.data))
    }, [])

    return (
        <div>
            <h1>My Quests</h1>
            <ul>
                {quests.map((quest) => (
                    <li key={quest.quest_id}>
                        {quest.quest_name} - {quest.quest_status} - {quest.xp_earned} XP
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Dashboard