import {useEffect, useReducer} from 'react'
import Profile_about_component from '../components/Profile_about_component'
//import ProfileAccount from '../components/Profile_Account.astro'
import Profile_account_component from '../components/Profile_account_component'
//import ProfilePhoto from '../components/Profile_photo.astro'
import Profile_photo_component from '../components/Profile_photo_component'
import ProfleEdit from '../components/Profile_edit.jsx'
import api from "../const/api"
import Profile_vues_component from '../components/Profile_vues_component'
import UpdatePassword from '../components/Update_password'
import ProfileComponent from '../components/Profile_component'
import './profile.css'

export default function ProfileComponent2 (props) {
    const visitedId=props.visitedId
    const state ={
        user:{},
        visitedId:props.visitedId,
        vues:[],
        moi:0,
        nbVue:0,
        choixOrientation:{defaultOpt:'Heterosexuel',defaultValue:'F',autreOpt:'Homosexuel',autreValue:'H'}            
    }
    const reduceState = (state,action) =>{
        if(action.type=='user'){
            return {user:action.user}
        }
        else if(action.type=='visitedId'){
            return {visitedId:action.visitedId}
        }else if(action.type=='vues'){
            return {vues:action.vues}
        }else if(action.type=='moi'){
            return {moi:action.moi}
        }else if(action.type=='nbVue'){
            return {nbVue:action.nbVue}
        }else if(action.type=='choixOrientation'){
            return {choixOrientation:action.choixOrientation}
        }else
            return
    }
    const [stateChange,dispatch]=useReducer(reduceState,state)
    //console.log(stateChange)

    const setOrientation = (gender,sexualOrientation) =>{
        var defaultOp='Heterosexuel'
        var defaultVal=sexualOrientation
        var autrOpt='Homosexuel'
        var autrVal='F'
        if(gender==sexualOrientation){
            defaultOp='Homosexuel'
            autrOpt='Heterosexuel'
        }
        if((gender=='F' && autrOpt=='Heterosexuel') || (gender=='H' && autrOpt=='Homosexuel') ){
            autrVal='H'
        }
        return {defaultOpt:defaultOp,defaultValue:defaultVal,autreOpt:autrOpt,autreValue:autrVal}
        //console.log(defaultOpt)
    }

    const initialisation = ()=>{
        var current_user=JSON.parse(localStorage.getItem('user'))[0]
        current_user=current_user.id
        //this.setState({user:JSON.parse(localStorage.getItem('user'))[0]})
        console.log(localStorage.getItem('user'))
        console.log(current_user)
        console.log(current_user.id)
        //console.log(this.state.visitedId)
        if(visitedId!=current_user){
            fetch(api('users/id/'+visitedId)).then((response) =>{
                response.json().then((res)=>{
                    dispatch({type:'user',user:res[0]})
                    //this.setState({user:res[0]})
                    const ori=setOrientation(res[0].sexe,res[0].orientationSxl)
                    //this.setState({choixOrientation:ori})
                    dispatch({type:'choixOrientation',choixOrientation:ori})
                    console.log(ori)
                    localStorage.setItem('userProfil',JSON.stringify(res[0]))
                    localStorage.setItem('moi',0)
                })
            });
            var obj={'visitor_id':current_user,'visited_id':visitedId}
            const jsonString = JSON.stringify(obj);
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Accept", "application/json");

        //console.log(jsonString);
            fetch(api('views/add'), {
                headers: myHeaders,
                method:'POST',
                body:jsonString
            });
        }else{            
            localStorage.setItem('userProfil',localStorage.getItem('user'))
            localStorage.setItem('moi',1)
            //this.setState({moi:1})
            const us=JSON.parse(localStorage.getItem('user'))[0]
            dispatch({type:'user',user:us})
            dispatch({type:'moi',moi:1})
            //this.setState({user:us})            
            const ori=setOrientation(us.sexe,us.orientationSxl)
            dispatch({type:'choixOrientation',choixOrientation:ori})
            //this.setState({choixOrientation:ori})
            console.log(ori)
        }
        fetch(api('views/visitor/'+visitedId)).then((response) => {
            response.json().then((res)=>{
                //this.setState({vues:res,nbVue:res.length})
                dispatch({type:'vues',vues:res})
                dispatch({type:'nbVues',nbVue:res.length})
            })
        })
    }

    useEffect(()=>{
        console.log('STATE CHANGE')
        console.log(stateChange)
        initialisation()
    })

    return(
        <>
                {stateChange.moi==0 &&  <ProfileComponent user={JSON.stringify([stateChange.user])} visitedId={stateChange.visitedId}  />}
                
                <section className="sec-product-detail bg0 p-t-65 p-b-60">
                    <div className="container">
                        <div className="p-t-33">
                            <div className="profile-pic-div bg-dark">
                                <img src={'/'+stateChange.user.photoDeProfil} id="imgPhoto"  />                                
                            </div>
                            <div className="mt-4">
                                <h2 className="text-center">{stateChange.user.pseudo}</h2>
                                <p className="text-center">{stateChange.nbVue} vue(s)</p>
                            </div>
                        </div>

                        <div className="bor10 mt-4 p-t-43 p-b-40">
                            <div className="tab01">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item p-b-10">
                                        <a className="nav-link active" data-toggle="tab" href="#about" role="tab">A propos</a>	
                                    </li>
                                    
                                    {stateChange.moi==1 &&
                                    <li className="nav-item p-b-10">
                                        <a className="nav-link" data-toggle="tab" href="#myAccount" role="tab">Mon compte</a>
                                    </li>
                                    }

                                    <li className="nav-item p-b-10">
                                        <a className="nav-link" data-toggle="tab" href="#photo" role="tab">Photo</a>
                                    </li>

                                    {stateChange.moi==1 &&
                                    <li className="nav-item p-b-10">
                                        <a className="nav-link" data-toggle="tab" href="#vues" role="tab">Vues</a>
                                    </li>
                                    }
                                </ul>
                                
                                <div className="tab-content p-t-43" style={{"display": "block"}}>
                                    
                                    <Profile_about_component user={stateChange.user} moi={stateChange.moi} orientation={stateChange.choixOrientation.defaultOpt} />
                                    
                                    <div className="modal fade" id="profileEditModal" tabindex="-1" role="dialog" aria-labelledby="profileEditModalTitle" data-backdrop="static" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered modal-lg" style={{"top": "15%"}} role="document">
                                            <ProfleEdit user={stateChange.user} choixOrientation={stateChange.choixOrientation}  />
                                        </div>
                                    </div>

                                    {stateChange.moi==1&&
                                    <><Profile_account_component user={stateChange.user} />
                                    <div className="modal fade" id="updatePasswordModal" tabindex="-1" role="dialog" aria-labelledby="updatePasswordModalModalTitle" data-backdrop="static" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered modal-lg" style={{"top": "15%"}} role="document">
                                            <UpdatePassword user={stateChange.user}  />
                                        </div>
                                    </div></>
                                    }
                                    <Profile_photo_component moi={stateChange.moi} user={stateChange.user}  />

                                    {stateChange.moi==1&&
                                    <Profile_vues_component vues={stateChange.vues} />
                                    }
                                    
                                    
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>
                

            </>
    )
}