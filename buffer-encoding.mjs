const buffer = Buffer.from ("devin ferdynand ", "utf8");
console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from ("ZGV2aW4gZmVyZHluYW5kIA==", "base64");
console.info(bufferBase64.toString("utf8"))

//kodebuferbase64 yaitu menginput kode dengan bebas dan ketika di run bufferbase64 mengasihkan kode untuk menampilkan nama kita