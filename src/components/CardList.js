import Card from './Card.js';


const CardList = (props) => {
    
    return(
        <div>
            {props.profiles.map(profile => (
                <Card {...profile}/>
            ))}
        </div>
    );
}
export default CardList; 