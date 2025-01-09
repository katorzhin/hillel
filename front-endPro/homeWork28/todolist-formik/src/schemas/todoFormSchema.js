import { object, string } from "yup";

const todoFormSchema = object({
    task: string()
        .min(5, "Task must be at least 5 characters long.")
        .required("Task is required"),
});

export default todoFormSchema;