import React,{useEffect, useState, Suspense} from 'react'
import "./PostcodesDetails.css"
import { useSelector } from "react-redux";
import Collapse from 'react-bootstrap/Collapse';
import {getBox} from "../../utils/Utils"
import MapDiv from "../MapDiv/MapDiv";



const PostcodesDetails = () => {   
    const [postCodeInfo, setpostCodeInfo] = useState({});    
    const { drawerOpenFlag, postCodeDetails, loading  } = useSelector((state) => ({
        drawerOpenFlag: state.dashboard.drawerOpen,       
        postCodeDetails: state.postCodes.postCodeDetilas,
        loading: state.postCodes.loading
      }));

    const formatOutput =(num) =>{
          if (num > 10) 
              return parseInt(num);
          return Math.round(num*100)/100;
    }

    let divFlag = drawerOpenFlag;
    let c = 24902.0; // earth circumference in miles
	let d = Math.cos( postCodeInfo.latitude*Math.PI/180.0 )*c/360.0;
    let south = formatOutput(1.609344*d) + " kilometers"
    let north = formatOutput(d) + " miles";
    let box = getBox(postCodeInfo.latitude, postCodeInfo.longitude)

    let center = [postCodeInfo.latitude, postCodeInfo.longitude]
    
    useEffect(()=>{
        
        setpostCodeInfo(postCodeDetails)
    },[postCodeDetails])

    
    
    return (
       <>
       <Suspense fallback={loading && <h1>Loading content...</h1>}>
       
         {divFlag &&
         <Collapse in={divFlag}>
        <div className="todolist-container">            
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <div className="postcode-container">
                    <div className="container ">
                            <div className="row font-weight-bold py-2">
                                <div className="col todo-item-active">
                                    Country
                                </div>
                                <div className="col todo-item-active">
                                    {postCodeInfo.country}
                                </div>
                                
                            </div>
                            <div className="row py-2">
                                <div className="col todo-item-active">
                                    Region
                                </div>
                                <div className="col todo-item-active">
                                    {postCodeInfo.region}
                                </div>
                               
                            </div>
                            <div className="row py-2">
                                <div className="col todo-item-active">
                                    Admin District
                                </div>
                                <div className="col todo-item-active">
                                    {postCodeInfo.admin_district}
                                </div>
                                
                            </div>
                            <div className="row py-2">
                                <div className="col todo-item-active">
                                    Parliamentary Constituency
                                </div>
                                <div className="col todo-item-active">
                                    {postCodeInfo.parliamentary_constituency}
                                </div>
                               
                            </div>
                            <div className="row py-2">
                                <div className="col todo-item-active">
                                        South
                                </div>
                                <div className="col todo-item-active">
                                    {`${box.south} / ${south}`}
                                </div>
                               
                            </div>
                            <div className="row py-2">
                                <div className="col todo-item-active">
                                        North
                                </div>
                                <div className="col todo-item-active">
                                    {`${box.north} / ${north}`}
                                </div>
                               
                            </div>
                            
                        </div>       
                    </div>
                </div>
                <div className="col-md-6 col-md-offset-3">
                
                    <div className="map-container">
                        <MapDiv center={center}/>
                    </div>
                
                </div>
            </div>
        </div>
        </Collapse>
        }
        </Suspense>
        </>
    )
}

export default PostcodesDetails