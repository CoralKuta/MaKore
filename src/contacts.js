import img from './ContactItem/img.jpeg';


    let Tal = { Username: "Tal", Nickname: "tal (:", password: "1234567890", pic: img, friends: [], time: "11:31", massage: "Hey there! im using MaKore", noti: 3 }
    let Coral = { Username: "Coral", Nickname: "Kuta", password: "12345678", pic: img, friends: [Tal], time: "11:31", massage: "Hey there! im using MaKore", noti: 3 }
    let Ido = { Username: "Ido", Nickname: "Idota", password: "12341234", pic: img, friends: [Coral, Tal], time: "11:31", massage: "Hey there! im using MaKore", noti: 3 }

    let contacts = [
        { Username: "Matan", Nickname: "Matansha", password: "1234567890", pic: img, friends: [Tal, Coral, Ido], time: "11:31", massage: "Hey there! im using MaKore", noti: 3 },
        { Username: "Itamar", Nickname: "itamar", password: "12345678", pic: img, friends: [Tal, Coral, Ido], time: "11:31", massage: "Hey there! im using MaKore", noti: 3 },
        { Username: "Bella", Nickname: "bella", password: "12341234", pic: img, friends: [Tal, Coral, Ido], time: "11:31", massage: "Hey there! im using MaKore", noti: 3 },
        Tal, Coral, Ido];

    export default contacts;


