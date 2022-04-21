# MaKore
## Best Way to Communicate

### About
MaKore is a communication app we build during the semester.
This is the first part - Web Client.
We used and experienced with: HTML, CSS, JavaScript, React and Bootstrap.

#### Sign In page:
An existing user can log in.
For now, exsiting users are hard coded in our program.
// image
In case of a wrong user name or password there is a note notifying about the error.
For safety reasons we do not give the information about which field is incorrect.
// image

#### Sign Up page:
A new user can register.
// image
Username must be unique. Thus an intent of signing up with an existing username will be forbidden.
Password must contain digits and letters, and must be at least 8 digit's long.
Nickname is optional. When not given, the username will be the nickname.
Picture is also optional. When not given, a default image will appear.


#### Chat page:
Once logged in or registered, the user can start chatting with friend.
For now, only automatic messages will be replied.
Types of messages we support - text, image, video and voice messages.
// image

##### Adding chat with a new friend:
By clicking the "add" button we allow the user to add an existing registrated user as a friend.
// image

##### Searching in the chat:
A user can search for a specific chat by typing a username in the search bar.
The searching is case-sensitive since usernames are unique.
// image.

### How to Run
1. Clone the repository:

    ```
    $ git clone https://github.com/CoralKuta/MaKore
    ```
2. Enter the folder and make a react project:
    ```
    $ npx create-react-app MaKore
    ```
3. Enter the MaKore folder:
    ```
    $ cd MaKore
    ```
4. Run the program:
    ```
    $ npm start
    ```

### Developers
- Coral Kuta
- Tal Dabran
- Ido Tavron

