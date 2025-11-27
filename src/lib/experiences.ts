interface Experience {
    company: String;
    position: String;
    startDate: Date;
    endDate: Date;
    description?: String;
}

const experiences: Experience[] = [
    {
        company: "Vosyn",
        position: "Backend Developer Intern",
        startDate: new Date("2025-05-01"),
        endDate: new Date("2025-08-31"),
        description: "Implemented REST APIs in Python/Django to support new product features, improving backend reliability and performance. Optimized database queries and endpoints, reducing average API response time by 20–30%. Refactored potential bugs and FastAPI services used by Vosyn AI, cutting deployment issues by 15%+. Collaborated in Agile sprints and code reviews, contributing to backend design decisions for scalable feature rollouts.",
    },
];

export default experiences;