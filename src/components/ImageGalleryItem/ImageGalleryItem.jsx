import {Img} from './ImageGalleryItem.styled'

export const ImageGalleryItem = ({onClick, webformatURL}) => {
    return (
       <li onClick={onClick}>
  <Img  src={webformatURL} alt="pict" />
</li> 
    )
}