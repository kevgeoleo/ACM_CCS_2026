// test("ReDos in fast-csv", () => {
  const csv = require("fast-csv");
  let str1 = " ".repeat(30000) + "x\n";
  let start = process.hrtime();
  const stream = csv
    .parse({
      ignoreEmpty: true,
      delimiter: "\t",
    })
    .on("error", (error) => {})
    .on("data", () => {})
    .on("end", () => {
      var t = process.hrtime(start);
      let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
    });
  stream.write(str1);
  stream.end();
// });
