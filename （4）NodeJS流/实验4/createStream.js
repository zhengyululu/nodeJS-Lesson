const stream=require("stream");

var MyReadable=new stream.Readable();
MyReadable.push("a");
MyReadable.push("b");
MyReadable.push("c");
MyReadable.push("d");
MyReadable.push("e");
MyReadable.push("f");
MyReadable.push("g");
MyReadable.push("h");
MyReadable.push("i");
MyReadable.push("j");
MyReadable.push("k");
MyReadable.push("l");
MyReadable.push("m");
MyReadable.push("nopqrstuvwxyz");
MyReadable.push(null);4
MyReadable.pipe(process.stdout);