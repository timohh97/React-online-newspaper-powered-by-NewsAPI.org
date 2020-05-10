import React,{Component} from 'react'
import './App.css'

class Health extends Component{
    constructor(props) {
        super(props)
        this.state = {
    
          articles: []
    
        }
      }
    
      componentDidMount() {
        fetch('https://newsapi.org/v2/top-headlines?country=de&category=health&apiKey=cad0f580e62d4dc8bbc84a718a0efef5')
          .then(response => response.json())
          .then(data =>
            this.setState({
              articles: data.articles
            }
            )
          );
      }
    
      render() {
        console.log(this.state)
        return (<div><h1 id="header">Gesundheit</h1><br></br><br></br><br></br>
          {this.state.articles.map(item => {
    
            return (<div id="article"><h2>{item.title}</h2>
              <img id="picture" src={item.urlToImage} alt={item.urlToImage} style={{ width: '25vw' }} />
              <h4>{item.source.name}</h4>
              <h4>{item.author}</h4>
              <h4>{item.publishedAt}</h4>
              <p>{item.description}</p>
              <p>{item.content}</p>
              <a href={item.url}>Mehr lesen (Quelle)</a>
              <br></br>
              <br></br>
              <a href={item.urlToImage}>Bildquelle</a>
            </div>
            )
    
          })}
        </div>
    
        )
      }
}

export default Health;