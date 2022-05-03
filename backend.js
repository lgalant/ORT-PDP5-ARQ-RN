
export const getAll=(setCont)=> {
fetch('http://templateapiort.azurewebsites.net/api/persona/')
.then(resp => resp.json())
.then(respJson => setCont(respJson))
.catch(err=> console.log("Error:" , err))
}


export const PutContact=(id, nombre, fecha)=> {
    fetch('http://templateapiort.azurewebsites.net/api/persona/'+id, {
        method:'PUT',
        headers: {
            'Content-Type': 'application/json',
          },
        body:JSON.stringify({Id:id, Nombre:nombre, FechaNac:fecha})
    })
    .then(resp => console.log("OK:", resp))
    .catch(err=> console.log("Error in PUT:" , err))
    }

    export const PostContact=( nombre, fecha)=> {
        fetch('http://templateapiort.azurewebsites.net/api/persona/', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body:JSON.stringify({ Nombre:nombre, FechaNac:fecha})
        })
        .then(resp => console.log("OK:", resp))
        .catch(err=> console.log("Error in POST:" , err))
        }


    export const DeleteContact=( id)=> {
        fetch('http://templateapiort.azurewebsites.net/api/persona/'+id, {
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json',
                },
        })
        .then(resp => console.log("OK:", resp))
        .catch(err=> console.log("Error in DELETE:" , err))
        }