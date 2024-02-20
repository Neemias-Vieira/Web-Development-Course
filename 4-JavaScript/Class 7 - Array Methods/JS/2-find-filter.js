const studants = [
    { id: 1, name: "João", average: 6, birth: 2005 },
    { id: 2, name: "Thiago", average: 6, birth: 2002 },
    { id: 3, name: "Jonas", average: 5, birth: 1998 },
    { id: 4, name: "Rosa", average: 9, birth: 2004 },
    { id: 5, name: "Amanda", average: 8, birth: 1992 },
    { id: 6, name: "Pedro", average: 7, birth: 1998 },
    { id: 6, name: "Enzo", average: 7, birth: 2008 },
    { id: 6, name: "Valentina", average: 7, birth: 2009 },
  ];

  console.log(studants.find((value) => {

    return value.id === 6 || value.id === 5;

  }));

  console.log(studants.find((value) => {

    return value.name === "Jonas" && value.name === "Rosa"

  }));

  console.log(studants.find((value) => {

    return value.name === "Pedro" && value.birth > 1998

  }));

  console.log(studants.find((value) => {

    return value.name.toLocaleLowerCase() === "Pedro".toLocaleLowerCase() && value.birth >= 1998

  }));
  

  console.log(studants.find(value => value.average >= 7));

  //  Immutable

  console.log(studants.filter((value) => value.average >= 7));

  const currentYear = new Date().getFullYear();
  console.log(currentYear);

  console.log(studants.filter((value) => currentYear - value.birth < 18));
  
  console.log(studants.filter((value) => currentYear - value.birth >= 18));

  console.log(studants.filter((value => value.name.includes("Pe"))));
  console.log(studants.filter((value => value.name.includes("De"))));
  console.log(studants.filter((value => value.name.includes("os"))));
  console.log(studants.filter((value => value.name.includes("m"))));