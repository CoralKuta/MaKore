import img from './ContactItem/img.jpeg';


let Yoni = { Username: "Yoni", Nickname: "Tal!", password: "1234567890", pic: img, friends: [], time : "11:31", massage : "Hey there! im using MaKore", noti : 3  }
let Matan = { Username: "Matan", Nickname: "Kuta", password: "12345678", pic: img, friends: [Yoni], time : "11:31", massage : "Hey there! im using MaKore", noti : 3 }
let Gal = { Username: "Gal", Nickname: "Idota", password: "12341234", pic: img, friends: [Matan], time : "11:31", massage : "Hey there! im using MaKore", noti : 3 }

let contacts = [
    { Username: "Tal", Nickname: "Tal!", password: "1234567890", pic: img, friends: [Matan], time : "11:31", massage : "Hey there! im using MaKore", noti : 3 },
    { Username: "Coral", Nickname: "Kuta", password: "12345678", pic: img, friends: [Gal], time : "11:31", massage : "Hey there! im using MaKore", noti : 3 },
    { Username: "Ido", Nickname: "Idota", password: "12341234", pic: img, friends: [Matan], time : "11:31", massage : "Hey there! im using MaKore", noti : 3}, Yoni, Matan, Gal];

export default contacts;


