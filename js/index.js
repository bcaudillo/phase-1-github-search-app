


addEventListener("submit",function(e){
    e.preventDefault()
    let search = document.querySelector("#search").value
    modifySearch = search.split(' ').join('')

    fetch("https://api.github.com/users/"+modifySearch)
    .then(res => res.json())
    .then(object =>{
        // let repos = array.repos_url
        let li = document.createElement('li')
        let p = document.createElement('p')
        let p2 = document.createElement('p')
    
        let login = object.login
        let avatar = object.avatar_url
        let url = object.url
        

        let img = document.createElement('img')
        img.src = avatar
        p.innerText = login 
        p2.innerText = url 
        
        li.appendChild(p2)
        li.appendChild(p)
        li.appendChild(img)

        let list = document.querySelector('#user-list')
        list.appendChild(li)


        
        
        
        p2.addEventListener('click',function(e){
            let repos = object.repos_url
            fetch(repos)
            .then(resp=> resp.json())
            .then((repoObj)=>{
                
                
                
                let list2 = document.querySelector('#repos-list')
                

                repoObj.forEach(obj=>{
                    repo = document.createElement("div")
                    repo.className = 'repo'
                    repo.innerText = obj.name
                    list2.appendChild(repo)
                })
            

                
                
                // // let name = repoObj.name
                // // p3.innerText = name


                
                
            })

            })
        })
    }) 




// function submitFunction(event){
//     const li = document.createElement('li')
//     const p = document.createElement('p')
//     li.textContent = event
//     form.appendChild(li)
