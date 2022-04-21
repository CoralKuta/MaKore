import img from './images/avatar.png';
import ido_img from './images/ido.jpg';
import coral_img from './images/coral.jpg';
import tal_img from './images/tal.jpg';

    let Tal = {lastMessage: "יואו איזה מטורף", Username: "Tal", Nickname: "tal (:", password: "1234567890", pic: tal_img, friends: [], noti: 1 }
    let Coral = {lastMessage: "Good Picture !!!",  Username: "Coral", Nickname: "Kuta", password: "12345678", pic: coral_img, friends: [], noti: 1 }
    let Matan =  {lastMessage: "",  Username: "Matan", Nickname: "Matansha", password: "1234567890", pic: img, friends: [], noti: 0 };
    let Itamar = {lastMessage: "",  Username: "Itamar", Nickname: "itamar", password: "12345678", pic: img, friends: [[Matan, []]], noti: 0 }
    let Bella =  {lastMessage: "",  Username: "Bella", Nickname: "bella", password: "12341234", pic: img, friends: [[Matan, []], [Itamar, []]], noti: 0 }
    let Ariel =  {lastMessage: "",  Username: "Ariel", Nickname: "arielo", password: "12341234", pic: img, friends: [[Matan, []], [Itamar, []]], noti: 0 }
    let Ido = {lastMessage: "",  Username: "Ido", Nickname: "Idota", password: "12341234", pic: ido_img, friends: [[Coral, []], [Tal, []], [Matan, []], [Itamar,[]],[Bella,[]], [Ariel,[]]], noti: 0 }
    let users = [Bella, Itamar, Matan ,Tal, Coral, Ido];


    export default users;


