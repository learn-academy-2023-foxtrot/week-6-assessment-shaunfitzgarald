# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

Type your initials here to confirm you read the instructions: sfs

1. As a Rails developer, I am creating an application with a model called Cohort and a model called Student. The relationship between these models is that a cohort has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: The foreign key would be called cohort_id. The foreign key would be on the Student model.

Researched answer: You would, in a has_many association, put the foreign key on the model that belongs to the other model, the Student model. You would first need to generate a migration to add it:
```
$rails generate migration AddCohortToStudents cohort:references
```
This command generates a migration file that will add a "cohort_id" column to the "students" table, which will serve as the foreign key.
Check the migration file to make sure it looks something like this:
```rb
class AddCohortToStudents < ActiveRecord::Migration[6.0]
  def change
    add_reference :students, :cohort, foreign_key: true
  end
end
```
Then run the migration:
```$rails db:migrate```

2. Which RESTful routes must always be passed params?

Your answer:The update route aka Put or Patch and the delete route must always be passed params.

Researched answer:All of the CRUD actions RESTful routes must be passed params: Create (Post), Read (Get), Update (Put or Patch), and Delete (Delete). Also,  in some cases, you might define custom routes that require specific parameters.

3. Name three rails generator commands. What is created by each?

Your answer: 
```$rails generate controller ControllerName```
```$rails generate model ModelName```
```$rails generate resource Resource Name```
```$rails generate migration MigrationName```

Researched answer:
```$rails generate view ViewName```
```$rails generate scaffold ResourceName```
```$rails generate mailer MailerName```
```$rails generate job JobName```
```$rails generate channel ChannelName```
```$rails generate system_test TestName```
```$rails generate decorator ModelName```
```$rails generate task TaskName```
To generate a list of all generator commands use:
```$rails generate --help```

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
Index. This route typically calls the index action in the StudentsController. The index action is responsible for fetching and displaying a list of all students.

action: "POST" location: /students
Create. This route calls the create action in the StudentsController. The create action is responsible for processing the form data submitted to create a new student.

action: "GET" location: /students/new
New. This route calls the new action in the StudentsController, which is responsible for rendering the form to create a new student.

action: "GET" location: /students/2
Show. This route typically calls the show action in the StudentsController. The show action is responsible for displaying the details of a specific student with an ID of 2.

action: "GET" location: /students/2/edit
Edit. This route calls the edit action in the StudentsController. The edit action is responsible for rendering the form to edit the details of a specific student with an ID of 2.

action: "PATCH" location: /students/2
Update. This route typically calls the update action in the StudentsController. The update action is responsible for processing the form data submitted to update the details of a specific student with an ID of 2.

action: "DELETE" location: /students/2
Destroy. This route calls the destroy action in the StudentsController. The destroy action is responsible for deleting a specific student with an ID of 2.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.

- As a user, I want to be able to register an account with a username and password, so I can have a personalized to-do list.
- As a registered user, I want to be able to log in to my account using my username and password, so I can access my to-do list.
- As a logged-in user, I want to be able to create a new to-do item with a title, description, and due date, so I can keep track of tasks I need to complete.
- As a user, I want to see a list of all my to-do items, including their titles, due dates, and completion status, so I can easily manage my tasks.
- As a user, I want to be able to mark a to-do item as completed or incomplete, so I can track my progress.
- As a user, I want to be able to edit the title, description, and due date of a to-do item, so I can make changes as needed.
- As a user, I want to be able to delete a to-do item that I no longer need, so I can keep my to-do list organized.
- As a user, I want to be able to organize my to-do items into categories or lists, so I can group related tasks together.
- As a user, I want to filter my to-do list by category, completion status, or due date, so I can easily find specific tasks.
- As a user, I want to receive email or in-app reminders for to-do items with upcoming due dates, so I can stay on top of my tasks.