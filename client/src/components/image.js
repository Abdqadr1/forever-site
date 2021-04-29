const IMAGE = (props) => {
    return ( 
        (() => {
            let size = Number(props.size);

            if(size === 1){
                return <img className={props.class} src={props.image} alt={props.alt} width={props.width} height={props.height}/>
            } else {
                let images = props.images.map((image, index) => {
                    return <img src={image.image} alt={image.alt} key={index}  className={image.class}/>
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