# TO RUN THE PROJECT

1. Clone file with

```
git clone https://github.com/nix-arif/todo-app.git
```

2. `cd` to frontend folder and run `npm install`
3. `cd` to backend folder and run `npm install`
4. While backend folder create `.env` and type in your mongodb connection string as below and also replace `DB_name`, `password` and `collection_name` with your account name

```
CONNECTION_STRING="mongodb+srv://<DB_name>:<password>@cluster0.dwjsc.mongodb.net/<collection_name>?retryWrites=true&w=majority"
```

5. run `npm run dev` to run the backend
6. run `npm start` to run the frontend

7. Input your todo item inside the input form and insert/submit
8. New todo item will appear in Not Done section.
9. Drag the todo item to In Progress and Completed column.

Thank you
