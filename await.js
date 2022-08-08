const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve(`Entro en el timeout`), 3000)
      : reject(new Error(`Salto error`));
  });
};

const asyncWithoutTryCatch = () => {
  const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
  };
  helloAsync();
};

const asyncWithTryCatch = () => {
  const anotherHellosAsync = async () => {
    try {
      const entra = await helloWorld();
      console.log(entra);
    } catch (error) {
      console.log(error);
    }
  };

  anotherHellosAsync();
};

const helloWorldWithTryCatchAndErrorMessage = () => {
  const helloWorld = () => {
    return new Promise((resolve, reject) => {
      false ? setTimeout(() => resolve(`Hello World`), 3000) : reject(new Error(`La puta madre`))
    });
  };

  const byeWorld = () => {
    return new Promise((resolve, reject) => {
      true ? setTimeout(() => resolve(`Bye world`), 3000) : reject(new Error(`ByeError`))
    });
  };

 const saySomething = async () => {
   try {
    const hi = await helloWorld();
    console.log(hi);
    const bye = await byeWorld();
    console.log(bye);
   } catch (error) {
    console.log(error.message);
  }
  
    
  
 }
 saySomething();

  };

  
