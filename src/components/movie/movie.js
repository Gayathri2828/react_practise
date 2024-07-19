function Movie(){
    const [views, setViews] = useState(0);
    useEffect(()=>{
       const id = setInterval(()=>{
        setViews((views) => views + 
       })
       return () => clearInterval(id);
    },[]);
    return(
        <>
        <MovieViewsRealtime
          title="Heat"
          views={views}
          releaseDate="December 15,1995"       
        />

        </>
    )
    })
}
export default Movie()