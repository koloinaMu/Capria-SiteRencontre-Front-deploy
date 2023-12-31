
//import ProfileAbout from '../components/Profile_about.jsx'
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
import {Component,UNSAFE_componentWillReceiveProps} from 'react'
import Cookies from 'js-cookie'
//import {useLocation} from 'react-router-dom'
import './profile.css'

export class Profile_component1 extends Component{

    constructor(props){
        super(props)
        this.visitedId=this.props.visitedId
        //console.log('CONSTRUCTEURRRR')
        //console.log(this.visitedId)
        //console.log(this)
       // console.log(this.props)
        this.state ={
            user:{},
            visitedId:this.props.visitedId,
            vues:[],
            moi:0,
            nbVue:0,
            choixOrientation:{defaultOpt:'Heterosexuel',defaultValue:'F',autreOpt:'Homosexuel',autreValue:'H'}            
        }
        //console.log(this.props.visitedId)
        this.initialisation(this.visitedId)
    }
    

    user={}
    moi=0
    orientation={}
    vues=[]
    
    setOrientation = (gender,sexualOrientation) =>{
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

    initialisation = ()=>{
        const id=window.location.href.split('=')[1]
        setTimeout(()=>
        {
            var current_user=JSON.parse(localStorage.getItem('user'))[0]
            current_user=current_user.id 
            if(id!=current_user){
                console.log('INIT GET USER')
                console.log(id)
                fetch(api('users/id/'+id)).then((response) =>{
                    response.json().then((res)=>{
                        this.setState({user:res[0]})
                        Cookies.set('userProfilActive',JSON.stringify(res[0]))
                        this.user=res[0]
                        const ori=this.setOrientation(res[0].sexe,res[0].orientationSxl)
                        this.setState({choixOrientation:ori})
                        this.orientation=ori
                        //console.log(ori)
                        localStorage.setItem('userProfilActive',JSON.stringify(res[0]))
                        localStorage.setItem('moi',0)
                        Cookies.set('moi',0)
                    })
                });
                console.log('INIT VISITOR')
                console.log(id)
                var obj={'visitor_id':current_user,'visited_id':id}
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
                this.setState({moi:1})
                const us=JSON.parse(localStorage.getItem('user'))[0]
                Cookies.set('userProfilActive',JSON.stringify(us))
                this.setState({user:us})      
                this.user=us
                this.moi=1     
                Cookies.set('moi',1) 
                const ori=this.setOrientation(us.sexe,us.orientationSxl)
                this.setState({choixOrientation:ori})
                this.orientation=ori
                //console.log(ori)
            }
            
            console.log('INIT ADD VISITOR')
            console.log(id)
            fetch(api('views/visitor/'+id)).then((response) => {
                response.json().then((res)=>{
                    this.setState({vues:res,nbVue:res.length})
                    this.vues=res
                })
            })
        },5000)
    }    
    componentDidMount(){
        //console.log('VISITEDID')
        //console.log(this.props.visitedId)
        //console.log(this.state.visitedId)
        //console.log(window.location)
        //console.log(window.location.href.split('='))
        const id=window.location.href.split('=')[1]
        Cookies.set('idUserProfilActive',id)
        
        if(id){
            console.log('ID EXISTE INIT')
            console.log(id)
            //console.log('VISITEDID')
            //console.log(this.props.visitedId)
            this.initialisation()
            window.addEventListener('beforeunload',()=>{
                const domaine=window.location.protocol+'//:'+window.location.hostname
                //alert(domaine)
                Cookies.remove('idUserProfilActive')        
                Cookies.remove('userProfilActive')
                Cookies.remove('moi')
            })
        }
        //alert('WILL MOUNT')
    }
    componentWillUnmount(){
        
        Cookies.remove('idUserProfilActive', { path: '/', domain: window.location.hostname })        
        Cookies.remove('userProfilActive', { path: '/', domain: window.location.hostname })
        Cookies.remove('moi', { path: '/', domain: window.location.hostname })
    }

    render(){                   
        if(Cookies.get('userProfilActive')&&Cookies.get('moi')){
            //console.log(Cookies.get('userProfilActive'))
            const uss=JSON.parse(Cookies.get('userProfilActive'))
            console.log('RENDER SATRIA EFA MISY USER DIA MISY MOI')
            console.log(uss)
            //console.log(uss)
            const moiii=Cookies.get('moi')  
            const orientation=this.setOrientation(uss.sexe,uss.orientationSxl)
            return(
                <>
                    {/*this.state.moi==0 &&  <ProfileComponent user={JSON.stringify([this.state.user])} visitedId={this.state.visitedId}  />*/}
                    {moiii==0 &&  <ProfileComponent user={JSON.stringify([uss])} visitedId={uss.id}  />}
                    
                    <section className="sec-product-detail bg0 p-t-65 p-b-60">
                        <div className="container">
                            <div className="p-t-33">
                                <div className="profile-pic-div bg-dark">
                                    {/*<img src={'/'+this.state.user.photoDeProfil} id="imgPhoto"  />*/}
                                    <img src={'/'+uss.photoDeProfil} id="imgPhoto"  />                                
                                </div>
                                <div className="mt-4">
                                    {/*<h2 className="text-center">{this.state.user.pseudo}</h2>
                                    <p className="text-center">{this.state.nbVue} vue(s)</p>*/}
                                    <h2 className="text-center">{uss.pseudo}</h2>
                                    <p className="text-center">{this.state.nbVue} vue(s)</p>
                                </div>
                            </div>
    
                            <div className="bor10 mt-4 p-t-43 p-b-40">
                                <div className="tab01">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li className="nav-item p-b-10">
                                            <a className="nav-link active" data-toggle="tab" href="#about" role="tab">A propos</a>	
                                        </li>
                                        
                                        {/*this.state.moi==1 &&
                                        <li className="nav-item p-b-10">
                                            <a className="nav-link" data-toggle="tab" href="#myAccount" role="tab">Mon compte</a>
                                        </li>*/
                                        }
                                        {moiii==1 &&
                                        <li className="nav-item p-b-10">
                                            <a className="nav-link" data-toggle="tab" href="#myAccount" role="tab">Mon compte</a>
                                        </li>
                                        }
    
                                        <li className="nav-item p-b-10">
                                            <a className="nav-link" data-toggle="tab" href="#photo" role="tab">Photo</a>
                                        </li>

                                        {/*this.state.moi==1 &&
                                        <li className="nav-item p-b-10">
                                            <a className="nav-link" data-toggle="tab" href="#vues" role="tab">Vues</a>
                                        </li>*/
                                        }
                                        {moiii==1 &&
                                        <li className="nav-item p-b-10">
                                            <a className="nav-link" data-toggle="tab" href="#vues" role="tab">Vues</a>
                                        </li>
                                        }
                                    </ul>
                                    
                                    <div className="tab-content p-t-43" style={{"display": "block"}}>
                                        
                                        {/*<Profile_about_component user={this.state.user} moi={this.state.moi} orientation={this.state.choixOrientation.defaultOpt} />*/}
                                        <Profile_about_component user={uss} moi={moiii} orientation={orientation.defaultOpt} />
                                        
                                        <div className="modal fade" id="profileEditModal" tabindex="-1" role="dialog" aria-labelledby="profileEditModalTitle" data-backdrop="static" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered modal-lg" style={{"top": "15%"}} role="document">
                                                {/*<ProfleEdit user={this.state.user} choixOrientation={this.state.choixOrientation}  />*/}
                                                <ProfleEdit user={uss} choixOrientation={orientation}  />
                                            </div>
                                        </div>
    
                                        {/*{this.state.moi==1&&
                                        <><Profile_account_component user={this.state.user} />
                                        <div className="modal fade" id="updatePasswordModal" tabindex="-1" role="dialog" aria-labelledby="updatePasswordModalModalTitle" data-backdrop="static" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered modal-lg" style={{"top": "15%"}} role="document">
                                                <UpdatePassword user={this.state.user}  />
                                            </div>
                                        </div></>
                                        }
                                        <Profile_photo_component moi={this.state.moi} user={this.state.user}  />
    
                                        {this.state.moi==1&&
                                        <Profile_vues_component vues={this.state.vues} />
                                        }*/}
                                        {moiii==1&&
                                        <><Profile_account_component user={uss} />
                                        <div className="modal fade" id="updatePasswordModal" tabindex="-1" role="dialog" aria-labelledby="updatePasswordModalModalTitle" data-backdrop="static" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered modal-lg" style={{"top": "15%"}} role="document">
                                                <UpdatePassword user={uss}  />
                                            </div>
                                        </div></>
                                        }
                                        <Profile_photo_component moi={moiii} user={uss}  />
    
                                        {moiii==1&&
                                        <Profile_vues_component vues={this.state.vues} />
                                        }
                                        
                                        
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </section>
                    
    
                </>
            )   
        }//else(this.render())       
    }
}

export default Profile_component1