import "./Card.scss"

const Card = ({data}) => {
  return (
    <div className="card-container">
    {
       data.map(({id,name,job,comment,img})=>{
            return(
                <div key={id} className="card">
                    <h1>{name}</h1>
                    <h2>{job}</h2>
                    <p>{comment}</p>
                    <img src={img} alt="" />    
                    <div className="btn-div">
                        <button className="btn-div--small">Small</button>
                        <button className="btn-div--large">Large</button>
                    </div>
                </div>
            )
       })

    }    
    </div>
  )

}

export default Card