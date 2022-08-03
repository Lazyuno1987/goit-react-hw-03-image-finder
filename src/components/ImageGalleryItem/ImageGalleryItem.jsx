import {Img} from './ImageGalleryItem.styled'

export const ImageGalleryItem = ({onClick, largeImage, webformatURL}) => {
    return (
        <li 
    
        >
  <Img  onClick={() => {
          onClick(largeImage);
            }}
        src={webformatURL} alt="pict" />
</li> 
    )
}