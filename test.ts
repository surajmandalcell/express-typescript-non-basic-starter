const obj = [
  {
    Weight: 1,
    Count: 1,
  },
  {
    Weight: 2,
    Count: 1,
  },
  {
    Weight: 3,
    Count: 2,
  },
  {
    Weight: 4,
    Count: 1,
  },
  {
    Weight: 5,
    Count: 2,
  },
];

(() => {
  console.log('Start');
  let nume = 0;
  let deno = 0;
  obj.forEach(({ Weight, Count }) => (nume += Weight * Count));
  obj.forEach(({ Count }) => (deno += Count));
  if (deno === 0) return;
  console.log(nume / deno);
  console.log(Math.floor(nume / deno));
})();
