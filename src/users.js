import img from './images/avatar.png';
import ido_img from './images/ido.jpg';
import coral_img from './images/coral.jpg';
import tal_img from './images/tal.jpg';

    let Tal = {lastMessage: "יואו איזה מטורף", Username: "Tal", Nickname: "tal (:", password: "1234567890", pic: tal_img, friends: [], noti: 1 }
    let Coral = {lastMessage: "Good Picture !!!",  Username: "Coral", Nickname: "Kuta", password: "12345678", pic: coral_img, friends: [[Tal, []]], noti: 1 }
    let Ido = {lastMessage: "",  Username: "Ido", Nickname: "Idota", password: "12341234", pic: ido_img, friends: [[Coral, []], [Tal, []]], noti: 0 }

    let users = [
        {lastMessage: "",  Username: "Matan", Nickname: "Matansha", password: "1234567890", pic: img, friends: [[Tal, []], [Coral, []], [Ido, []]], noti: 3 },
        {lastMessage: "",  Username: "Itamar", Nickname: "itamar", password: "12345678", pic: img, friends: [[Tal, []], [Coral, []], [Ido, []]], noti: 4 },
        {lastMessage: "",  Username: "Bella", Nickname: "bella", password: "12341234", pic: img, friends: [[Tal, []], [Coral, []], [Ido, []]], noti: 3 },
        Tal, Coral, Ido];


    export default users;


