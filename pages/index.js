import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'
// import { blur, pixelate } from '@cloudinary/url-gen/actions/effect'
import { ocr } from '@cloudinary/url-gen/qualifiers/region'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { crop, scale } from '@cloudinary/url-gen/actions/resize'
import { Pixelate } from '@cloudinary/url-gen/actions/effect/pixelate/Pixelate'
import { Image, Transformation } from 'cloudinary-react'
import { compass } from '@cloudinary/url-gen/qualifiers/gravity'
import { pixelate } from '@cloudinary/url-gen/actions/effect'

const Home = () => {
  // Create and configure your Cloudinary instance.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'chris101',
    },
  })

  // const cld_image = new CloudinaryImage('kq.jpg').effect(
  //   blur().strength(800).region(ocr())
  // )

  const image_display = cld
    .image('text/car')
    .resize(crop().width(1500).height(1400).gravity(compass('west')).x(50))
    .effect(pixelate().squareSize(15))
    // .effect(pixelate().squareSize(15).region(ocr()))

  // image_display.effect(pixelate().region(ocr()))

  // .resize(crop().width(1300).height(900).gravity(compass('south_east')))

  // new CloudinaryImage('piano.jpg')
  //   .effect(blur().strength(2000).region(ocr()))
  //   .resize(scale().width(500))

  // console.log(image_display)

  return (
    <div className={styles.container}>
      <Head>
        <title>Image Text Blur</title>
        <meta name='description' content='How to blur text on Images' />
      </Head>

      <main>
        <h1 className={styles.title}>Image Text Blur</h1>
        <AdvancedImage cldImg={image_display} />
      </main>
    </div>
  )
}

export default Home
