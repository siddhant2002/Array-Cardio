const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and every checks
  // Array.prototype.some() --> tells if one value satisfies the condition
  const year = new Date().getFullYear();
  const adult = people.some(person => year - person.year >= 19);
  console.log({adult});

  // Array.prototype.every()
  // return true if all the data satisfies the condition
  const adt = people.every(person => year - person.year >= 19);
  console.log({adt});

  // Array.prototype.find()
  // It will the piece of information which we are looking for
  const comment = comments.find(comment => comment.id == 542328);
  console.log(comment);

  // Array.prototype.findIndex()
  // Find the comment with this ID
  // delete the comment with the ID of 542328
  const index = comments.findIndex(comment => comment.id === 542328);
  const original = [...comments];
  comments.splice(index,1);
  console.table(original);
  console.table(comments);