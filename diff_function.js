function srtSizedLength(num) {
  const len = num.length;

  if (len % 2 === 0) {
    const out = len * 2;
    console.log(out);
  } else {
    console.log(len);
  }
}
srtSizedLength("dhak");
