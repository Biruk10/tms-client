export interface Quiz {
    readonly id: string;
    kind: "quiz";
    title: string;
    correctAnswers: number;
    totalQuestions: number;
}

export interface LabAssignment {
    readonly id: string;
    kind: "Lab";
    title: string;
    functionalityScore: number;
    codeQualityScore: number;
}

export type Assessment = Quiz | LabAssignment;

export function calculateGrade(item: Assessment): number {
    switch (item.kind) {
        case "quiz":
            return Math.round((item.correctAnswers / item.totalQuestions) * 100);
        case "Lab":
            return Math.round(item.functionalityScore * 0.7 + item.codeQualityScore * 0.3,);

} 
}

