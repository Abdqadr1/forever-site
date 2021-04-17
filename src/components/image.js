const IMAGE = (props) => {
    return ( 
        (() => {
            let size = Number(props.size);
            if(size === 1){
                return <img className="single-image" src={props.image} alt={props.alt} />
            } else {
                const images = props.images.map(image => {
                    return <img src={image.image} alt={image.alt} />
                })
                return (
                    <div className="image-gallery">
                       {images} 
                    </div>
                )
            }
        })()
     );
}
 
export default IMAGE;