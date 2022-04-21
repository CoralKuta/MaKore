# MaKore
## Best Way to Communicate

### About
MaKore is a communication app we build during the semester.
This is the first part - Web Client.
We used and experienced with: HTML, CSS, JavaScript, React and Bootstrap.

#### Sign In page:
An existing user can log in.
For now, exsiting users are hard coded in our program.
![signin](https://user-images.githubusercontent.com/90967892/164452725-c6b44047-79ee-4574-abfb-1dbcb88ecd80.jpg)
In case of a wrong user name or password there is a note notifying about the error.
For safety reasons we do not give the information about which field is incorrect.
![wrong](https://user-images.githubusercontent.com/90967892/164452886-2eee7e94-8aa2-4346-acb6-445f9392e74c.jpg)


#### Sign Up page:
A new user can register.
![signup](https://user-images.githubusercontent.com/90967892/164452688-3818a90f-e764-47b8-99f7-fed8fe7ff71c.jpg)

Username must be unique. Thus an intent of signing up with an existing username will be forbidden.
Password must contain digits and letters, and must be at least 8 digit's long.
Nickname is optional. When not given, the username will be the nickname.
Picture is also optional. When not given, a default image will appear.


#### Chat page:
Once logged in or registered, the user can start chatting with friend.
For now, only automatic messages will be replied.
Types of messages we support - text, image, video and voice messages.
![attach](https://user-images.githubusercontent.com/90967892/164453020-b9d54872-12a5-4210-bb96-5d42e0b84293.jpg)

##### Adding chat with a new friend:
By clicking the "add" button we allow the user to add an existing registrated user as a friend.
![add](https://user-images.githubusercontent.com/90967892/164453051-a4c543b4-e3d6-493a-9bd5-445ab41b8719.jpg)


##### Searching in the chat:
A user can search for a specific chat by typing a username in the search bar.
The searching is case-sensitive since usernames are unique.
![search](https://user-images.githubusercontent.com/90967892/164453207-d4c88789-04eb-4dcb-a22d-1f0a9522d70e.jpg)

### How to Run
1. Clone the repository:

    ```
    git clone https://github.com/CoralKuta/MaKore
    ```
2. Enter the folder and make a react project:
    ```
    npx create-react-app MaKore
    ```
3. Enter the MaKore folder:
    ```
    cd MaKore
    ```
4. Run the program:
    ```
    npm start
    ```
5. Enter the following details:
    ```
    Username: Ido
    Password: 12341234
    ``` 
6. Explore !

### Developers
- Coral Kuta
- Tal Dabran
- Ido Tavron

