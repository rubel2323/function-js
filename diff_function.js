function srtSizedLength(num, bol) {
  const len = num.length;

  if (bol === true) {
    const out = len * 2;
    console.log(out);
  } else {
    console.log(len);
  }
}
srtSizedLength("dhak", true);
srtSizedLength("dhak", false);
