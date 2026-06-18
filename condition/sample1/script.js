function calculateShipping(amount) {
  if (amount >= 3000) {
    console.log("送料無料です");
  } else {
    console.log("送料は500円です");
  }
}

calculateShipping(4000);
calculateShipping(1000);