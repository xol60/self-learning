class ToBase64 {
    static getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {

                resolve(reader.result);
            };
            reader.onerror = error => reject(error);
        });
    }
    static toBase64(arr) {
        //arr = new Uint8Array(arr) if it's an ArrayBuffer
        return btoa(
            arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
    }
}

export default ToBase64;