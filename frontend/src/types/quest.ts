export interface Quest {
    quest_id: number;
    quest_name: string;
    quest_description: string;
    quest_deadline: string;
    quest_status: "completed" | "incomplete" | "not_started";
    xp_earned: number;
}