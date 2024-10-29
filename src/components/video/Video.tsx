export default function Video() {
    return (
        <div>
            <video 
            className="rounded-2xl "
            autoPlay
            loop
            muted
            playsInline
            style={{
                
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: -1,
            }}
            >
            <source src="/video.mp4" type="video/mp4" />
            {/* <source src="/video.webm" type="video/webm" /> */}
            Your browser does not support the video tag.
            </video>
        </div>
    )
}