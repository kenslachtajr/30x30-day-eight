export interface Project {
    id: number,
    title: string,
    details: String,
    importanceLevel: number
}

export const emptyProject: Project = {
    id: null,
    title: '',
    details: '',
    importanceLevel: null
}
