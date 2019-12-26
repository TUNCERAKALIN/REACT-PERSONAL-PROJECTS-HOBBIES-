import React, { Component } from 'react'
import ReactDOM from "react-dom"


const BASE_URL ="https://jsonplaceholder.typicode.com/posts"

export class Fetching extends Component {
    
    state ={
        isLoading:false,
        error: null,
        posts:[]
    }
    componentDidMount(){
        this.setState({isLoading:true})
        fetch(this.state.url)
        .then(res=>{
            if(res.ok){
               return res.json()
            }
            else {
                throw Error("Action can not be completed")
            }
        })
            
        .then(posts=>this.setState({posts,isLoading:false})
        )
        .catch(error=> this.setState({error}))
    }
    render() {
        return this.props.children(this.state)
    }
}

class AppRenderProps extends React.Component {
    render() {
        return (
            <div>
              <h1>With Render Props</h1>  
              <Fetching url={BASE_URL}>
                  {({Error, isLoading, posts})=>{
                      if(Error){
                        return <p style={{ color: "red"}}>{Error.message}</p>
                    }
                    if(isLoading){
                        return <p>Please be patient.Still loading...</p>
                    }
                    return (
                        <div>
                            <h1>App I am Fetching Data In React</h1>
                            {posts.map(posts=>(
                                <>
                                 <h3>{posts.title}</h3>
                                 <p>{posts.body}</p>
                                </>
                            ))}
                            
                        </div>
                    )
                  }}
              </Fetching>
            </div>
        )
    }
}

export default AppRenderProps
// export default Fetching


