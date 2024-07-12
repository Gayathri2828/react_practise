

export const ListParentOrdered = () =>{
    return <ol>
        <ListItems></ListItems>
    </ol>
};

export const ListParentUnordered = () =>{
    return <ul>
        <ListItems></ListItems>
    </ul>
};



// const ListItems=()=>{
//     const fruitlist=["Apple","Banana","Orange","Grapes"]
//     return (
//         <div>
//             {fruitlist.map((eachFruit)=>{
//                     return <h4>{eachFruit}</h4>
                    
//                 })
//             }
            
//         </div>
//     );
// };



const ListItems= () => {
    const iplTeams=[
        {
            teamName:"CSK",
            teamPlayers:["Dhoni","Kholi","Rahul"],
            won:5,
            wonYears:[2015,2012,2016,2017],
            teamLogos:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
        teamName:"SRH",
        teamPlayers:["Cumins","Kholi","Rahul"],
        won:5,
        wonYears:[2015,2012,2016,2017],
        teamLogos:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
},
{
    teamName:"RCB",
    teamPlayers:["Cumins","Kholi","Rahul"],
    won:8,
    wonYears:[],
    teamLogos:"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
];


function filterData(iplTeams) {
    const newTeams = iplTeams.filter(eachTeam=>eachTeam.won>=5)
    return newTeams;
}



    return (
        <div>
        {filterData(iplTeams).map((eachTeam)=>{
                   return(
                    <div>
                        <h2>{eachTeam.teamName}</h2>
                        <img src={eachTeam.teamLogos} width={100} height={100}/>
                        {eachTeam.teamPlayers.map((eachPlayers)=>{
                                return(
                                    <div>
                                    <h6>{eachPlayers}</h6>
                                    </div>
                                )
                            })
                        }
                    </div>
                   )
               })
          }





            {/* {fruitlist.map((eachFruit)=>{
                    return <h4>{eachFruit}</h4>
                    
                })
            } */}
            
        </div>
    );
};