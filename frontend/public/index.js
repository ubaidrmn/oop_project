window.encryptMessage = (message, publicKey) => {
    const jsEncrypt = new JSEncrypt();
    jsEncrypt.setPublicKey(publicKey);
   
    return jsEncrypt.encrypt(message);
}
