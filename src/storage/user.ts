export function intializeUser(username:string,sub:string){
    // intialize the user to localstore
    localStorage.setItem("user",username)
    localStorage.setItem("sub",sub)
}

export function getUser():string{
    return "ashish"
}
export function getSub():boolean{
    return false
}

export function addToFav (id:number){
    console.log("reciving id",id);
}
export function createPlaylist (name:string){
    // create a playlist and add 
}
export function returnPlaylist() :string[]{
return ["ashish"]
}
export function addToPlaylist (id:number):void{
    console.log("reciving id",id);
}
export {}