<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Planner</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            margin-top: 20px;
        }
        .container {
            width: 400px;
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        .task {
            background: white;
            padding: 10px;
            margin: 5px 0;
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
            cursor: grab;
        }
        .task.high { border-left: 5px solid red; }
        .task.medium { border-left: 5px solid orange; }
        .task.low { border-left: 5px solid green; }
        #taskList {
            min-height: 100px;
            padding: 10px;
            border: 2px dashed #ccc;
            border-radius: 5px;
        }
        .completed {
            text-decoration: line-through;
            color: gray;
        }
    </style>
</head>
<body>
    <div class="container">
        <h3>Task Planner</h3>
        <input type="text" id="taskInput" placeholder="Add a new task...">
        <button onclick="addTask()">Add Task</button>
        <p><strong>AI Suggestion:</strong> Focus on high-priority tasks first.</p>
        <div id="taskList"></div>
    </div>

    <script>
        function addTask() {
            let taskText = document.getElementById("taskInput").value;
            if (taskText === "") return;
            let priority = prompt("Enter priority: high, medium, low", "medium").toLowerCase();
            let task = `<div class='task ${priority}'><span>${taskText}</span><button onclick='markComplete(this)'>✔</button></div>`;
            $("#taskList").append(task);
            $(".task").draggable({ revert: "invalid" });
            document.getElementById("taskInput").value = "";
        }

        function markComplete(btn) {
            $(btn).parent().toggleClass("completed");
        }

        $(function () {
            $("#taskList").sortable();
        });
    </script>
</body>
</html>
