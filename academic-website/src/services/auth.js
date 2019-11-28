import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyBgMxdSHj60zcVbNr47MR2IUkiGYHvXwMY",
    authDomain: "academic-website-f0435.firebaseapp.com",
    databaseURL: "https://academic-website-f0435.firebaseio.com",
    projectId: "academic-website-f0435",
    storageBucket: "academic-website-f0435.appspot.com",
    messagingSenderId: "845432245697",
    appId: "1:845432245697:web:24bb3863439285f7d07340"
};

firebase.initializeApp(firebaseConfig);

export const isAuthenticated = () => {
    return sessionStorage.getItem("login") !== null
}

export const login = (email, password) => {
    return new Promise((resolve, reject) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                sessionStorage.setItem("login", "1")
                resolve()
            })
            .catch((erro) => {
                reject(erro)
            })
    })
}


export const signUp = (email, password) => {

    return new Promise((resolve, reject) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                resolve("Usuário criado com sucesso!")
            })
            .catch(error => {
                reject(error)
            })
    })
}



export const logoff = () => {
    sessionStorage.removeItem("login")
    return new Promise((resolve, reject) => {
        firebase.auth().signOut()
            .then(() => resolve())

    })


}