import img from './images/avatar.png';
import ido_img from './images/ido.jpg';
import coral_img from './images/coral.jpg';
import tal_img from './images/tal.jpg';
import ariell_img from './images/ariel.jpg';
import bella_img from './images/bella.jpg';
import matan_img from './images/matan.jpg';
import itamar_img from './images/itamar.jpg';
    // the hardcoded users
    let Tal = {lastMessage: "יואו איזה מטורף", lastTime: "00:01", Username: "Tal", Nickname: "tal (:", password: "1234567890a", pic: tal_img, friends: [], noti: 1 }
    let Coral = {lastMessage: "Good Picture !!!", lastTime: "00:01",  Username: "Coral", Nickname: "Kuta", password: "12345678ab", pic: coral_img, friends: [], noti: 1 }
    let Matan =  {lastMessage: "" , lastTime: "",  Username: "Matan", Nickname: "Matansha", password: "a1234567890a", pic: matan_img, friends: [], noti: 0 };
    let Itamar = {lastMessage: "", lastTime: "",  Username: "Itamar", Nickname: "itamar", password: "12345678a", pic: itamar_img, friends: [[Matan, []]], noti: 0 }
    let Bella =  {lastMessage: "", lastTime: "",  Username: "Bella", Nickname: "bella", password: "1234a1234a", pic: bella_img, friends: [[Matan, []], [Itamar, []]], noti: 0 }
    let Ariel =  {lastMessage: "", lastTime: "",  Username: "Ariel", Nickname: "arielo", password: "1234aaaa", pic: ariell_img, friends: [[Matan, []], [Itamar, []]], noti: 0 }
    let Ido = {lastMessage: "", lastTime: "",  Username: "Ido", Nickname: "Idota", password: "12341234a", pic: ido_img, friends: [[Coral, []], [Tal, []], [Matan, []], [Itamar,[]], [Ariel,[]]], noti: 0 }
    let users = [Bella, Itamar, Matan ,Tal, Coral, Ido, Ariel];


    export default users;