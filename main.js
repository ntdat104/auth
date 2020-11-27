console.log(CryptoJS);

const SECRET_KEY = "abc123";

function createSalt(length) {
    const BASE64 = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F",
        "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
        "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/", 
    ]

    let salt = "";
    for (let i = 0; i < length; i++) {
        const RANDOM_INDEX = Math.floor(Math.random() * BASE64.length);
        salt += BASE64[RANDOM_INDEX];
    }
    return salt;
}

function hmacSHA256(password, salt) {
    const CIPHER_TEXT = CryptoJS.HmacSHA256(password + salt, SECRET_KEY).toString();
    return CIPHER_TEXT
}

const salt = createSalt(10);
const password = "1234";

const CIPHER_TEXT = hmacSHA256(password, salt);
console.log(CIPHER_TEXT, salt);

//* hash: c6f91c7e0ca7becc30a2f9ddaa8e11f139f8bf6ad4637f7d17eadaf4d0707bfb
//* salt: 4UC4Iq+gcC
