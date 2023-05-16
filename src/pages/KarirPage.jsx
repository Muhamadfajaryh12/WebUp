import React,{useState} from "react";
import Card from "../components/Card";
import ListKarir from "../components/ListKarir";
import clock from "../image/Clock.png"
import badge from "../image/Badge.png"
import code from "../image/Code.png"
import { useEffect } from "react";
import DATA from "../data/karir.JSON";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
const KarirPage = () =>{
    const [data,setData]=useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = searchInput.length>1 ? filteredResults.slice(indexOfFirstPost, indexOfLastPost) : data.slice(indexOfFirstPost, indexOfLastPost);
    useEffect(()=>{
        fetch(DATA).then((response)=>{
            return response.json()
        }).then((responseJson)=>{
            setData(responseJson.data)
        })
    },[])
    const keywordChange = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = data.filter((item) =>  {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(data)
        }

    }
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return(
        <>
        <div className="mx-auto mt-12 w-9/12">
            <h1 className="text-4xl font-bold text-indigo-400 text-center">Job Vacancy</h1>
            <p className="text-center m-2">Let's join with <span className="font-semibold">WebUp</span>. Because work is there to be enjoyed, not to be searched for</p>
            <SearchBar searchValue={searchInput} keywordChange={keywordChange}/>
            <ListKarir 
            data={currentPosts}
           />
            <Pagination
            postsPerPage={postsPerPage}
            totalPosts={searchInput.length>1 ? filteredResults.length : data.length}
            paginate={paginate}
            currentPage={currentPage}
            />
        </div>
        <h1 className="mt-12 text-4xl font-bold text-indigo-400 text-center">Work at WebUp</h1>
        <div className="mx-auto mt-18 w-9/12 flex justify-around flex-wrap my-10">
            <Card img={badge} title={"Collaborate and Communicate"} background={" rgb(248 113 113)"} sclr ={"#ef4444"} description={"Work together and discuss all issues to focus on work"}/>
            <Card img={code} title={"Learning and Development"} background={"rgb(96 165 250)"} sclr={"#3b82f6"} description={"Get free courses and get mentoring from senior employees"}/>
            <Card img={clock} title={"Work From Everywhere"} background={"rgb(250 204 21)"} sclr={"#eab308"} description={"Can work from anywhere and flexible working hours"}/>
        </div>
        </>
    )
}

export default KarirPage