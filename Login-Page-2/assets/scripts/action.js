let states={
    'login':{
        'active':1,
        'label':'Login'
    },
    'register':{
        'active':0,
        'label':"Sign Up"
    }
};

window.onload=()=>{

    document.querySelector("#toggle").addEventListener("click",(e)=>{
        let active_state = states['login']['active']?'login':'register';
        let disabled_state = states['login']['active']?'register':'login';
        document.querySelector("#toggle").innerText= states[active_state]['label'];
        document.querySelector("#heading").innerText = states[disabled_state]['label'];
        document.querySelector("#"+active_state+"-form").style.display='none';
        document.querySelector("#"+disabled_state+"-form").style.display='flex';
        states[active_state]['active']=0;
        states[disabled_state]['active']=1;
        console.log(states);
    });
}