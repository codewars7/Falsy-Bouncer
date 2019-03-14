const bouncer = (arr) => {
  // Don't show a false ID to this bouncer.
  const cleanArr = arr.filter(item => item ? item : null)
  console.log(cleanArr)
}

bouncer([7, "ate", "", false, 9]);
