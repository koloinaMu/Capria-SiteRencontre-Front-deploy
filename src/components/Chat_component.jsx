//import ChatComponent from './Chat'
import Chat_firebase from './Chat_firebase'
import {useState,useEffect,Component} from 'react'
import api from '../const/api'
import {  db } from "../firebase";
import Cookies from 'js-cookie'
import { collection, addDoc, serverTimestamp, query, limit, orderBy, onSnapshot, where, Query,Timestamp } from "firebase/firestore";


export class Chat extends Component{

    constructor(){
        super()
        this.state={
            user:JSON.parse(localStorage.getItem('user'))[0],
            users: [],
            nbMsg: 0,
            checkAbo:true,
            abonnement: {},
            chatActive: {},        
        };   
    }

    /*state = {
        user:JSON.parse(localStorage.getItem('user'))[0],
        users: [],
        nbMsg: 0,
        checkAbo:true,
        abonnement: {},
        chatActive: {},        
    };    */

    initialisation =  ()=>{
        var id=window.location.href.split('=')[1]
        console.log('ID HREF')
        console.log(id)
        const abo=localStorage.getItem('abonnement')
        const limitMsg=5
        if (abo==''){
            this.setState({abonnement:(JSON.stringify({})),checkAbo:false})
            /*abonnement=(JSON.stringify({}))
            checkAbo=(false)*/
        }else if(abo!=null){
            //abonnement=(JSON.parse(abo))
            this.setState({abonnement:JSON.parse(abo)})
            const aboJson=JSON.parse(abo)
            /* get nb de messages deja envoye*/
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Accept", "application/json");
            const objNb={sender_id:this.state.user.id,date_debut:aboJson.date_debut}
            const objString=JSON.stringify(objNb)
            /*fetch(api("messages/nbMsg"), {
                headers: myHeaders,
                method:'POST',
                body:objString
            }).then((res)=>{
                res.json().then((res)=>{
                    //nbMsg=(res[0].nb)
                    const nb=res[0].nb
                    this.setState({nbMsg:nb})
                    localStorage.setItem('nbMsg',nb)
                    var check=0
                    console.log(nb>=limitMsg)
                    if(nb>=limitMsg){
                        //checkAbo=(false)
                        check=1
                        this.setState({checkAbo:false})
                    }
                    console.log('NB MSG')
                    console.log(nb)
                    console.log(check)
                    localStorage.setItem('checkAbo',check)
                })
            })*/
            const uss=JSON.parse(localStorage.getItem('user'))[0]
            //console.log(Timestamp.fromDate(new Date(aboJson.date_debut)))
            
            const q1 = query(
                collection(db, "messages"),
                where('sender_id','==',uss.id),
                where('send_time','>=',new Date(aboJson.date_debut)),
                where('send_time','<=',new Date(aboJson.date_fin))
            );
            //console.log(q1)
            const data1 = onSnapshot(q1, (QuerySnapshot) => {
                let messages1 = [];
                QuerySnapshot.forEach((doc) => {
                    messages1.push({ ...doc.data(), id: doc.id });
                });
                const nb=messages1.length
                this.setState({nbMsg:nb})
                localStorage.setItem('nbMsg',nb)
                Cookies.set('nbMsg',nb)
                var check=0
                //console.log('NB MSG INIT')
                //console.log(nb)
                //console.log(limitMsg)
                if(nb>=limitMsg){
                    this.setState({checkAbo:false})
                    check=1
                }
                //console.log(check)           
                localStorage.setItem('checkAbo',check)
                Cookies.set('checkAbo',check)
            });
        }
        var obj={'id':this.state.user.id,'filtres':[]}
        console.log(obj)
        const jsonString = JSON.stringify(obj);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept", "application/json");
        fetch(api("userList"), {
            headers: myHeaders,
            method:'POST',
            body:jsonString
        }).then((res)=>{
            res.json().then((res)=>{
                /*users=(res)
                chatActive=(users[0])*/
                var active=res[0]
                console.log('COOKIES')
                console.log(Cookies.get('idChatActive'))
                //const idChatActive=Cookies.get('idChatActive')
                if(id!=undefined){
                    //const idChatActive=this.props.idChatActive
                    if(res.findIndex(i => i.id==id) > -1){
                        //chatActive=users.filter(i => i.id == idChatActive)[0]
                        //chatActive=(users.filter(i => i.id == idChatActive)[0])
                        active=(res.filter(i => i.id == id)[0])
                    }
                }else{
                    id=active.id
                }
                //localStorage.setItem('activatedChat',JSON.stringify(active))
                localStorage.setItem('userChatActive',JSON.stringify(active))
                localStorage.setItem('activatedChat',active.id)  
                Cookies.set('idUserChatActive',id)          
                Cookies.set('userChatActive',JSON.stringify(active))
                this.setState({users:res,chatActive:active})                
            })
        })  
        
    };
    //initialisation();

    componentDidMount(){
        this.initialisation()
        window.addEventListener('beforeunload',()=>{
            const domaine=window.location.protocol+'//:'+window.location.hostname
            //alert(domaine)
            Cookies.remove('idUserChatActive')        
            Cookies.remove('nbMsg')        
            Cookies.remove('checkAbo')        
            Cookies.remove('userChatActive')
        })
    }
    
    render(){
        //this.initialisation()
        /*{
            this.state.chatActive!={}&&
            (<Child data={this.state} />)
        }*/
        //initialisation()
        /*return(<ChatComponent user={this.state.user} users={this.state.users} nbMsg={this.state.nbMsg} checkAbo={this.state.checkAbo} abonnement={this.state.abonnement} chatActive={this.state.chatActive} key={this.state.chatActive.id}  />)*/
        if(Cookies.get('userChatActive')&&Cookies.get('idUserChatActive')&&Cookies.get('checkAbo')&&Cookies.get('nbMsg')){
            const userActive=JSON.parse(Cookies.get('userChatActive'))
            return(<Chat_firebase user={this.state.user} users={this.state.users} nbMsg={Cookies.get('nbMsg')} checkAbo={Cookies.get('checkAbo')} abonnement={this.state.abonnement} chatActive={userActive} key={userActive.id}  />)
        }
        /*return (
            {this.state.chatActive && 
                (<ChatComponent user={this.state.user} users={this.state.users} nbMsg={this.state.nbMsg} checkAbo={this.state.checkAbo} abonnement={this.state.abonnement} chatActive={this.state.chatActive}  />)
            }            
            
        );*/
    }
    
}
const Child = ({data}) => (
    <ChatComponent user={data.user} users={data.users} nbMsg={data.nbMsg} checkAbo={data.checkAbo} abonnement={data.abonnement} chatActive={data.chatActive}  />
);
export default Chat