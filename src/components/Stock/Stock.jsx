const mercaderia = [
    {
      id: 1,
      title: "Canasto",
      price: '$1300',
      pictureUrl: "./canasto1.jpg",
    },
    {
        id: 2,
        title: "Perchas",
        price: '$300',
        pictureUrl: "./perchas.jpg",
    },
    {
        id: 3,
        title: "Tabla",
        price: '$500',
        pictureUrl: "./tablas.jpg",
    }
  ];
  
  
 export const getFetch = new Promise((resolve, reject) => {
    let condicion = true;
      condicion ? setTimeout(()=>{ resolve(mercaderia) }, 2000) : reject('error')
  })
