import img from './Launch/image.png';


    let Tal = { Username: "Tal", Nickname: "tal (:", password: "1234567890", pic: img, friends: [], noti: 1 }
    let Coral = { Username: "Coral", Nickname: "Kuta", password: "12345678", pic: img, friends: [[Tal, []]], noti: 3 }
    let Ido = { Username: "Ido", Nickname: "Idota", password: "12341234", pic: img, friends: [[Coral, []], [Tal, []]], noti: 2 }

    let users = [
        { Username: "Matan", Nickname: "Matansha", password: "1234567890", pic: img, friends: [[Tal, []], [Coral, []], [Ido, []]], noti: 3 },
        { Username: "Itamar", Nickname: "itamar", password: "12345678", pic: img, friends: [[Tal, []], [Coral, []], [Ido, []]], noti: 4 },
        { Username: "Bella", Nickname: "bella", password: "12341234", pic: img, friends: [[Tal, []], [Coral, []], [Ido, []]], noti: 3 },
        Tal, Coral, Ido];


    export default users;


