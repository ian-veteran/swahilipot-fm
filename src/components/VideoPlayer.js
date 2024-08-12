const VideoPlayer = ({ src }) => {
  return (
    <div className='container'>
      <iframe
        width='1000'
        height='500'
        src='https://www.youtube.com/embed/D_6yayd_qcc?si=ddLw5op9B6t4BA1O'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerpolicy='strict-origin-when-cross-origin'
        allowfullscreen
      ></iframe>
    </div>
  )
}

export default VideoPlayer