let data = [
    {
    "id":1,
    "imagen":"https://www.formulatv.com/images/noticias/72500/72568/6_a318680e53_640.jpg",
    "titulo":"Walkie-Talkie",
    "descripcion":"Juego para niños. Comunicador Walkie-Talkie de la marca Krusty",
    "categoria":"Juegos",
    "precio":"7000",
    "stock":7
    },
    {
    "id":2,
    "imagen":"https://www.formulatv.com/images/noticias/72500/72568/12_a318680e53_640.jpg",
    "titulo":"Juego Operación",
    "descripcion":"Juego para niños. El juego Operación versión Krusty",
    "categoria":"Juegos",
    "precio":"4500",
    "stock":4
    },
    {
    "id":3,
    "imagen":"https://www.formulatv.com/images/noticias/72500/72568/2_a318680e53_640.jpg",
    "titulo":"set de magia",
    "descripcion":"Juego para niños. Set de mago para realizar trucos de magia",
    "categoria":"Juegos",
    "precio":"5000",
    "stock":6
    },
    {
    "id":4,
    "imagen":"https://http2.mlstatic.com/D_NQ_NP_855331-MLA27109429452_032018-O.jpg",
    "titulo":"Detergente Mr. Chispa",
    "descripcion":"Detergente de alta calidad marca Mr.Chispa",
    "categoria":"Limpieza",
    "precio":"200",
    "stock":20
    },
    {
    "id":5,
    "imagen":"https://pbs.twimg.com/media/DeZjfW4X0AAgIHA.jpg",
    "titulo":"Papel para cocina",
    "descripcion":"Rollo de papel para cocina marca Burly",
    "categoria":"Limpieza",
    "precio":"120",
    "stock":40
    },
    {
    "id":6,
    "imagen":"https://i.pinimg.com/736x/a7/a2/09/a7a209e124ae1700debb130ece673100.jpg",
    "titulo":"Cereales Krusty",
    "descripcion":"Cereales de la mejor calidad marca Krusty",
    "categoria":"Comida",
    "precio":"220",
    "stock":20
    },
    {
    "id":7,
    "imagen":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwVuAhbhHBgljeXAjsIyD_rROZ8bL3kyDWkA&usqp=CAU",
    "titulo":"Rosquillas",
    "descripcion":"Caja de Rosquillas cantidad 12",
    "categoria":"Comida",
    "precio":"250",
    "stock":10
    },
    {
    "id":8,
    "imagen":"https://lossimpsonsexplicados.com/wp-content/uploads/2021/06/venus-de-milo-1280x720.jpg",
    "titulo":"Venus de milo",
    "descripcion":"Venus de milo hecho de jalea",
    "categoria":"Comida",
    "precio":"50",
    "stock":5
    },
    {
    "id":9,
    "imagen":"https://pbs.twimg.com/media/C9zENjAXoAEEizz.jpg",
    "titulo":"Buzz Cola",
    "descripcion":"Gaseosa sabor cola",
    "categoria":"Gaseosa",
    "precio":"100",
    "stock":50
    },
    {
    "id":10,
    "imagen":"http://desempacados.com/wp-content/uploads/2021/02/desempacados_The-Simpsons-adidas-Superstar-Squishee-2.jpg",
    "titulo":"squishees",
    "descripcion":"Batido helado",
    "categoria":"Gaseosa",
    "precio":"200",
    "stock":10
    }
    ];

    const getProductos = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(data)
            reject("Error")      
        }, 2000);
    })
    
    export default getProductos
