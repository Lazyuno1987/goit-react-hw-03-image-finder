import {Img} from './ImageGalleryItem.styled'

export const ImageGalleryItem = ({ webformatURL}) => {
    return (
       <li>
  <Img  src={webformatURL} alt="pict" />
</li> 
    )
}