import React from "react";
import { View,Text,FlatList,Image,TouchableOpacity,StyleSheet,SafeAreaView } from "react-native";

const moviesall=[
    {
    category: 'Romance', movies: [
        {
            id:1,
            title:"El diario de una pasion",
            category:"Romance",
            year:"2004",
            sinopsis:"En un hogar de retiro un hombre le lee a una mujer, que sufre de Alzheimer, la historia de dos jóvenes de distintas clases sociales que se enamoraron durante la convulsionada década del 40, y de cómo fueron separados por terceros, y por la guerra.",
            clasification:"PG-13",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuBuTNWmSNcdavh6qr54G2tn52haIbJjA6Dw&s",
            res:"Hermosa película, tensa, a veces, pero romántica en toda su extensión. El tema central es, al parecer, la lucha de clases sociales por reconocer su identidad y actuar sobre tales bases. Esto, especialmente, se refleja en la aburguesada familia de la niña, que vive de las apariencias y no es más que producto de sus fantasías sociales( el qué dirán) Se da entonces, que el muchacho, va al ejército, vuelve de la guerra, construye su propia casa....Este es el pasado. En el presente, el acompañamiento del muchacho, ya adulto Tercera Edad, acompaña a una dama ya entrada en años, en una etapa avanzada de Alzaimer; ella no se acuerda de nada y de nadie. Ël también, pero se las ingenia para acercarse y acompañarla.. Hermoso final: ella lo reconoce y le invita a acomodarse en su cama. Entrelazados, duermen juntos por la eternidad que les espera y de la cual, ¡ nadie les podrá separar!"
        },
        {
            id:2,
            title:"Un amor para recordar",
            category:"Romance",
            year:"2003",
            sinopsis:"Un delincuente joven es forzado a actuar en una obra de la escuela y comienza un romance con la hija del reverendo del pueblo.",
            clasification:"PG-13",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN1tHaJA3SpS8W6cd7JefF5i5v0etIdGDGxw&s",
            res:" Un romance emotivo y transformador con una historia conmovedora sobre el primer amor y la redención."
        },
        {
            id:3,
            title:"LOVE Rosie",
            category:"Romance",
            year:"2014",
            sinopsis:"Rosie y Alex son mejores amigos hasta que la familia se muda a Estados Unidos. Ellos se juegan todo para conservar vivos su amor y amistad al paso de los años y las millas.",
            clasification:"PG-13",
            image:"https://resizing.flixster.com/2Oqqqgxdcqr8RhWnGrV-7285nZU=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10912532_v_h9_ai.jpg",
            res:"Encantadora pero frustrante: Una montaña rusa de emociones con obstáculos interminables. Aún así, deja un mensaje hermoso sobre el amor verdadero."
        },
        {
            id:4,
            title:"El stand de los besos",
            category:"Romance",
            year:"2018",
            sinopsis:"El primer beso de Elle marca el inicio de un romance prohibido con el chico más lindo de la escuela, pero también podría ser el fin de su relación con su mejor amigo.",
            clasification:"PG-13",
            image:"data:image/jpeg;base64,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",
            res:"Un romance juvenil ligero y divertido, aunque repleto de clichés. Ideal para una tarde sin complicaciones."
        },
        ],
    },
    {
    category: 'Suspense',
    movies: [
        {
            id:1,
            title:"Tin & Tina",
            category:"Suspenso",
            year:"2023",
            sinopsis:"Tras sufrir un aborto traumático, una pareja joven adopta en un convento a dos peculiares gemelos, cuya obsesión por la religión pronto perturba a la familia.",
            clasification:"PG-13",
            image:"https://imagenes.heraldo.es/files/image_990_556/uploads/imagenes/2023/04/02/tin-tina.jpeg",
            res:"Un thriller psicológico inquietante con una atmósfera perturbadora y una historia que juega con la fe y el miedo."
        },
        {
            id:2,
            title:"Fractura",
            category:"Suspense",
            year:"2019",
            sinopsis:"Fueron a la sala de emergencias con su hija, que tuvo un accidente. La esposa la lleva a hacerse una tomografía mientras él espera y las horas pasan, pero nunca vuelven.",
            clasification:"PG-13",
            image:"https://upload.wikimedia.org/wikipedia/en/8/8c/Fracture_poster.jpeg",
            res:"Un thriller psicológico intenso que te mantiene en vilo hasta el final. ¿Realidad o paranoia? "
        },
        {
            id:3,
            title:"¿Qué le pasó a Lunes?",
            category:"Suspense",
            year:"2017",
            sinopsis:"En un futuro en el que está prohibido tener más de un hijo, seis hermanas que fingen ser la misma para pasar inadvertidas tratan de escapar del control opresivo del Gobierno mientras buscan a la séptima hermana, que ha desaparecido.",
            clasification:"PG-13",
            image:"https://es.web.img3.acsta.net/c_300_300/pictures/18/02/20/13/26/0858137.jpg",
            res:"Un thriller de ciencia ficción intrigante con acción y giros inesperados. Noomi Rapace brilla en sus siete roles."
        },
        {
            id:4,
            title:"Desde mi cielo",
            category:"Romance",
            year:"2009",
            sinopsis:"Después de que es violada y asesinada, una joven de 14 años vigila desde el cielo mientras su familia intenta superar lo vivido y el homicida continúa impune.",
            clasification:"PG-13",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt-IEO_eXUQIMMAC7QgQc1ovYJP1DZBsk97A&s",
            res:"Un drama conmovedor sobre la pérdida y el más allá, con una estética hermosa y un mensaje esperanzador. "
        },
        
        ],
    },
    {
    category:'Emotive',
    movies:[
    {
        id:1,
        title:"Los dos hemisferios de Luca",
        category:"Emotive",
        year:"2025",
        sinopsis:"Decidida a ayudar a su hijo con parálisis cerebral, Bárbara lleva a su familia a la India para probar un tratamiento experimental",
        clasification:"G",
        image:"data:image/jpeg;base64,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",
        res:"Una exploración del amor y la identidad con un enfoque emotivo y reflexivo. "
    },
    {
        id:2,
        title:"Milagros del Cielo",
        category:"Emotive",
        year:"2016",
        sinopsis:" Cuando Christy (Jennifer Garner) descubre que su hija de 10 años Ana (Kylie Rogers) tiene una enfermedad rara e incurable, hace todo lo posible por encontrar una cura o soluci",
        clasification:"G",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTApLkdYeNKS_SuCesneSlKQlRNKRuYmoVjhA&s",
        res:"Un drama basado en hechos reales que inspira fe y esperanza con una historia conmovedora."
    },
    {
        id:3,
        title:"RADICAL",
        category:"Emotive",
        year:"2023",
        sinopsis:"Está basado en un artículo periodístico de 2012 sobre Paloma Noyola, una de las estudiantes de Juárez con una impresionante habilidad para las matemáticas y una enorme curiosidad por la astronomía.",
        clasification:"PG",
        image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh3s5ZqhrWMOBiZpaLFqhgoeSj_BeApvfUZt6DtqU7madwOmqKwRJPqwh8eSAkGC1qawR3eghFVTmWS8agSCF_FGKgJlELsZdSCsLK6swjWwpp8_j29t63CrKmF2aGb6gjsryRDfAwVjNxnN7BOoC62RQacZNCL-0tp5TP5t0PfRHxgMS63vhu31I9knGk/w1200-h630-p-k-no-nu/radical-pelicula.jpg",
        res:"Una película inspiradora sobre la educación y el impacto de un maestro en la vida de sus alumnos"
    },
],
    },
    {
        category: "Fantasy",
        movies:
        [
            {
                id:1,
                title:"Malefica",
                category:"Fantasy",
                year:"2014",
                sinopsis:"La joven Maléfica crece para proteger su pacífico reino de los invasores, pero una terrible traición transforma su corazón puro en una piedra y la convierte en una criatura en busca de venganza.",
                clasification:"PG",
                image:"https://www.aceprensa.com/wp-content/uploads/2014/05/102651-0.jpg",
                res:" Una reinvención oscura y emotiva del clásico cuento, con una Angelina Jolie impresionante. 🖤🦇"
                },
            {
                id:2,
                title:"Mulan",
                category:"Fantasy",
                year:"2020",
                sinopsis:"El emperador chino emite un decreto que exige reclutar a un varón de cada familia para luchar con el ejército imperial. Para salvar a su anciano padre de este deber, su única hija, Fa Mulán, se hace pasar por soldado y toma su lugar",
                clasification:"G",
                image:"https://i.pinimg.com/736x/cf/61/cd/cf61cdc7d0f595d87cf287a81d45addd.jpg",
                res:"Un remake visualmente impresionante, pero con menos corazón que la animación original. ⚔️🐉"
            },
            {
                id:3,
                title:"La Cenicienta",
                category:"Fantasy",
                year:"2015",
                sinopsis:"Una madrastra cruel convierte a Ella, la única hija de su marido muerto, en su sirvienta, pero una amable mendiga, unos ratones y una calabaza cambian para siempre la suerte de la joven.",
                clasification:"G",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYuBKKZLrNWqDqZaNQq4AgBxBGqxaPtOkySw&s",
                res:"Un live-action fiel al cuento clásico, con una magia encantadora y un diseño de vestuario espectacular. 👑"

            },
            {
                id:4,
                title:"El Rey Leon",
                category:"Fantasy",
                year:"2019",
                sinopsis:"Un joven príncipe león huye de su reino solo para aprender el verdadero significado de la responsabilidad y la valentía.",
                clasification:"PG",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjQwjgFF1Z4KD5ksbc1x9focPHePDi-CP8w&s",
                res:"Un remake visualmente asombroso, pero sin la misma emoción de la versión animada. 🦁"
            },
            {
                id:5,
                title:"Aladdin",
                category:"Fantasy",
                year:"2019",
                sinopsis:"La historia trata de un joven callejero que se enamora de la princesa Jasmine y que debe detener a un hechicero que quiere usurpar el trono. ",
                clasification:"PG",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhDrPO2vVZibMpr1QAa1fdPubg6FO1sgb4Gg&s",
                res:"Un live-action vibrante y colorido, con un Genio carismático de Will Smith y música nostálgica. "

            },
        ]

    }


]
export default function HomeScreenMovies({navigation}){
    const renderMovie = ({item})=>(
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('MovieDetail',{movie:item})}>
            
            <Image source={{uri:item.image}} style={styles.image}/>
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    );
    const rendercategory = ({item})=>(
        <View>
            <Text></Text>
        <Text style={styles.category} >{item.category}</Text>

            <FlatList
            data={item.movies}
            horizontal
            renderItem={renderMovie}
            keyExtractor={(movie)=>movie.id.toString()}
            />
        </View>
    );
    return(
        
        <SafeAreaView style={styles.fondo}>
            <Text style={styles.title2}>TEC M O V I E S</Text>

            <FlatList
            data={moviesall}
            renderItem={rendercategory}
            keyExtractor={(categor)=>categor.category}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
        padding:30,
        justifyContent:'center'
    },
    card:{
        marginBottom:0,
        backgroundColor:'black',
        borderRadius:10,
        overflow:'visible',
        borderColor:'white',
        borderWidth:2,
        marginTop:15,
        marginLeft:0,
        marginRight:10,
        width:170,
        height:220,
        alignItems:'center'
    },
    image:{
        width:'100%',
        height:150
    },
    title:{
        fontSize:20,
        fontWeight:'',
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:'5',
        marginEnd:'5',
        color:'white'
    },
    fondo:{
        backgroundColor:'black',
        alignItems:'center'
    },
    title2:{
        fontSize:30,
        fontWeight:'bold',
        color:'white',
        marginTop:20
    },
    category:{
        fontSize:20,
        color:'white',
        marginTop:10
    }



})
    
