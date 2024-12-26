interface RatingProp {
    value: number;
}

const Rating = ({value}:RatingProp) => {
    return (
        <div className="widget">
            {
                [...Array(5)].map( (_,index) => (
                    <div className={index < value?"star filled":"star"}> 

                    </div>
                ))
            }
        </div>
    );
}

export default Rating;