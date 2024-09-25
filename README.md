**Astronaut Daily Schedule Organizer**

**Overview**
The **Astronaut Daily Schedule Organizer** is a console-based application designed to help astronauts organize their daily tasks. The program allows users to create, view, and manage daily tasks with specified start and end times, descriptions, and priority levels. The application also ensures that tasks do not overlap and provides appropriate error handling for invalid inputs or operations. This exercise is an example of a basic CRUD (Create, Read, Update, Delete) system implemented using TypeScript, Object-Oriented Programming (OOP) principles, and design patterns.

**Features**:
- **Add Tasks**: Users can add new tasks with a description, start time, end time, and priority level (e.g., High, Medium, Low).
- **Remove Tasks**: Users can remove a task by providing its description.
- **View Tasks**: The system can display all scheduled tasks in a sorted list by start time.
- **Validate Tasks**: The system prevents overlapping tasks and ensures that new tasks do not conflict with existing ones.
- **Error Handling**: Provides error messages for invalid operations, such as tasks with incorrect time formats or conflicting time slots.

**Design Patterns**:
- **Singleton Pattern**: The `TaskManager` class is implemented as a Singleton to ensure only one instance of the schedule manager exists throughout the application.
- **Factory Pattern**: A `TaskFactory` is used to create task objects, following the creational design pattern.
- **Validation**: A time validation utility ensures that tasks have valid time formats and do not overlap.

**Technologies Used**:
- **TypeScript**: The entire application is built using TypeScript, enabling static typing and improved maintainability.
- **OOP Principles**: The solution leverages object-oriented design to model tasks and manage the astronaut's daily schedule.
- **Node.js**: The application is designed to run as a Node.js terminal-based application.

**Project Structure**:
The code is organized using a modular structure, separating concerns for task management, task creation, and utility functions for validation.

```
astronaut-scheduler/
├── src/
│   ├── models/
│   │   ├── Task.ts
│   │   └── TaskManager.ts
│   ├── factories/
│   │   └── TaskFactory.ts
│   ├── utils/
│   │   └── TimeValidator.ts
│   └── index.ts
├── tsconfig.json
└── README.md
```

**How to Run**:
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/astronaut-scheduler-coding-exercise.git
   cd astronaut-scheduler
   ```

2. Install dependencies (if using TypeScript globally, skip this step):
   ```bash
   npm install typescript
   ```

3. Compile the TypeScript code:
   ```bash
   tsc
   ```

4. Run the application:
   ```bash
   node dist/index.js
   ```

**Usage**:
- **Adding a Task**: 
   - Example: `addTask("Morning Exercise", "07:00", "08:00", "High")`
   - The system will add this task if the time slot is available and valid.
  
- **Viewing Tasks**: 
   - Displays all tasks sorted by start time.
  
- **Removing a Task**: 
   - Example: `removeTask("Morning Exercise")`
   - Removes the task from the schedule if it exists.
