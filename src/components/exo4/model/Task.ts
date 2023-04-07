import { string } from "prop-types"

export interface Task {
    id: number;
    name: string,
    description?: string,
    priority: "low" | "normal" | "high",
    isCompleted: boolean
}